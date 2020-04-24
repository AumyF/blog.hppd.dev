import React from "react"
import { css } from "@emotion/core"
import { Layout } from "../components/templates/Layout"
import { PageProps, graphql } from "gatsby"
import { TagsPageQuery } from "../../types/graphqlTypes"
import PostLink from "../components/molecules/PostLink"
import { nage } from "../utils/nage"

export type TagsPageProps = PageProps<TagsPageQuery>

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout title="TAGS">
    {group.map(tag => (
      <section>
        <h2>{tag.fieldValue}</h2>
        <p>記事数: {tag.totalCount}</p>
        {tag.edges.map(({ node: post }) => (
          <PostLink
            path={post.frontmatter?.path!}
            excerpt={post.excerpt}
            title={post.frontmatter?.title!}
          />
        ))}
      </section>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query TagsPage {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
        edges {
          node {
            excerpt
            frontmatter {
              title
              date
              path
            }
          }
        }
      }
    }
  }
`

export default TagsPage
