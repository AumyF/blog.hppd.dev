import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Post } from "../../../types/graphqlTypes";
import { TagList } from "./tag-list";
import { PostDate } from "./post-date";
import { PickAndPartialPick } from "../../libs/type-utils";
import styled from "@emotion/styled";

export type PostLinkProps = PickAndPartialPick<
  Post,
  "path" | "title",
  "tags" | "excerpt"
>;

export module PostLink {
  export const Plain: React.FCX<PostLinkProps> = ({
    path,
    title,
    className,
    tags,
    excerpt,
  }) => {
    return (
      <article {...{ className }}>
        <Link to={`/${path}`}>
          <h2>{title}</h2>
        </Link>
        {path && <PostDate {...{ path }} />}
        {tags && <TagList.Styled {...{ tags }} />}
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

  export const Styled = styled(Plain)`
    display: block;
    border-radius: 1rem;
    color: var(--foreground);
    background-color: var(--postlink-background);
    text-decoration: none;
    padding: 1rem;
    width: 100%;
    height: 100%;
    > a {
      text-decoration: none;
      &:hover {
        text-decoration: underline var(--primary);
      }
      h2 {
        font-weight: 600;
        font-size: 1.5em;
        margin: 0;
        line-height: 1.25;
      }
    }
  `;
}

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
