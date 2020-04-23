import { TOC } from "./toc"
import { Mdx, MdxFrontmatter, MdxEdge } from "../../types/graphqlTypes"
import { compact } from "lodash"

export type Post = {
  id: string
  toc: TOC
  body: string
  excerpt: string
  path: string
  status: string
  category: string
  tags: readonly string[]
  title: string
  date: string
}

export const Post: (e: MdxEdge) => Post = ({
  node: { body, excerpt, id, tableOfContents, frontmatter },
}) => {
  return {
    body,
    id,
    toc: tableOfContents,
    date: frontmatter?.date ?? "UNDATED",
    description: excerpt,
    excerpt: excerpt,
    path: frontmatter?.path ?? id,
    status: frontmatter?.status ?? "public",
    tags: compact(frontmatter?.tags),
    title: frontmatter?.title ?? "Untitled",
    category: frontmatter?.category ?? "UNCATEGORIZED",
  }
}
