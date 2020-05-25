import React from "react";
import { css } from "@emotion/core";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../layout/Layout";
import { Post, genPostDateAndPath } from "../../libs/post";
import PostLink from "../post-link/post-link";
import { ArchiveMonthPageQuery } from "../../../types/graphqlTypes";

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
  pageContext: { month, endDate, startDate },
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout title={month}>
    {console.log({ endDate, startDate })}
    <div>
      {edges.map(({ node: { fileAbsolutePath, frontmatter, id } }) => (
        <PostLink
          {...{
            title: frontmatter?.title ?? "UNTITLED",
            path: genPostDateAndPath(fileAbsolutePath).path,
            key: id,
          }}
        />
      ))}
    </div>
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
