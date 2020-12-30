import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import clsx from "clsx";
import React from "react";

import { Hyper } from "../atoms/Hyper";
import { TagList } from "../atoms/tag-list";
import { PostDate } from "./post-date";

export type PostLinkProps = {
  excerpt: string;
  path: string;
  tags: string[];
  title: string;
  yyyymmdd: string;
};
// PickAndPartialPick<Post, "path" | "title", "tags"> &
//   Pick<MdxFields, "yyyymmdd">;

export const PostLink: React.VFC<PostLinkProps> = ({
  excerpt,
  path,
  tags,
  title,
  yyyymmdd,
}) => (
  <Box as="article" px=".5rem">
    <Wrap spacing=".5rem" direction="row" wrap="wrap">
      {yyyymmdd && (
        <WrapItem>
          <PostDate path={yyyymmdd} />
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
    <Text color="gray.400">{excerpt}</Text>
  </Box>
);
