import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

import { PostLink } from "./post-link";

export type PostListProps = {
  nodes: readonly {
    excerpt: string;
    fields?:
      | Pick<GatsbyTypes.MdxFields, "path" | "yyyymmdd">
      | null
      | undefined;
    frontmatter?:
      | Pick<GatsbyTypes.MdxFrontmatter, "title" | "tags">
      | null
      | undefined;
  }[];
};

const isntNull = <T extends {}>(v: T | null | undefined): v is T => v != null;

export const PostList: React.FC<PostListProps> = ({ nodes }) => (
  <VStack divider={<StackDivider borderColor="gray.600" />} spacing="1.5rem">
    {nodes.map(
      ({ excerpt, fields, frontmatter }) =>
        frontmatter?.tags &&
        fields?.path &&
        fields.yyyymmdd && (
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
  </VStack>
);
