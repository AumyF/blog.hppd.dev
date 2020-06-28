import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Post } from "../../../types/graphqlTypes";
import { TagList } from "./tag-list";
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
    <article
      {...{ className }}
      css={css`
        display: block;
        border-radius: 1rem;
        color: var(--foreground);
        background-color: var(--postlink-background);
        text-decoration: none;
        padding: 1rem;
        width: 100%;
        height: 100%;
      `}
    >
      <Link
        to={`/${path}`}
        css={css`
          text-decoration: none;
          &:hover {
            text-decoration: underline var(--primary);
          }
        `}
      >
        <h2
          css={css`
            font-size: 1.25em;
            margin: 0;
            line-height: 1.25;
          `}
        >
          {title}
        </h2>
      </Link>
      {path && <PostDate {...{ path }} />}
      {tags && (
        <TagList tags={tags} css={css``} childrenStyle={css``}>
          {tag => (
            <Link to={`/tags/${tag}`}>
              <li
                key={tag}
                css={css`
                  font-size: 1em;
                  margin-left: 0.3rem;
                  background-color: var(--primary);
                  color: var(--background);
                  padding: 0 4px;
                  border-radius: 5px;
                  margin-bottom: 4px;
                `}
              >
                {tag}
              </li>
            </Link>
          )}
        </TagList>
      )}
      <div>
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
    </article>
  );
};
