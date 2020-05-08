import {
  GatsbyNode,
  CreateSchemaCustomizationArgs,
  GatsbyBrowser,
  CreateNodeArgs,
} from "gatsby";
import {
  //GatsbyNodeQuery,
  Mdx,
  Maybe,
  MdxFrontmatter,
  DirectoryGroupConnection,
  Directory,
} from "../../types/graphqlTypes";
import Path from "path";
import { Post } from "../libs/post";
import _ from "lodash";
import { IndividualTagPageContext } from "../components/templates/IndividualTagPage";
import { ArchiveMonthPageContenxt } from "../components/templates/ArchiveMonthPage";
import { ArchiveYearPageContext } from "../components/templates/ArchiveYearPage";

type GatsbyNodeQuery = {
  allMdx: {
    edges: Array<{
      node: Pick<
        Mdx,
        "id" | "tableOfContents" | "fileAbsolutePath" | "body" | "excerpt"
      > & {
        frontmatter?: Maybe<Pick<MdxFrontmatter, "status" | "tags" | "title">>;
      };
      next?: Maybe<{ frontmatter?: Maybe<Pick<MdxFrontmatter, "title">> }>;
      previous?: Maybe<{ frontmatter?: Maybe<Pick<MdxFrontmatter, "title">> }>;
    }>;
  };
  allDirectory: {
    group: Array<
      Pick<DirectoryGroupConnection, "fieldValue"> & {
        edges: Array<{ node: Pick<Directory, "name"> }>;
      }
    >;
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
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
            frontmatter {
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
      component: Path.resolve("./src/components/templates/BlogPost.tsx"),
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
      component: Path.resolve(
        "./src/components/templates/IndividualTagPage.tsx"
      ),
      context: { tag: tag, posts: classifiedPosts[tag] },
    })
  );
  result.data.allDirectory.group.forEach(({ edges, fieldValue }) => {
    edges.forEach(({ node: { name } }) => {
      if (fieldValue === "..") {
        return;
      } else if (fieldValue === "") {
        createPage<ArchiveYearPageContext>({
          component: Path.resolve(
            "./src/components/templates/ArchiveYearPage.tsx"
          ),
          context: {
            year: name,
            posts: [],
            startDate: `${name}-01-01`,
            endDate: `${parseInt(name) + 1}-01-01`,
          },
          path: `/${name}/`,
        });
      } else {
        createPage<ArchiveMonthPageContenxt>({
          component: Path.resolve(
            "./src/components/templates/ArchiveMonthPage.tsx"
          ),
          context: {
            month: name,
            posts: [],
            startDate: `${fieldValue}-${name}-01`,
            endDate: `${fieldValue}-${parseInt(name) + 1}-01`,
          },
          path: `/${fieldValue}/${name}`,
        });
      }
    });
  });
};

/*
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({
  actions: { createTypes },
  schema: { buildObjectType },
}: CreateSchemaCustomizationArgs) => {
  createTypes(
    buildObjectType({
      name: "PostDate",
      fields: { year: "Int!", month: "Int!", day: "Int!" },
    })
  );
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  actions: { createNodeField },
  node,
}: CreateNodeArgs) => {
  if (!isMdx(node)) return;
  createNodeField({node: node,fieldName: "PostDate",value: "" })
};

const isMdx = (node: { internal: { type: string } }): node is Mdx =>
  node.internal.type === "Mdx";
*/
