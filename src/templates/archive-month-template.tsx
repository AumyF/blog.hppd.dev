import { graphql, PageProps } from "gatsby";
import React from "react";

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
    {...{ nodes }}
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
        id
        frontmatter {
          title
          tags
        }
        fields {
          path
          yyyymmdd
        }
        excerpt(truncate: true)
      }
    }
  }
`;

export default ArchiveMonthPage;
