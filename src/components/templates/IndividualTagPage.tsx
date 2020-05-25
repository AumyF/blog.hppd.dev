import React from "react";
import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import { Layout } from "../layout/Layout";
import { Post } from "../../libs/post";
import PostLink from "../post-link";
import PostList from "../organisms/PostList";

export type IndividualTagPageContext = { tag: string; posts: Post[] };
export type IndividualTagPageProps = PageProps<{}, IndividualTagPageContext>;

export const IndividualTagPage: React.FC<IndividualTagPageProps> = ({
  pageContext: { posts, tag },
}) => (
  <Layout title={`tag: ${tag}`}>
    <div>
      <PostList posts={posts} />
    </div>
  </Layout>
);

export default IndividualTagPage;
