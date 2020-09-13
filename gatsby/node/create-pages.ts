import { GatsbyNode } from "gatsby";
import { GatsbyNodeQuery } from "../../types/graphqlTypes";
import { TagPageContext } from "../../src/templates/tag-page-template";
import Path from "path";
import { BlogPostContext } from "../../src/templates/blog-post-template";
import { cyan, yellow } from "./colored-print";
import { assertsNonNull } from "../../src/utils/asserts-non-null";
import { ArchiveYearPageContext } from "../../src/templates/archive-year-template";
import { ArchiveMonthPageContenxt } from "../../src/templates/archive-month-template";

const BlogPostTemplate = Path.resolve(
  "./src/templates/blog-post-template/index.tsx"
);
const TagPageTemplate = Path.resolve("./src/templates/tag-page-template.tsx");
const ArchiveYearTemplate = Path.resolve(
  "./src/templates/archive-year-template.tsx"
);
const ArchiveMonthTemplate = Path.resolve(
  "./src/templates/archive-month-template.tsx"
);

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  console.log(cyan("started ") + "createPages");

  const result = await graphql<GatsbyNodeQuery>(`
    query gatsbyNode {
      allMdx(filter: { frontmatter: { status: { ne: "private" } } }) {
        allTags: distinct(field: frontmatter___tags)
        allYears: distinct(field: fields___yyyy)
        allMonthes: distinct(field: fields___yyyymm)
        allFilenames: distinct(field: fields___filename)
        edges {
          node {
            id
            fields {
              path
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

  const { allMdx } = result.data;

  // // 記事
  for (const { node } of allMdx.edges) {
    console.log(`  ${yellow("creating")} BlogPostPage - ${node.fields?.path}`);
    createPage<BlogPostContext>({
      path: assertsNonNull(node.fields?.path),
      component: BlogPostTemplate,
      context: { id: node.id },
    });
  }

  // 各タグのページ;
  for (const tag of allMdx.allTags) {
    console.log(`  ${yellow("creating")} TagPage - ${tag}`);
    createPage<TagPageContext>({
      path: `/tags/${tag}`,
      component: TagPageTemplate,
      context: {
        tag,
      },
    });
  }

  for (const yyyy of allMdx.allYears) {
    createPage<ArchiveYearPageContext>({
      path: `/${yyyy}`,
      component: ArchiveYearTemplate,
      context: {
        yyyy,
      },
    });
  }

  for (const yyyymm of allMdx.allMonthes) {
    createPage<ArchiveMonthPageContenxt>({
      path: `/${yyyymm.split("-").join("/")}`,
      component: ArchiveMonthTemplate,
      context: {
        yyyymm,
      },
    });
  }
};
