import React from "react";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import { PostListPage } from "../templates/post-list-page";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allPost: { edges },
  },
}) => {
  return <PostListPage path="" {...{ title: "Index", edges }} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    allPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          title
          tags
          date
          path
          excerpt
        }
      }
    }
  }
`;
