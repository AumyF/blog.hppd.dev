import React from "react";
import { css } from "@emotion/core";
import { PageProps, graphql } from "gatsby";
import { Layout } from "./Layout";
import { Post, genPostDateAndPath } from "../../libs/post";
import PostLink from "../molecules/PostLink";
import {
  ArchiveYearPageQuery,
  ArchiveYearPageQueryVariables,
} from "../../../types/graphqlTypes";

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
      {edges.map(({ node: { fileAbsolutePath, frontmatter, excerpt } }) => (
        <PostLink
          {...{
            excerpt,
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
