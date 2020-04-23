import React from "react"
import { css } from "@emotion/core"
import { Layout } from "./Layout"
import { graphql, PageProps } from "gatsby"
import { TagsPageQuery } from "../../../types/graphqlTypes"

export type Tag = { name: string; parent?: string }
export type TagsPageContext = {
  tags: Tag[]
}
export type TagsPageProps = PageProps<{}, TagsPageContext>

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  pageContext: { tags },
}) => (
  <Layout title="TAGS">
    <table>
      {tags.map((tag, index) => (
        <tr>
          <th>{index}</th>
          <td>{tag.name}</td>
        </tr>
      ))}
    </table>
  </Layout>
)

export const pageQuery = graphql`
  query TagsPage {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            path
            status
            tags
          }
          headings {
            value
            depth
          }
          tableOfContents
          excerpt
          body
          wordCount {
            paragraphs
          }
          fileAbsolutePath
        }
      }
    }
  }
`

export default TagsPage
