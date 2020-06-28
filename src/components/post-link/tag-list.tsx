import React, { Component, FCX, ReactNode } from "react";
import { css, InterpolationWithTheme, Interpolation } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleValues } from "../../styles/styleValues";
import { Post } from "../../../types/graphqlTypes";
import { ElementOf } from "ts-essentials";

export type TagListProps = Pick<Post, "tags"> & {
  childrenStyle?: Interpolation<undefined>;
  children: (tag: ElementOf<Post["tags"]>) => ReactNode;
};

export const TagList: React.FCX<TagListProps> = ({
  tags,
  childrenStyle,
  className,
  children,
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
      {tags?.map(children)}
    </ul>
  </div>
);
