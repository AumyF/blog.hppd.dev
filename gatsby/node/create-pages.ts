import { GatsbyNode } from "gatsby";
import Path from "path";

import { ArchiveMonthPageContenxt } from "../../src/templates/archive-month-template";
import { ArchiveYearPageContext } from "../../src/templates/archive-year-template";
import { BlogPostContext } from "../../src/templates/blog-post-template";
import { TagPageContext } from "../../src/templates/tag-page-template";
import { assertsNonNull } from "../../src/utils/asserts-non-null";
import { GatsbyNodeQuery } from "../../types/graphqlTypes";
import { cyan, yellow } from "./colored-print";

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

/**
 * VSCode GraphQL 拡張によるサポートを有効化する．Tagged Template Literal を文字列にするだけ．
 * @param graphqlQuery
 */
const gql = (graphqlQuery: TemplateStringsArray) => graphqlQuery.raw.join("");

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  console.log(cyan("started ") + "createPages");

  const result = await graphql<GatsbyNodeQuery>(gql`
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
