import React from "react";
import { css } from "@emotion/core";
import { PostLink } from "./post-link";
import { Mdx, MdxFields, MdxFrontmatter } from "../../../types/graphqlTypes";

export type PostListProps = {
  nodes: {
    frontmatter?: Pick<MdxFrontmatter, "title" | "tags"> | null | undefined;
    fields?: Pick<MdxFields, "path" | "yyyymmdd"> | null | undefined;
    excerpt: string;
  }[];
};

const isntNull = <T extends {}>(v: T | null | undefined): v is T => v != null;

export const PostList: React.FC<PostListProps> = ({ nodes }) => (
  <div
    className="p-0 grid justify-between"
    css={css`
      row-gap: 1.5rem;
      column-gap: 1.5rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `}
  >
    {nodes.map(
      ({ frontmatter, fields, excerpt }) =>
        frontmatter?.tags &&
        fields?.path && (
          <PostLink
            path={fields.path}
            yyyymmdd={fields.yyyymmdd}
            title={frontmatter.title}
            tags={frontmatter.tags.filter(isntNull)}
            key={fields.path}
            excerpt={excerpt}
          />
        )
    )}
  </div>
);
