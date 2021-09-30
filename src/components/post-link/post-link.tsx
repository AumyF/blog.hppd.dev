import {
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

import { Post } from "../../utils/post";
import { Hyper } from "../atoms/Hyper";
import { TagList } from "../atoms/tag-list";
import { useWeakTextColor } from "../styles/colors";

export type PostLinkProps = {
  readonly post: Pick<Post, "excerpt" | "path" | "tags" | "title" | "yyyymmdd">;
};

export const PostLink: React.VFC<PostLinkProps> = ({
  post: { excerpt, path, tags, title, yyyymmdd },
}) => {
  const excerptColor = useWeakTextColor();

  return (
    <Flex direction="column" gridGap="2" as="article" px=".5rem" w="full">
      <Heading lineHeight="1" size="lg">
        <Hyper
          to={`/${path}`}
          css={css`
            font-feature-settings: "palt";
          `}
        >
          {title}
        </Hyper>
      </Heading>
      <Wrap spacing=".5rem" direction="row" wrap="wrap">
        {yyyymmdd && (
          <WrapItem>
            <Text>{yyyymmdd}</Text>
          </WrapItem>
        )}
        <WrapItem>
          <TagList tags={tags} />
        </WrapItem>
      </Wrap>
      <Text color={excerptColor}>{excerpt}</Text>
    </Flex>
  );
};
