import React from "react";
import { css } from "@emotion/core";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Post, genPostDateAndPath } from "../libs/post";
import {
  ArchiveMonthPageQuery,
  MdxFrontmatter,
} from "../../types/graphqlTypes";
import { PostList } from "../components/post-link/post-list";

export type ArchiveMonthPageContenxt = {
  year: string;
  month: string;
  startDate: string;
  endDate: string;
};
export type ArchiveMonthPageProps = PageProps<
  ArchiveMonthPageQuery,
  ArchiveMonthPageContenxt
>;

export const ArchiveMonthPage: React.FC<ArchiveMonthPageProps> = ({
  pageContext: { month, year },
  data: {
    allPost: { edges },
  },
}) => (
  <Layout title={`${year}/${month}`}>
    <PostList edges={edges} />
  </Layout>
);

export const pageQuery = graphql`
  query ArchiveMonthPage($startDate: Date, $endDate: Date) {
    allPost(filter: { date: { gt: $startDate, lt: $endDate } }) {
      edges {
        node {
          title
          date
          path
          id
          tags
        }
      }
    }
  }
`;

export default ArchiveMonthPage;
