import React from "react";
import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import { Layout } from "./Layout";
import { Post } from "../../libs/post";
import PostLink from "../molecules/PostLink";

export type ArchiveMonthPageContenxt = {
  month: string;
  posts: Post[];
};
export type ArchiveMonthPageProps = PageProps<{}, ArchiveMonthPageContenxt>;

export const ArchiveMonthPage: React.FC<ArchiveMonthPageProps> = ({
  pageContext: { month, posts },
}) => (
  <Layout title={month}>
    <div>
      {posts.map(p => (
        <PostLink {...p} />
      ))}
    </div>
  </Layout>
);

export default ArchiveMonthPage;
