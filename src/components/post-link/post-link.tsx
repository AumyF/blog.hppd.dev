import React, { MouseEventHandler, useState } from "react";
import { css, Interpolation } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Mdx } from "../../../types/graphqlTypes";
import { Post } from "../../libs/post";
import {} from "ts-essentials";
import { styleValues } from "../../styles/styleValues";
import { useSpring, animated } from "react-spring";
import { TagList } from "./tag-list";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostDate } from "./post-date";

export type PostLinkProps = Readonly<{
  path: string;
  title: string;
  tags?: readonly string[];
  css?: Interpolation;
}>;

export const PostLink: React.FCX<PostLinkProps> = ({
  path,
  title,
  className,
  tags,
}) => {
  return (
    <Link
      css={css`
        display: block;
        color: var(--foreground);
        background-color: var(--postlink-background);
        text-decoration: none;
        padding: 1rem;
        width: 100%;
        height: 100%;
        transition: 200ms box-shadow ease;
        box-shadow: 0px 0px 0px var(--foreground);
        &:hover {
          box-shadow: 10px 10px 0px var(--foreground);
        }
      `}
      to={`/${path}`}
    >
      {path && <PostDate {...{ path }} />}
      {tags && <TagList tags={tags} />}
      <div>
        <span
          css={css`
            font-size: 1.5rem;
            text-decoration: none;
          `}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};
