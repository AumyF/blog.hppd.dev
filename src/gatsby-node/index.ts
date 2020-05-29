import {
  GatsbyNode,
  CreateSchemaCustomizationArgs,
  CreateNodeArgs,
  SetFieldsOnGraphQLNodeTypeArgs,
  PluginOptions,
  GatsbyGraphQLObjectType,
  Node,
  NodeInput,
  CreateResolversArgs,
} from "gatsby";
import {
  //GatsbyNodeQuery,
  Mdx,
  Maybe,
  MdxFrontmatter,
  DirectoryGroupConnection,
  Directory,
  MdxEdge,
} from "../../types/graphqlTypes";
import Path from "path";
import { Post } from "../libs/post";
import { IndividualTagPageContext } from "../templates/IndividualTagPage";
import { ArchiveMonthPageContenxt } from "../templates/ArchiveMonthPage";
import { ArchiveYearPageContext } from "../templates/ArchiveYearPage";

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
      context: { tag: tag, posts: classifiedPosts[tag] },
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
            posts: [],
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
            posts: [],
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

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({
  actions: { createTypes },
  schema: { buildObjectType },
}: CreateSchemaCustomizationArgs) => {
  createTypes(
    buildObjectType({
      name: "TableOfContentsItem",
      fields: {
        url: "String!",
        title: "String!",
        items: "[TableOfContentsItem]",
      },
    })
  );
  createTypes(
    buildObjectType({
      name: "TableOfContents",
      fields: {
        items: "[TableOfContentsItem]!",
      },
    })
  );
  createTypes(
    buildObjectType({
      interfaces: [`Node`],
      name: "Post",
      fields: {
        title: "String!",
        body: "String!",
        date: {
          type: "Date!",
          /* https://www.gatsbyjs.org/docs/schema-customization/#extensions-and-directives
          Without this property, a warning occurs: "Deprecation warning - adding inferred resolver for field Post.date. In Gatsby v3, only fields with an explicit directive/extension will get a resolver."
          */
          extensions: {
            dateformat: {},
          },
        },
        path: "String!",
        status: "String!",
        tags: "[String]!",
        toc: "JSON!",
      },
      extensions: [],
    })
  );
};

const isMdx = (node: { internal: { type: string } }): node is Mdx =>
  node.internal.type === "Mdx";

/*
export const setFieldsOnGraphQLNodeType: GatsbyNode["setFieldsOnGraphQLNodeType"] = async (
  args: SetFieldsOnGraphQLNodeTypeArgs,
  options: PluginOptions
): Promise<GatsbyGraphQLObjectType> => {
  const MdxNodes: Mdx[] = args.getNodesByType("Mdx");
  return { kind: "OBJECT", config: { name: "Post" } };
};
*/
