import { HStack, Text } from "@chakra-ui/react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hyper } from "./Hyper";

export type TagListProps = { center?: boolean; tags: string[] };

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <Hyper color="purple.300" to={`/tags/${tag}`}>
    {tag}
  </Hyper>
);

export const TagList: React.FC<TagListProps> = ({ center, tags }) => (
  <HStack
    spacing=".25rem"
    wrap="wrap"
    justifyContent={center ? "center" : "unset"}
  >
    <Text>
      <FontAwesomeIcon icon={faTags} />
    </Text>
    {tags?.map(tag => (
      <Tag tag={tag} key={tag} />
    ))}
  </HStack>
);
