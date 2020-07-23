import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { ArchiveMonthPageQuery } from "../../types/graphqlTypes";
import { PostList } from "../components/post-link/post-list";
import { PostListPage } from "./post-list-page";

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
  <PostListPage
    {...{ edges }}
    title={`${year}/${month}`}
    path={`${year}/${month}`}
  />
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
          excerpt
        }
      }
    }
  }
`;

export default ArchiveMonthPage;
