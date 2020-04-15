"use strict"

require("ts-node").register(
  require("jsonc-parser").parse(
    require("fs").readFileSync("./tsconfig.json", "utf-8")
  )
)

exports.createPages = require("./src/utils/gatsby-node").createPages
