import { GatsbyNode, NodeInput } from "gatsby";
import { GatsbyNodeQuery } from "../../types/graphqlTypes";
import { IndividualTagPageContext } from "../../src/templates/IndividualTagPage";
import { ArchiveYearPageContext } from "../../src/templates/ArchiveYearPage";
import { ArchiveMonthPageContenxt } from "../../src/templates/ArchiveMonthPage";
import Path from "path";
import { BlogPostContext } from "../../src/templates/blog-post";
import { Post } from "./post";

const cyan = (text: unknown) => {
  return `\x1b[36m${text}\x1b[0m`;
};

const yellow = (text: unknown) => {
  return `\x1b[33m${text}\x1b[0m`;
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage, createNode },
  loadNodeContent,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  console.log(cyan("started ") + "createPages");
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
            excerpt(truncate: true)
            internal {
              content
              type
            }
            frontmatter {
              year: date(formatString: "YYYY")
              month: date(formatString: "MM")
              date
              status
              tags
              title
            }
          }
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

  type Month = {
    y: string;
    m: string;
  };

  const allYears = new Set<string>();
  const allMonthes = new Set<Month>();

  for (const {
    node: { frontmatter },
  } of result.data.allMdx.edges) {
    allYears.add(frontmatter?.year);
    allMonthes.add({ y: frontmatter?.year, m: frontmatter?.month });
  }

  for (const year of allYears) {
    console.log(`  ${yellow("creating")} ArchiveYearPage - ${year}`);
    createPage<ArchiveYearPageContext>({
      component: Path.resolve("./src/templates/ArchiveYearPage.tsx"),
      context: {
        year,
        startDate: `${year}-01-01`,
        endDate: `${Number.parseInt(year) + 1}-01-01`,
      },
      path: `/${year}/`,
    });
  }

  for (const { y, m } of allMonthes) {
    console.log(`  ${yellow("creating")} ArchiveMonthPage - ${y}-${m}`);
    createPage<ArchiveMonthPageContenxt>({
      component: Path.resolve("./src/templates/ArchiveMonthPage.tsx"),
      context: {
        year: y,
        month: m,
        startDate: `${y}-${m}-01`,
        endDate: `${y}-${parseInt(m) + 1}-01`,
      },
      path: `/${y}/${m}`,
    });
  }

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

  // Postを生成してGraphQLに突っ込み、ついでにcreatePage
  for (const edge of result.data.allMdx.edges) {
    const post = genPostNode(edge, await loadNodeContent(edge.node as any));
    createNode(post);

    console.log(`  ${yellow("creating")} BlogPostPage - ${post.path}`);
    createPage<BlogPostContext>({
      path: post.path,
      component: Path.resolve("./src/templates/blog-post/index.tsx"),
      context: { id: post.id },
    });
  }

  // 各タグのページ
  for (const tag of result.data.allMdx.distinct) {
    console.log(`${yellow(`  creating`)} IndividualTagPage - ${tag}`);
    createPage<IndividualTagPageContext>({
      path: "/tags/" + tag,
      component: Path.resolve("./src/templates/IndividualTagPage.tsx"),
      context: {
        tag,
      },
    });
  }
};
