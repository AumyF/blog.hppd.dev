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

export const Post: (e: {
  node: Pick<
    Mdx,
    | "body"
    | "excerpt"
    | "fileAbsolutePath"
    | "frontmatter"
    | "id"
    | "tableOfContents"
  >
  /* previous: Mdx
  next: Mdx*/
}) => Post = ({
  node: { body, excerpt, id, tableOfContents, frontmatter, fileAbsolutePath },
}) => {
  return {
    ...genPostDateAndPath(fileAbsolutePath),
    body,
    id,
    toc: tableOfContents,
    description: excerpt,
    excerpt: excerpt,
    status: frontmatter?.status ?? "public",
    title: frontmatter?.title ?? "UNTITLED",
    tags: compact(frontmatter?.tags),
  }
}

export const genPostDateAndPath: (
  fileAbsolutePath: string
) => { path: string; date: PostDate } = fileAbsolutePath => {
  const splitted = fileAbsolutePath.split("/"),
    fileName = splitted.pop()?.split(".")[0],
    [day, ...title] = fileName?.split("-") ?? ["01", "untitled"],
    month = splitted.pop() ?? "01",
    year = splitted.pop() ?? "2000"
  const date = PostDate(year, month, day)
  return {
    date,
    path: [year, month, day, title.join("-")].join("/"),
  }
}
