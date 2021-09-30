import { graphql, PageProps } from "gatsby";
import React from "react";

import { Post } from "../utils/post";
import { PostListPage } from "./post-list-page";

export type ArchiveMonthPageContenxt = {
  yyyymm: string;
};
export type ArchiveMonthPageProps = PageProps<
  GatsbyTypes.ArchiveMonthTemplateQuery,
  ArchiveMonthPageContenxt
>;

export const ArchiveMonthPage: React.FC<ArchiveMonthPageProps> = ({
  data: {
    allMdx: { nodes },
  },
  pageContext: { yyyymm },
}) => (
  <PostListPage
    posts={nodes.map(Post)}
    title={yyyymm}
    path={yyyymm.split("-").join("/")}
  />
);

export const pageQuery = graphql`
  query ArchiveMonthTemplate($yyyymm: Date) {
    allMdx(
      filter: { fields: { yyyymm: { eq: $yyyymm } } }
      sort: { order: DESC, fields: fields___yyyymmdd }
    ) {
      nodes {
        ...Post
      }
    }
  }
`;

export default ArchiveMonthPage;
