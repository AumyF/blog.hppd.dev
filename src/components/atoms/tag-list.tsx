import { HStack } from "@chakra-ui/react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hyper } from "./Hyper";

export type TagListProps = { tags: string[] };

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <Hyper color="purple.300" to={`/tags/${tag}`}>
    {tag}
  </Hyper>
);

export const TagList: React.FC<TagListProps> = ({ tags }) => (
  <HStack spacing=".25rem" wrap="wrap">
    <span>
      <FontAwesomeIcon icon={faTags} />
    </span>
    {tags?.map(tag => (
      <Tag tag={tag} key={tag} />
    ))}
  </HStack>
);
