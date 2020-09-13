import React from "react";
import { Layout } from "../components/layout";
import { PostList, PostListProps } from "../components/post-link/post-list";

export type PostListPageProps = {
  title: string;
  path: string;
} & PostListProps;

export const PostListPage: React.FCX<PostListPageProps> = ({
  title,
  path,
  nodes,
}) => (
  <Layout {...{ title, path }}>
    <PostList {...{ nodes }} />
  </Layout>
);
