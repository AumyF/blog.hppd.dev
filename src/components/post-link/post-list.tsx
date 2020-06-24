import React, { useLayoutEffect } from "react";
import { css } from "@emotion/core";
import { PostLink } from "./post-link";
import { mq } from "../../styles/mediaQueries";
import _ from "lodash";
import { Post } from "../../../types/graphqlTypes";

export type PostListProps = {
  edges: {
    node: Pick<Post, "title" | "path"> & Partial<Pick<Post, "tags">>;
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
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    `}
  >
    {edges.map(({ node: { title, path, tags } }) => (
      <li key={title ?? path}>
        <PostLink {...{ path, title, tags }} />
      </li>
    ))}
  </ul>
);
