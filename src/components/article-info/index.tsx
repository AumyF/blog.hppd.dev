import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { ChakraIcon } from "../atoms/chakra-icon";
import { Hyper } from "../atoms/Hyper";
import { useLatestCommit } from "../git-info/useLatestCommit";

const ArticleInfoView: React.FC<{
  errMessage: string;
  isError: boolean;
  isLoading: boolean;
  lastUpdate: string;
  url: string;
}> = ({ isLoading, lastUpdate, url }) => (
  <Flex gridGap="2" wrap="wrap" justifyContent="center">
    <Box>
      <ChakraIcon mr="1" icon={faSync} />
      <Skeleton d="inline" w="20ch" isLoaded={!isLoading}>
        <time>{lastUpdate}</time>
      </Skeleton>
    </Box>
    <Box>
      <ChakraIcon mr="1" icon={faGithub} />
      <Hyper to={url}>GitHubで見る</Hyper>
    </Box>
  </Flex>
);

export const ArticleInfo: React.FC<{ path: string }> = props => {
  const path = `${props.path}/index`;
  const { data, errMessage, isError, isLoading } = useLatestCommit(path);
  const { lastUpdate } = data;

  const url = `https://github.com/AumyF/blog/blob/master/posts/${path}.mdx`;

  return (
    <ArticleInfoView {...{ isError, isLoading, url, errMessage, lastUpdate }} />
  );
};
