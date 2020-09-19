import React from "react";
import { PageProps, graphql } from "gatsby";
import { ArchiveYearTemplateQuery } from "../../types/graphqlTypes";
import { PostListPage } from "./post-list-page";

export type ArchiveYearPageContext = {
  yyyy: string;
};
export type ArchiveYearPageProps = PageProps<
  ArchiveYearTemplateQuery,
  ArchiveYearPageContext
>;

export const ArchiveYearPage: React.FC<ArchiveYearPageProps> = ({
  pageContext: { yyyy },
  data: {
    allMdx: { nodes },
  },
}) => <PostListPage {...{ nodes }} title={yyyy} path={yyyy} />;

export default ArchiveYearPage;

export const pageQuery = graphql`
  query ArchiveYearTemplate($yyyy: Date) {
    allMdx(filter: { fields: { yyyy: { eq: $yyyy } } }) {
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
