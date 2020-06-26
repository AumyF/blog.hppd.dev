import React from "react";
import { css, InterpolationWithTheme, Interpolation } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleValues } from "../../styles/styleValues";
import { Post } from "../../../types/graphqlTypes";

export type TagListProps = Pick<Post, "tags"> & {
  childrenStyle?: Interpolation<undefined>;
};

export const TagList: React.FCX<TagListProps> = ({
  tags,
  childrenStyle,
  className,
}) => (
  <div className={className}>
    <ul
      css={css`
        display: inline-flex;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;
      `}
    >
      <span>
        <FontAwesomeIcon icon={faTags} />
      </span>
      {tags?.map(tag => (
        <li
          key={tag}
          css={[
            css`
              font-size: 1em;
              margin-left: 0.3rem;
            `,
            childrenStyle,
          ]}
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>
);
