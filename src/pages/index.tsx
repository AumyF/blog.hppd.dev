import { Heading } from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import React from "react";

import { HeadTitle } from "../components/atoms/head-title";
import { Layout } from "../components/layout";
import { BodyContainer } from "../components/layout/container";
import { MainContent } from "../components/layout/main-content";
import { TitleContainer, TitleName } from "../components/layout/title";
import { PostList } from "../components/post-link/post-list";
import { Post } from "../utils/post";

export const IndexPage: React.FC<PageProps<GatsbyTypes.IndexQuery>> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const posts = nodes.map(Post);
  return (
    <Layout {...{ path: "/" }}>
      <HeadTitle>Index</HeadTitle>

      <TitleContainer>
        <TitleName>Index</TitleName>
      </TitleContainer>

      <BodyContainer>
        <MainContent>
          <PostList {...{ posts }} />
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
        ...Post
      }
    }
  }
`;
