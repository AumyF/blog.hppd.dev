import React from "react";
import { css } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleValues } from "../../styles/styleValues";
import { Post } from "../../../types/graphqlTypes";

export type TagListProps = Pick<Post, "tags">;

export const TagList: React.FC<TagListProps> = ({ tags }) => (
  <div css={css``}>
    <span>
      <FontAwesomeIcon icon={faTags} />
    </span>
    <ul
      css={css`
        display: inline-flex;
        padding: 0;
        list-style: none;
      `}
    >
      {tags?.map(tag => (
        <li
          key={tag}
          css={css`
            font-size: 1em;
            margin-left: 0.3rem;
            color: var(--secondary);
          `}
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>
);
