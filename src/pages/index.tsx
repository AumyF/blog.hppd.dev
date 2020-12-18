import { Heading } from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import React from "react";

import { IndexQuery } from "../../types/graphqlTypes";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-link/post-list";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout {...{ title: "Index", path: "/" }}>
      <Heading
        textAlign="center"
        mb="2rem"
        borderBottom="1px"
        borderColor="gray.500"
      >
        Recent posts
      </Heading>
      <PostList {...{ nodes }} />
    </Layout>
  );
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
