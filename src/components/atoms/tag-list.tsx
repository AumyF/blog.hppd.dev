import { HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hyper } from "./Hyper";

export type TagListProps = {
  readonly center?: boolean;
  readonly tags: readonly string[];
};

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const color = useColorModeValue("purple.500", "purple.300");
  return (
    <Hyper color={color} to={`/tags/${tag}`}>
      {tag}
    </Hyper>
  );
};

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
