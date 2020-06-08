import { GatsbyNode, NodeInput } from "gatsby";
import { GatsbyNodeQuery } from "../../types/graphqlTypes";
import { Post } from "../libs/post";
import { IndividualTagPageContext } from "../templates/IndividualTagPage";
import { ArchiveYearPageContext } from "../templates/ArchiveYearPage";
import { ArchiveMonthPageContenxt } from "../templates/ArchiveMonthPage";
import Path from "path";

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
          next {
            frontmatter {
              title
            }
          }
          previous {
            frontmatter {
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

  const tagTmpArray: string[] = [];
  const classifiedPosts: { [index: string]: Post[] } = {};

  result.data.allMdx.edges.forEach(edge => {
    const post = Post(edge);
    createPage({
      path: post.path ?? post.id,
      component: Path.resolve("./src/templates/BlogPost.tsx"),
      context: { post: post },
    });
    post.tags.forEach(t => {
      if (classifiedPosts[t] == null) {
        classifiedPosts[t] = [];
      }
      classifiedPosts[t].push(post);
    });
    tagTmpArray.push(...post.tags);
  });

  tagTmpArray.forEach(tag =>
    createPage<IndividualTagPageContext>({
      path: "/tags/" + tag,
      component: Path.resolve("./src/templates/IndividualTagPage.tsx"),
      context: {
        tag: tag,
        edges: classifiedPosts[tag].map(node => ({ node })),
      },
    })
  );
  result.data.allDirectory.group.forEach(({ edges, fieldValue }) => {
    edges.forEach(({ node: { name } }) => {
      if (fieldValue === "..") {
        return;
      } else if (fieldValue === "") {
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
        createPage<ArchiveMonthPageContenxt>({
          component: Path.resolve("./src/templates/ArchiveMonthPage.tsx"),
          context: {
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
    path: string;
    status: string;
    tags: readonly string[];
    toc: any;
  } => {
    const { node } = edge;
    const p = Post({ node: node });
    const pn: ReturnType<typeof genPostNode> = {
      ...p,
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
  for (const edge of result.data.allMdx.edges) {
    createNode(genPostNode(edge, await loadNodeContent(edge.node)));
  }
};
