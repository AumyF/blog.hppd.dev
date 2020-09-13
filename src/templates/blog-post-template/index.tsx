import React from "react";
import { graphql, PageProps } from "gatsby";
import { BlogPostQuery } from "../../../types/graphqlTypes";
import { assertsNonNull as $ } from "../../utils/asserts-non-null";
import { Layout } from "../../components/layout";
import { Article } from "../../components/article";
import { TagList } from "../../components/atoms/tag-list";
import { GitInfo } from "../../components/git-info";
import Sidebar from "../../components/layout/sidebar";
import { compact } from "lodash";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ArticleElements } from "./article-elements";

export type BlogPostContext = {
  id: string;
};

export type BlogPostProps = PageProps<BlogPostQuery, BlogPostContext>;

export const BlogPost: React.FC<BlogPostProps> = ({ data: { mdx } }) => {
  const frontmatter = $(mdx?.frontmatter);
  const path = $(mdx?.fields?.path);
  return (
    <Layout
      {...{
        title: frontmatter.title,
        date: frontmatter.date,
        path,
      }}
      SidebarComponent={() => (
        <Sidebar>
          {TOC => (
            <>
              <TOC toc={mdx?.tableOfContents} />
              <div className="text-center pb-2 px-4 border-b border-gray-700">
                Git Information
              </div>
              <GitInfo filePath={$(mdx?.fields?.relativeDir)} />
            </>
          )}
        </Sidebar>
      )}
    >
      <TagList tags={compact(frontmatter.tags)} />
      <Article>
        <MDXProvider components={ArticleElements}>
          <MDXRenderer>{$(mdx?.body)}</MDXRenderer>
        </MDXProvider>
      </Article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "yy-MM-DD")
        tags
      }
      tableOfContents
      body
      excerpt(truncate: true)
      fields {
        path
        relativeDir
      }
    }
  }
`;

export default BlogPost;
