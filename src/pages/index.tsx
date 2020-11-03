import React from "react";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-link/post-list";
import tw from "twin.macro";

const Heading = tw.h1`text-4xl font-bold text-center mb-8 leading-tight`;

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout {...{ title: "Index", path: "/" }}>
      <Heading>Recent posts</Heading>
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
