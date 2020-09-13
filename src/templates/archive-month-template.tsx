import React from "react";
import { PageProps, graphql } from "gatsby";
import { ArchiveMonthTemplateQuery } from "../../types/graphqlTypes";
import { PostListPage } from "./post-list-page";

export type ArchiveMonthPageContenxt = {
  yyyymm: string;
};
export type ArchiveMonthPageProps = PageProps<
  ArchiveMonthTemplateQuery,
  ArchiveMonthPageContenxt
>;

export const ArchiveMonthPage: React.FC<ArchiveMonthPageProps> = ({
  pageContext: { yyyymm },
  data: {
    allMdx: { nodes },
  },
}) => (
  <PostListPage
    {...{ nodes }}
    title={yyyymm}
    path={yyyymm.split("-").join("/")}
  />
);

export const pageQuery = graphql`
  query ArchiveMonthTemplate($yyyymm: Date) {
    allMdx(filter: { fields: { yyyymm: { eq: $yyyymm } } }) {
      nodes {
        id
        frontmatter {
          title
          date
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
