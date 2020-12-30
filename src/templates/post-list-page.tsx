import React from "react";

import { HeadTitle } from "../components/atoms/head-title";
import { Layout } from "../components/layout";
import { BodyContainer } from "../components/layout/container";
import { MainContent } from "../components/layout/main-content";
import { TitleContainer, TitleName } from "../components/layout/title";
import { PostList, PostListProps } from "../components/post-link/post-list";

export type PostListPageProps = {
  path: string;
  title: string;
} & PostListProps;

export const PostListPage: React.FCX<PostListPageProps> = ({
  nodes,
  path,
  title,
}) => (
  <Layout {...{ path }}>
    <HeadTitle>{title}</HeadTitle>

    <TitleContainer>
      <TitleName>{title}</TitleName>
    </TitleContainer>

    <BodyContainer>
      <MainContent>
        <PostList {...{ nodes }} />
      </MainContent>
    </BodyContainer>
  </Layout>
);
