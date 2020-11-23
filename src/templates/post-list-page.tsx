import React from "react";

import { Layout } from "../components/layout";
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
  <Layout {...{ title, path }}>
    <PostList {...{ nodes }} />
  </Layout>
);
