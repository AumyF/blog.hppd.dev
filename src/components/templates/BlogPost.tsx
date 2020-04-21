import React from "react"
import { Post } from "../../utils/post"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXComponents } from "../atoms/MDXComponents"
import _ from "lodash"

export type BlogPostProps = {
  pageContext: { post: Post }
}

export const BlogPost: React.FC<BlogPostProps> = ({ pageContext }) => (
  <div>
    <h1>{pageContext.post.title}</h1>
    <MDXProvider components={MDXComponents}>
      <MDXRenderer>{pageContext.post.body}</MDXRenderer>
    </MDXProvider>
  </div>
)
export default BlogPost
