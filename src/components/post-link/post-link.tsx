import { Box, Heading, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <Box as="article" px=".5rem">
      <Wrap spacing=".5rem" direction="row" wrap="wrap">
        {yyyymmdd && (
          <WrapItem>
            <HStack spacing=".5rem" alignItems="baseline">
              <FontAwesomeIcon icon={faCalendarDay} />
              <Text ml=".5rem">{yyyymmdd}</Text>
            </HStack>
          </WrapItem>
        )}
        <WrapItem>
          <TagList tags={tags} />
        </WrapItem>
      </Wrap>
      <Heading my=".5rem">
        <Hyper
          to={`/${path}`}
          css={css`
            font-feature-settings: "palt";
          `}
        >
          {title}
        </Hyper>
      </Heading>
      <Text color={excerptColor}>{excerpt}</Text>
    </Box>
  );
};
