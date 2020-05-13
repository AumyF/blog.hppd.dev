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
      list-style: none;
      padding: 0;
      display: grid;
      justify-content: space-between;
      row-gap: 1.5rem;
      column-gap: 1.5rem;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    `}
  >
    {posts.map(({ title, path }, i) => (
      <li key={title ?? path}>
        <PostLink path={path} title={title} />
      </li>
    ))}
  </ul>
);

export default PostList;
