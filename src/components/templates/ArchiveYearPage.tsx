import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../layout/Layout";
import { Post, genPostDateAndPath } from "../../libs/post";
import PostLink from "../post-link/post-link";
import { ArchiveYearPageQuery } from "../../../types/graphqlTypes";

export type ArchiveYearPageContext = {
  year: string;
  posts: Post[];
  startDate: string;
  endDate: string;
};
export type ArchiveYearPageProps = PageProps<
  ArchiveYearPageQuery,
  ArchiveYearPageContext
>;

export const ArchiveYearPage: React.FC<ArchiveYearPageProps> = ({
  pageContext: { posts, year },
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout title={year}>
    <div>
      {edges.map(({ node: { fileAbsolutePath, frontmatter } }) => (
        <PostLink
          {...{
            title: frontmatter?.title ?? "UNTITLED",
            path: genPostDateAndPath(fileAbsolutePath).path,
          }}
        />
      ))}
    </div>
  </Layout>
);

export default ArchiveYearPage;

export const pageQuery = graphql`
  query ArchiveYearPage($startDate: Date, $endDate: Date) {
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
        }
      }
    }
  }
`;
