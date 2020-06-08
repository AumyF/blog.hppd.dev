import { GatsbyNode, CreateSchemaCustomizationArgs } from "gatsby";

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
        tags: "[String!]!",
        toc: "TableOfContents!",
      },
      extensions: [],
    })
  );
};
