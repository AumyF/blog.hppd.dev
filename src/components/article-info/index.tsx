import { Box, chakra, Skeleton } from "@chakra-ui/react";
import React from "react";

import { Hyper } from "../atoms/Hyper";
import { useLatestCommit } from "../git-info/useLatestCommit";

export const SeeInGitHub: React.FC<{
  url: string;
}> = ({ url }) => (
  <Box>
    <chakra.span userSelect="none" cursor="default" marginInlineEnd="1">
      source_url:
    </chakra.span>
    <Hyper to={url}>GitHubで見る</Hyper>
  </Box>
);

const UpdatedAtView: React.FC<{
  isLoading: boolean;
  lastUpdate: string;
}> = ({ isLoading, lastUpdate }) => (
  <Box>
    <chakra.span userSelect="none" cursor="default" marginInlineEnd="1">
      updated_at:
    </chakra.span>

    <Skeleton d="inline" w="20ch" isLoaded={!isLoading}>
      <time>{lastUpdate}</time>
    </Skeleton>
  </Box>
);

export const UpdatedAt: React.FC<{ path: string }> = props => {
  const path = `${props.path}/index`;
  const { data, isLoading } = useLatestCommit(path);
  const { lastUpdate } = data;

  return <UpdatedAtView {...{ isLoading, lastUpdate }} />;
};

export const ArticleInfo: React.FC<{ path: string }> = ({ path }) => (
  <>
    <UpdatedAt path={path} />
    <SeeInGitHub
      url={`https://github.com/AumyF/blog/blob/master/posts/${path}.mdx`}
    />
  </>
);
