import React from "react";
import { PageProps, graphql } from "gatsby";
import { IndividualTagPageQuery } from "../../types/graphqlTypes";
import { PostListPage } from "./post-list-page";

export type IndividualTagPageContext = {
  tag: string;
};
export type IndividualTagPageProps = PageProps<
  IndividualTagPageQuery,
  IndividualTagPageContext
>;

export const IndividualTagPage: React.FC<IndividualTagPageProps> = ({
  pageContext: { tag },
  data: {
    allPost: { edges },
  },
}) => <PostListPage title={`tag: ${tag}`} path={`tags/${tag}`} edges={edges} />;

export default IndividualTagPage;

export const pageQuery = graphql`
  query IndividualTagPage($tag: String) {
    allPost(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          title
          path
          tags
          excerpt
        }
      }
    }
  }
`;
