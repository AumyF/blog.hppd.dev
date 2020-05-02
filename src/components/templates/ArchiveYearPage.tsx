import React from "react"
import { css } from "@emotion/core"
import { PageProps, graphql } from "gatsby"
import { Layout } from "./Layout"
import { Post } from "../../libs/post"
import PostLink from "../molecules/PostLink"
import {
  ArchiveYearPageQuery,
  ArchiveYearPageQueryVariables,
} from "../../../types/graphqlTypes"

export type ArchiveYearPageContext = {
  year: string
  posts: Post[]
}
export type ArchiveYearPageProps = PageProps<
  ArchiveYearPageQuery,
  ArchiveYearPageContext
>

export const ArchiveYearPage: React.FC<ArchiveYearPageProps> = ({
  pageContext: { posts, year },
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout title={year}>
    <div>
      {edges.map(({ node: { path, context } }) => {
        return (
          <PostLink
            {...{
              title: context?.post?.title ?? "",
              excerpt: "",
              path: context?.post?.path ?? "#",
            }}
          />
        )
      })}
    </div>
  </Layout>
)

export default ArchiveYearPage

export const pageQuery = graphql`
  query ArchiveYearPage($year: String) {
    allSitePage(filter: { path: { regex: $year } }) {
      edges {
        node {
          path
          context {
            post {
              title
              path
            }
          }
        }
      }
    }
  }
`
