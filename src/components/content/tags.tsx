import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export type PostTagsProps = { tags: readonly string[] };

export const PostTags: React.FC<PostTagsProps> = ({ tags }) => (
  <ul
    css={css`
      margin: 0;
      padding: 0;
    `}
  >
    {tags.map(tag => (
      <li
        css={css`
          list-style: none;
          display: inline;
        `}
        key={tag}
      >
        <Link
          css={css`
            text-decoration: none;
          `}
          to={`/tags/${tag}/`}
        >
          <FontAwesomeIcon
            icon={faTag}
            css={css`
              margin: 0 4px;
            `}
          />
          {tag}
        </Link>
      </li>
    ))}
  </ul>
);
