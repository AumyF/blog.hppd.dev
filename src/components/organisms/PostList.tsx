import React, { useLayoutEffect } from "react";
import { css } from "@emotion/core";
import { Post } from "../../libs/post";
import PostLink from "../molecules/PostLink";
import { mq } from "../../styles/mediaQueries";

export type PostListProps = {
  posts: Pick<Post, "title" | "path">[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul
    css={css`
      padding: 0;
      display: grid;
      grid-row-gap: 10px;
      grid-template-columns: 1fr;
      ${mq.medium} {
        grid-template-columns: repeat(2, 49%);
      }
      ${mq.large} {
        grid-template-columns: repeat(3, 30%);
      }
      justify-content: space-between;
    `}
  >
    {posts.map(({ title, path }, i) => (
      <PostLink
        css={css`
          grid-row: i;
        `}
        path={path}
        title={title}
      />
    ))}
  </ul>
);

export default PostList;
