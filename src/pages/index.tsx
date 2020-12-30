import { Heading } from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import React from "react";

import { IndexQuery } from "../../types/graphqlTypes";
import { HeadTitle } from "../components/atoms/head-title";
import { Layout } from "../components/layout";
import { BodyContainer } from "../components/layout/container";
import { MainContent } from "../components/layout/main-content";
import { TitleContainer, TitleName } from "../components/layout/title";
import { PostList } from "../components/post-link/post-list";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout {...{ path: "/" }}>
      <HeadTitle>Index</HeadTitle>

      <TitleContainer>
        <TitleName>Index</TitleName>
      </TitleContainer>

      <BodyContainer>
        <MainContent>
          <Heading
            textAlign="center"
            mb="2rem"
            pb=".5rem"
            borderBottom="1px"
            borderColor="gray.500"
          >
            Recent posts
          </Heading>
          <PostList {...{ nodes }} />
        </MainContent>
      </BodyContainer>
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
