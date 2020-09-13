"use strict";

require("ts-node").register(
  require("jsonc-parser").parse(
    require("fs").readFileSync("./tsconfig.json", "utf-8")
  )
);

// /** @type import("gatsby").GatsbyNode["onCreateNode"] */
// const onCreateNode = (args, options) => {
//   console.log(args.node.internal.type);
// };

module.exports = require("./gatsby/node");
