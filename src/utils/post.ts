import { TOC } from "./toc"
import { Mdx, MdxFrontmatter } from "../../types/graphqlTypes"

export type Post = {
  id: string
  toc: TOC
  body: string
  excerpt: string
  path: string
  status: string
  tags: readonly string[]
  title: string
  date: string
  description: string
}

/** allMdx.edges.[].node: Mdx を Postに変換する。すべてのfrontmatter値のnullチェックを行う。*/
export const toPostStrict = <T extends keyof Post>({
  body,
  excerpt,
  id,
  tableOfContents,
  frontmatter,
}: Mdx): Pick<Post, T> => {
  /* 
    スマートキャスト働かせてnullチェックするやりかたがわからんかった。のでゴリ押しキャスト
    */
  if (frontmatter == null) {
    throw new Error("frontmatter is null")
  }
  Object.values(frontmatter).map(v => {
    if (v == null) {
      throw new TypeError()
    }
  })

  const post = {
    body,
    excerpt,
    id,
    tableOfContents,
    ...(frontmatter as Required<MdxFrontmatter>),
  }

  return post
}
