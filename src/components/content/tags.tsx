import React, { FCX } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import tw from "twin.macro";

export type PostTagsProps = { tags: readonly string[] };

const PostTagsBase: FCX<PostTagsProps> = ({ tags, className }) => (
  <ul {...{ className }}>
    {tags.map(tag => (
      <li key={tag}>
        <Link to={`/tags/${tag}`}>
          <FontAwesomeIcon icon={faTag} />
          {tag}
        </Link>
      </li>
    ))}
  </ul>
);

export const PostTags = styled(PostTagsBase)`
  ${tw``};
  > li {
    ${tw`inline`}
    > a > svg {
      ${tw`mx-1`}
    }
  }
`;
