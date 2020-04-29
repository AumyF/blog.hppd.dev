import { TOC } from "./toc"
import { Mdx, MdxFrontmatter, MdxEdge } from "../../types/graphqlTypes"
import { compact } from "lodash"
import { PostDate } from "./date"

export type Post = {
  id: string
  toc: TOC
  body: string
  excerpt: string
  path: string
  status: string
  tags: readonly string[]
  title: string
  date: PostDate
}

export const Post: (e: MdxEdge) => Post = ({
  node: { body, excerpt, id, tableOfContents, frontmatter, fileAbsolutePath },
}) => {
  const splitted = fileAbsolutePath.split("/"),
    fileName = splitted.pop()?.split(".")[0],
    [day, ...title] = fileName?.split("-") ?? ["01", "untitled"],
    month = splitted.pop() ?? "01",
    year = splitted.pop() ?? "2000"
  const date = new PostDate(year, month, day)

  return {
    body,
    id,
    toc: tableOfContents,
    date,
    description: excerpt,
    excerpt: excerpt,
    path: [year, month, day, title.join("-")].join("/"),
    status: frontmatter?.status ?? "public",
    tags: compact(frontmatter?.tags),
    title: title.join("-"),
  }
}
