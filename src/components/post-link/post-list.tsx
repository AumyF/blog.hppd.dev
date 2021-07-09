import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

import { PostLink, PostLinkProps } from "./post-link";

export type PostListProps = {
  readonly posts: readonly PostLinkProps["post"][];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <VStack divider={<StackDivider borderColor="gray.600" />} spacing="1.5rem">
    {posts.map(post => (
      <PostLink key={post.path} post={post} />
    ))}
  </VStack>
);
