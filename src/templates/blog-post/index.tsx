import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ArticleElements } from "./article-elements";
import { graphql, PageProps } from "gatsby";
import { BlogPostQuery } from "../../../types/graphqlTypes";
import { assertsNonNull } from "../../utils/asserts-non-null";
import { Layout } from "../../components/layout";
import { Article } from "../../components/article";
import { TagList } from "../../components/atoms/tag-list";
import { GitInfo } from "../../components/git-info";
import Sidebar from "../../components/layout/sidebar";

export type BlogPostContext = {
  id: string;
};

export type BlogPostProps = PageProps<BlogPostQuery, BlogPostContext>;

export const BlogPost: React.FC<BlogPostProps> = ({ data: { post } }) => {
  const { body, date, tags, title, toc, path } = assertsNonNull(post);
  return (
    <Layout
      {...{ title, date, path }}
      SidebarComponent={() => (
        <Sidebar>
          {TOC => (
            <>
              <TOC toc={toc} />
              <div className="text-center pb-2 px-4 border-b border-gray-700">
                Git Information
              </div>
              <GitInfo filePath={path} />
            </>
          )}
        </Sidebar>
      )}
    >
      <TagList tags={tags} />
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
