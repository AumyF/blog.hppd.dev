import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Post } from "../../../types/graphqlTypes";
import { TagList } from "./tag-list";
import { PostDate } from "./post-date";
import { PickAndPartialPick } from "../../libs/type-utils";
import { spawnSync } from "child_process";
import { endianness } from "os";

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
            font-weight: 600;
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
      <div
        css={css`
          font-size: 0.9em;
          color: var(--foreground);
          /*
          position: relative;
          &::after {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
              to bottom,
              ${cube(0, 1)
                .map(([i, p]) => `hsla(0, 0%, 10%, ${p * 95}%) ${i * 100}%`)
                .join(", ")}
            );
            content: "";
            z-index: 100000;
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
          }*/
        `}
      >
        {excerpt}
      </div>
    </article>
  );
};

const cube = (
  start: number,
  end: number,
  step: number = (end - start) / 10
) => {
  const points: [number, number][] = [];
  for (let i = start; i <= end; i += step) points.push([i, sine(i)]);
  return points;
};

const cubic = (x: number): number =>
  x < 0.5 ? 4 * x ** 3 : 1 - (-2 * x + 2) ** 3 / 2;
const sine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;
