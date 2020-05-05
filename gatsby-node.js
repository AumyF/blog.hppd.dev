"use strict";

require("ts-node").register(
  require("jsonc-parser").parse(
    require("fs").readFileSync("./tsconfig.json", "utf-8")
  )
);

module.exports = require("./src/gatsby-node");
