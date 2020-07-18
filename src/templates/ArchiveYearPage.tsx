import React from "react";
import { PageProps, graphql } from "gatsby";
import { ArchiveYearPageQuery } from "../../types/graphqlTypes";
import { PostListPage } from "./post-list-page";

export type ArchiveYearPageContext = {
  year: string;
  startDate: string;
  endDate: string;
};
export type ArchiveYearPageProps = PageProps<
  ArchiveYearPageQuery,
  ArchiveYearPageContext
>;

export const ArchiveYearPage: React.FC<ArchiveYearPageProps> = ({
  pageContext: { year },
  data: {
    allPost: { edges },
  },
}) => <PostListPage edges={edges} title={year} path={year} />;

export default ArchiveYearPage;

export const pageQuery = graphql`
  query ArchiveYearPage($startDate: Date, $endDate: Date) {
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
