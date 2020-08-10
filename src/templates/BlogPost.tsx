import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ArticleElements } from "../components/article-elements";
import { PostTags } from "../components/content/tags";
import { graphql, PageProps } from "gatsby";
import { BlogPostQuery } from "../../types/graphqlTypes";
import { assertsNonNull } from "../utils/asserts-non-null";
import { Layout } from "../components/layout";
import { Article } from "../components/article";

export type BlogPostContext = {
  id: string;
};

export type BlogPostProps = PageProps<BlogPostQuery, BlogPostContext>;

export const BlogPost: React.FC<BlogPostProps> = ({ data: { post } }) => {
  const { body, date, tags, title, toc, path } = assertsNonNull(post);
  return (
    <Layout {...{ title, date, path, toc }}>
      <PostTags tags={tags} />
      <Article>
        <MDXProvider components={ArticleElements}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPost($id: String) {
    post(id: { eq: $id }) {
      title
      date(formatString: "yy-MM-DD")
      body
      toc
      tags
      path
    }
  }
`;

export default BlogPost;
