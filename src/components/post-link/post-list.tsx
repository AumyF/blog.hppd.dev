import React from "react";

import { MdxFields, MdxFrontmatter } from "../../../types/graphqlTypes";
import { PostLink } from "./post-link";

export type PostListProps = {
  nodes: {
    excerpt: string;
    fields?: Pick<MdxFields, "path" | "yyyymmdd"> | null | undefined;
    frontmatter?: Pick<MdxFrontmatter, "title" | "tags"> | null | undefined;
  }[];
};

const isntNull = <T extends {}>(v: T | null | undefined): v is T => v != null;

export const PostList: React.FC<PostListProps> = ({ nodes }) => (
  <div className="p-0">
    {nodes.map(
      ({ excerpt, fields, frontmatter }) =>
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
