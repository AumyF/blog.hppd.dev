import { graphql, PageProps } from "gatsby";
import React from "react";

import { Post } from "../utils/post";
import { PostListPage } from "./post-list-page";

export type ArchiveYearPageContext = {
  yyyy: string;
};
export type ArchiveYearPageProps = PageProps<
  GatsbyTypes.ArchiveYearTemplateQuery,
  ArchiveYearPageContext
>;

export const ArchiveYearPage: React.FC<ArchiveYearPageProps> = ({
  data: {
    allMdx: { nodes },
  },
  pageContext: { yyyy },
}) => <PostListPage posts={nodes.map(Post)} title={yyyy} path={yyyy} />;

export default ArchiveYearPage;

export const pageQuery = graphql`
  query ArchiveYearTemplate($yyyy: Date) {
    allMdx(
      filter: { fields: { yyyy: { eq: $yyyy } } }
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
