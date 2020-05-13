import React from "react";
import { Post } from "../../libs/post";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXComponents } from "../atoms/MDXComponents";
import { Layout } from "./Layout";

export type BlogPostProps = {
  pageContext: { post: Post };
};

export const BlogPost: React.FC<BlogPostProps> = ({
  pageContext: {
    post: { title, date, body, toc },
  },
}) => (
  <Layout title={title} date={date} toc={toc}>
    <MDXProvider components={MDXComponents}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  </Layout>
);
export default BlogPost;
