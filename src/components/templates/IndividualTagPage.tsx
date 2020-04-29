import React from "react"
import { css } from "@emotion/core"
import { PageProps } from "gatsby"
import { Layout } from "./Layout"
import { Post } from "../../libs/post"
import PostLink from "../molecules/PostLink"

export type IndividualTagPageContext = { tag: string; posts: Post[] }
export type IndividualTagPageProps = PageProps<{}, IndividualTagPageContext>

export const IndividualTagPage: React.FC<IndividualTagPageProps> = ({
  pageContext: { posts, tag },
}) => (
  <Layout title={`tag: ${tag}`}>
    <div>
      {posts.map(p => (
        <PostLink excerpt={p.excerpt} path={p.path} title={p.title} />
      ))}
    </div>
  </Layout>
)

export default IndividualTagPage
