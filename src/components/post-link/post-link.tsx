import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Post } from "../../../types/graphqlTypes";
import { TagList } from "./tag-list";
import { PostDate } from "./post-date";
import { PickAndPartialPick } from "../../utils/type-utils";
import styled from "@emotion/styled";
import { withTheme } from "../../styles/theme";
import tw from "twin.macro";
import { invisibleAnchor } from "../../styles/styles";

export type PostLinkProps = PickAndPartialPick<
  Post,
  "path" | "title",
  "tags" | "excerpt"
>;

export module PostLink {
  export const Base: React.FCX<PostLinkProps> = ({
    path,
    title,
    className,
    tags,
    excerpt,
  }) => {
    return (
      <article className={className + " p-4"}>
        <Link
          css={invisibleAnchor}
          className="text-2xl leading-normal font-bold"
          to={`/${path}`}
        >
          {title}
        </Link>
        {path && <PostDate {...{ path }} />}
        {tags && <TagList {...{ tags }} />}
        <div>{excerpt}</div>
      </article>
    );
  };

  export const Styled = withTheme(Base, {
    dark: css`
      > div {
        ${tw`text-gray-500`};
      }
    `,

    light: css`
      > div {
        ${tw`text-gray-700`}
      }
    `,
  });
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
