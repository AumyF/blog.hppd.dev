import React from "react"
import { Post } from "../../utils/post"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXComponents } from "../atoms/MDXComponents"
import _ from "lodash"
import { Layout } from "./Layout"

export type BlogPostProps = {
  pageContext: { post: Post }
}

export const BlogPost: React.FC<BlogPostProps> = ({ pageContext }) => (
  <Layout title={pageContext.post.title}>
    <MDXProvider components={MDXComponents}>
      <MDXRenderer>{pageContext.post.body}</MDXRenderer>
    </MDXProvider>
  </Layout>
)
export default BlogPost
