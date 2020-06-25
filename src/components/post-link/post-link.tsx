import React, { MouseEventHandler, useState } from "react";
import { css, Interpolation } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Post } from "../../../types/graphqlTypes";
import {} from "ts-essentials";
import { styleValues } from "../../styles/styleValues";
import { useSpring, animated } from "react-spring";
import { TagList } from "./tag-list";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostDate } from "./post-date";
import { PickAndPartialPick } from "../../libs/type-utils";

export type PostLinkProps = PickAndPartialPick<
  Post,
  "path" | "title",
  "tags" | "excerpt"
>;

export const PostLink: React.FCX<PostLinkProps> = ({
  path,
  title,
  className,
  tags,
  excerpt,
}) => {
  return (
    <Link
      {...{ className }}
      css={css`
        display: block;
        color: var(--foreground);
        background-color: var(--postlink-background);
        text-decoration: none;
        padding: 1rem;
        width: 100%;
        height: 100%;
        transition: 200ms border-top ease;
        border-top: 00px solid var(--secondary);
        &:hover {
          border-top: 10px solid var(--secondary);
        }
      `}
      to={`/${path}`}
    >
      {path && <PostDate {...{ path }} />}
      {tags && <TagList tags={tags} />}
      <div>
        <span
          css={css`
            font-size: 1.25em;
            text-decoration: none;
          `}
        >
          {title}
        </span>
        <span
          css={css`
            font-size: 0.9em;
            color: var(--foreground);
            opacity: 0.7;
          `}
        >
          {excerpt}
        </span>
      </div>
    </Link>
  );
};
