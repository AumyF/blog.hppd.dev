import React from "react"
import { css } from "@emotion/core"
import { Layout } from "./Layout"
import { PageProps } from "gatsby"

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

export default TagsPage
