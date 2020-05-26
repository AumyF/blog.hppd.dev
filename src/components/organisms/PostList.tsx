import React, { useLayoutEffect } from "react";
import { css } from "@emotion/core";
import { Post } from "../../libs/post";
import { PostLink } from "../post-link/post-link";
import { mq } from "../../styles/mediaQueries";
import _ from "lodash";

export type PostListProps = {
  posts: Array<Pick<Post, "title" | "path"> & Partial<Pick<Post, "tags">>>;
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
    {posts.map(({ title, path, tags }, i) => (
      <li key={title ?? path}>
        <PostLink path={path} title={title} tags={tags} />
      </li>
    ))}
  </ul>
);

export default PostList;
