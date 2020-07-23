import React from "react";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import { useSite } from "../hooks/use-site";
import { assertsNonNull } from "../libs/asserts-non-null";
import { PostListPage } from "../templates/post-list-page";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allPost: { edges },
  },
}) => {
  const { title } = assertsNonNull(useSite().siteMetadata);
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
