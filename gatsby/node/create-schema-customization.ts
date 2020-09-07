import { GatsbyNode, CreateSchemaCustomizationArgs } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({
  actions: { createTypes },
  schema: { buildObjectType },
}: CreateSchemaCustomizationArgs) => {
  console.log("ciao!");
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
          /**
           * Added because of avoiding `Deprecation warning - adding inferred resolver for field Post.date. In Gatsby v3, only fields with an explicit directive/extension will get a resolver.`
           * @see https://www.gatsbyjs.org/docs/schema-customization/#extensions-and-directives
           *
           */
          extensions: {
            dateformat: {},
          },
        },
        excerpt: "String!",
        path: "String!",
        status: "String!",
        tags: "[String!]!",
        toc: "JSON!",
      },
      extensions: [],
    })
  );
};
