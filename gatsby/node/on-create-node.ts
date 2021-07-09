import * as Gatsby from "gatsby";

import { assertsNonNull } from "../../src/utils/asserts-non-null";

type GraphQLNodeToGatsbyNode<G> = G extends GatsbyTypes.Node & infer R
  ? Omit<R, "internal" | "children" | "parent"> & Gatsby.Node
  : never;

type Mdx = GraphQLNodeToGatsbyNode<GatsbyTypes.Mdx>;

const isMdx = (node: Gatsby.Node): node is Mdx => node.internal.type === "Mdx";

export const onCreateNode: Gatsby.GatsbyNode["onCreateNode"] = ({
  actions: { createNodeField },
  node,
}) => {
  // console.log(node.internal.type);
  if (!isMdx(node)) return;

  const splitted = node.fileAbsolutePath?.split("/");

  const [year, month, day, ..._filename] = assertsNonNull(
    splitted[splitted.length - 2].split("-")
  );

  const filename = _filename.join("-");

  const path = `${year}/${month}/${day}-${filename}`;

  const createNodeFields =
    (fields: [string, unknown][]) => (node: Gatsby.Node) => {
      for (const [name, value] of fields) {
        createNodeField({
          node,
          name,
          value,
        });
      }
    };

  createNodeFields([
    ["path", path],
    ["yyyy", year],
    ["yyyymm", `${year}-${month}`],
    ["yyyymmdd", `${year}-${month}-${day}`],
    ["filename", filename],
    ["relativeDir", `${year}-${month}-${day}-${filename}`],
  ])(node);
};
