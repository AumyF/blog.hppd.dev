import React from "react";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import { PostListPage } from "../templates/post-list-page";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return <PostListPage path="" {...{ title: "Index", nodes }} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    allMdx(sort: { order: DESC, fields: fields___yyyymmdd }) {
      nodes {
        id
        excerpt(truncate: true)
        frontmatter {
          title
          tags
        }
        fields {
          path
          yyyymmdd
        }
      }
    }
  }
`;
