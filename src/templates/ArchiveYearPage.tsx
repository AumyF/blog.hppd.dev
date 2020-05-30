import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Post, genPostDateAndPath } from "../libs/post";
import { ArchiveYearPageQuery } from "../../types/graphqlTypes";
import { PostList } from "../components/organisms/PostList";

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
}) => (
  <Layout title={year}>
    <div>
      <PostList edges={edges} />
    </div>
  </Layout>
);

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
        }
      }
    }
  }
`;
