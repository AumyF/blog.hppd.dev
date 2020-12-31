import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

import { BlogPostQuery } from "../../../types/graphqlTypes";
import { Article } from "../../components/article";
import { HeadTitle } from "../../components/atoms/head-title";
import { TagList } from "../../components/atoms/tag-list";
import { Author } from "../../components/author";
import { GitInfo } from "../../components/git-info";
import { Layout } from "../../components/layout";
import { BodyContainer } from "../../components/layout/container";
import { MainContent } from "../../components/layout/main-content";
import {
  Sidebar,
  SidebarCard,
  SidebarCardTitle,
} from "../../components/layout/sidebar";
import { TitleContainer, TitleName } from "../../components/layout/title";
import { Share } from "../../components/share";
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
    >
      <HeadTitle>{frontmatter.title}</HeadTitle>
      <TitleContainer>
        <TitleName>{frontmatter.title}</TitleName>
        <TagList tags={frontmatter.tags?.flatMap(tag => tag ?? []) ?? []} />
      </TitleContainer>

      <BodyContainer>
        <Sidebar>
          <SidebarCard>
            <SidebarCardTitle>著者</SidebarCardTitle>
            <Author />
          </SidebarCard>

          <SidebarCard scrollable>
            <SidebarCardTitle>Table of Contents</SidebarCardTitle>
            <TableOfContents toc={mdx?.tableOfContents} />
          </SidebarCard>

          <SidebarCard>
            <SidebarCardTitle>共有</SidebarCardTitle>
            <Share url={path} />
          </SidebarCard>

          <SidebarCard>
            <SidebarCardTitle>Git Information</SidebarCardTitle>
            <GitInfo filePath={$(mdx?.fields?.relativeDir)} />
          </SidebarCard>
        </Sidebar>

        <MainContent>
          <Article>
            <MDXProvider components={ArticleElements}>
              <MDXRenderer>{$(mdx?.body)}</MDXRenderer>
            </MDXProvider>
          </Article>
        </MainContent>
      </BodyContainer>
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
