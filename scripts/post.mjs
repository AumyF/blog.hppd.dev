import fs from "fs/promises";

const directoryName = `posts/${[
  new Date().toISOString().split("T")[0],
  process.argv[2],
]
  .flatMap(e => e ?? [])
  .join("-")}`;

const initialMdxContent = `---
title: new article
tags:
  []
---

# Title

Write freely!`;

console.log(`New post path: ${directoryName}\nY/n: `);
for await (const line of process.stdin.setEncoding("utf-8")) {
  if (line.trim().toLowerCase() === "n") process.exit(0);
  else break;
}

// if (await askCancel(`New post path: ${directoryName}`)) process.exit(0);

await fs.mkdir(directoryName);
await fs.appendFile(`${directoryName}/index.mdx`, initialMdxContent, "utf-8");
