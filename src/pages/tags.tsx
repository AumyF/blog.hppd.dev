import { graphql, PageProps } from "gatsby";
import React from "react";

import { TagsPageQuery } from "../../types/graphqlTypes";
import { Article } from "../components/article";
import { HeadTitle } from "../components/atoms/head-title";
import { Hyper } from "../components/atoms/Hyper";
import { Layout } from "../components/layout";
import { BodyContainer } from "../components/layout/container";
import { MainContent } from "../components/layout/main-content";
import {
  Sidebar,
  SidebarCard,
  SidebarCardTitle,
} from "../components/layout/sidebar";
import { TitleContainer, TitleName } from "../components/layout/title";
import { PostList } from "../components/post-link/post-list";
import { TableOfContents } from "../components/table-of-contents";
import { ArticleElements } from "../templates/blog-post-template/article-elements";

export type TagsPageProps = PageProps<TagsPageQuery>;

const H1 = ArticleElements.h1;

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout path="tags">
    <HeadTitle>Tags</HeadTitle>

    <TitleContainer>
      <TitleName>Tags</TitleName>
    </TitleContainer>

    <BodyContainer>
      <Sidebar>
        <SidebarCard scrollable>
          <SidebarCardTitle>Table of Contents</SidebarCardTitle>
          <TableOfContents
            toc={{
              items: group.map(({ fieldValue }) => ({
                title: fieldValue ?? "",
                url: `./#${fieldValue}`,
              })),
            }}
          />
        </SidebarCard>
      </Sidebar>

      <MainContent>
        <Article>
          {group.map(({ fieldValue, nodes }) => (
            <section key={fieldValue ?? ""}>
              <H1 id={`${fieldValue}`}>
                <Hyper to={"/tags/" + fieldValue ?? "#"}>{fieldValue}</Hyper>
              </H1>
              <PostList {...{ nodes }} />
            </section>
          ))}
        </Article>
      </MainContent>
    </BodyContainer>
  </Layout>
);

export const pageQuery = graphql`
  query TagsPage {
    allMdx(sort: { order: DESC, fields: fields___yyyymmdd }) {
      group(field: frontmatter___tags) {
        fieldValue
        nodes {
          excerpt(truncate: true)
          id
          frontmatter {
            tags
            title
          }
          fields {
            path
            yyyymmdd
          }
        }
      }
    }
  }
`;

export default TagsPage;
