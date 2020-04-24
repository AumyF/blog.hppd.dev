import React from "react"
import { css } from "@emotion/core"
import { PageProps } from "gatsby"
import { Layout } from "./Layout"
import { Post } from "../../libs/post"

export type IndividualTagPageContext = { tag: string; posts: Post[] }
export type IndividualTagPageProps = PageProps<{}, IndividualTagPageContext>

export const IndividualTagPage: React.FC<IndividualTagPageProps> = ({
  pageContext: { posts, tag },
}) => (
  <Layout title={name}>
    <div></div>
  </Layout>
)

export default IndividualTagPage
