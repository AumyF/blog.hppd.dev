import { GatsbyNode, NodeInput } from "gatsby";
import { GatsbyNodeQuery } from "../../../types/graphqlTypes";
import { Post } from "../../libs/post";
import { IndividualTagPageContext } from "../../templates/IndividualTagPage";
import { ArchiveYearPageContext } from "../../templates/ArchiveYearPage";
import { ArchiveMonthPageContenxt } from "../../templates/ArchiveMonthPage";
import Path from "path";
import { nage } from "../../utils/nage";
import { assertsNonNull } from "../../libs/asserts-non-null";
import { BlogPostContext } from "../../templates/BlogPost";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage, createNode },
  loadNodeContent,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  console.log("хорошо!");
  const result = await graphql<GatsbyNodeQuery>(`
    query gatsbyNode {
      allMdx(filter: { frontmatter: { status: { ne: "private" } } }) {
        distinct(field: frontmatter___tags)
        edges {
          node {
            id
            tableOfContents(maxDepth: 10)
            fileAbsolutePath
            body
            excerpt
            internal {
              content
              type
            }
            frontmatter {
              date
              status
              tags
              title
            }
          }
        }
      }
      allDirectory {
        group(field: relativeDirectory) {
          edges {
            node {
              name
            }
          }
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }
  if (!result.data) {
    reporter.panicOnBuild("result.data is undefined");
    return;
  }

  result.data.allDirectory.group.forEach(({ edges, fieldValue }) => {
    edges.forEach(({ node: { name } }) => {
      if (fieldValue === "..") {
        return;
      } else if (fieldValue === "") {
        console.log(`  ArchiveYearPage: ${name}`);
        createPage<ArchiveYearPageContext>({
          component: Path.resolve("./src/templates/ArchiveYearPage.tsx"),
          context: {
            year: name,
            startDate: `${name}-01-01`,
            endDate: `${parseInt(name) + 1}-01-01`,
          },
          path: `/${name}/`,
        });
      } else {
        console.log(`  ArchiveMonthPage: ${fieldValue}-${name}`);
        createPage<ArchiveMonthPageContenxt>({
          component: Path.resolve("./src/templates/ArchiveMonthPage.tsx"),
          context: {
            year: assertsNonNull(fieldValue),
            month: name,
            startDate: `${fieldValue}-${name}-01`,
            endDate: `${fieldValue}-${parseInt(name) + 1}-01`,
          },
          path: `/${fieldValue}/${name}`,
        });
      }
    });
  });

  const genPostNode = (
    edge: Parameters<typeof Post>[0],
    content: string
  ): NodeInput & {
    title: string;
    body: string;
    date: any;
    excerpt: string;
    path: string;
    status: string;
    tags: string[];
    toc: any;
  } => {
    const { node } = edge;
    const p = Post({ node });
    const pn: ReturnType<typeof genPostNode> = {
      ...p,
      excerpt: node.excerpt,
      id: createNodeId(`${node.id} WRYYYYY`),
      parent: node.id,
      internal: {
        content,
        type: `Post`,
        contentDigest: createContentDigest(p),
      },
    };
    return pn;
  };

  // Post
  const allTags = new Set<string>();

  // Postを生成してGraphQLに突っ込み、ついでにcreatePage
  for (const edge of result.data.allMdx.edges) {
    const post = genPostNode(edge, await loadNodeContent(edge.node));
    createNode(post);

    createPage<BlogPostContext>({
      path: post.path,
      component: Path.resolve("./src/templates/BlogPost.tsx"),
      context: { id: post.id },
    });

    for (const tag of post.tags) {
      allTags.add(tag);
    }
  }

  // 各タグのページ
  for (const tag of allTags) {
    console.log(`createPages > IndividualTagPage: ${tag}`);
    createPage<IndividualTagPageContext>({
      path: "/tags/" + tag,
      component: Path.resolve("./src/templates/IndividualTagPage.tsx"),
      context: {
        tag,
      },
    });
  }
};
