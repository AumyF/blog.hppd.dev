import React from "react";
import { css } from "@emotion/core";
import { PostLink } from "./post-link";
import { Post } from "../../../types/graphqlTypes";

export type PostListProps = {
  edges: {
    node: Pick<Post, "title" | "path" | "excerpt"> &
      Partial<Pick<Post, "tags">>;
  }[];
};

export const PostList: React.FC<PostListProps> = ({ edges }) => (
  <ul
    css={css`
      list-style: none;
      padding: 0;
      display: grid;
      justify-content: space-between;
      row-gap: 1.5rem;
      column-gap: 1.5rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `}
  >
    {edges.map(({ node: { title, path, tags, excerpt } }) => (
      <li key={title ?? path}>
        <PostLink.Styled {...{ path, title, tags, excerpt }} />
      </li>
    ))}
  </ul>
);
