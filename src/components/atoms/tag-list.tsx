import { HStack } from "@chakra-ui/react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";

export type TagListProps = { tags: string[] };

const Tag: React.FCX<{ tag: string }> = ({ className, tag }) => (
  <Link className={clsx(" ", className)} to={`/tags/${tag}`}>
    {tag}
  </Link>
);

export const TagList: React.FCX<TagListProps> = ({ className, tags }) => (
  <HStack
    spacing=".25rem"
    wrap="wrap"
    className={clsx(className, `w-max-content flex flex-wrap gap-1`)}
  >
    <span>
      <FontAwesomeIcon icon={faTags} />
    </span>
    {tags?.map(tag => (
      <Tag tag={tag} key={tag} />
    ))}
  </HStack>
);
