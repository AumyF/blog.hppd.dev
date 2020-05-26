import React from "react";
import { css } from "@emotion/core";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout/layout";
import { Post, genPostDateAndPath } from "../libs/post";
import PostLink from "../components/post-link/post-link";
import {
  ArchiveMonthPageQuery,
  MdxFrontmatter,
} from "../../types/graphqlTypes";
import PostList from "../components/organisms/PostList";

export type ArchiveMonthPageContenxt = {
  month: string;
  posts: Post[];
  startDate: string;
  endDate: string;
};
export type ArchiveMonthPageProps = PageProps<
  ArchiveMonthPageQuery,
  ArchiveMonthPageContenxt
>;

export const ArchiveMonthPage: React.FC<ArchiveMonthPageProps> = ({
  pageContext: { month, endDate, startDate, posts },
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout title={month}>
    <PostList
      posts={edges.map(({ node: { frontmatter, fileAbsolutePath } }) => {
        const { title } = frontmatter ?? { title: "" };
        const { path } = genPostDateAndPath(fileAbsolutePath);
        return { path, title };
      })}
    />
  </Layout>
);

export const pageQuery = graphql`
  query ArchiveMonthPage($startDate: Date, $endDate: Date) {
    allMdx(
      filter: { frontmatter: { date: { gt: $startDate, lt: $endDate } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          fileAbsolutePath
          id
        }
      }
    }
  }
`;

export default ArchiveMonthPage;
