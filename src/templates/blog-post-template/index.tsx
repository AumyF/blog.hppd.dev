import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

import { BlogPostQuery } from "../../../types/graphqlTypes";
import { Article } from "../../components/article";
import { TagList } from "../../components/atoms/tag-list";
import { GitInfo } from "../../components/git-info";
import { Layout } from "../../components/layout";
import { TableOfContents } from "../../components/table-of-contents";
import { assertsNonNull as $ } from "../../utils/asserts-non-null";
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
        path,
      }}
      SidebarComponent={[
        {
          title: "Table of Contents",
          children: <TableOfContents toc={mdx?.tableOfContents} />,
        },
        {
          title: "Git Information",
          children: <GitInfo filePath={$(mdx?.fields?.relativeDir)} />,
        },
      ]}
      TitleComponent={() => (
        <TagList
          className="mx-auto mt-2"
          tags={
            frontmatter.tags?.filter(
              (tag): tag is string => typeof tag === "string"
            ) ?? [""]
          }
        />
      )}
    >
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
