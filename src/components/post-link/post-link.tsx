import { css } from '@emotion/react';
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";

import { TagList } from "../atoms/tag-list";
import { invisibleAnchor } from "../styles/styles";
import { PostDate } from "./post-date";

export type PostLinkProps = {
  excerpt: string;
  path: string;
  tags: string[];
  title: string;
  yyyymmdd: string;
};
// PickAndPartialPick<Post, "path" | "title", "tags"> &
//   Pick<MdxFields, "yyyymmdd">;

export const PostLink: React.FCX<PostLinkProps> = ({
  className,
  excerpt,
  path,
  tags,
  title,
  yyyymmdd,
}) => (
  <article
    className={clsx(className, "p-4 bg-transparent border-t border-border")}
  >
    <div
      className="flex flex-wrap items-baseline gap-x-4 text-weak"
      // css={css`
      //   a {
      //     ${tw`text-weak`}
      //   }
      // `}
    >
      {yyyymmdd && <PostDate path={yyyymmdd} />}
      <TagList tags={tags} />
    </div>
    <div className="my-2">
      <Link
        to={`/${path}`}
        className="text-3xl font-bold leading-tight"
        css={[
          invisibleAnchor,
          css`
            font-feature-settings: "palt";
          `,
        ]}
      >
        {title}
      </Link>
    </div>
    <div className="text-weak">{excerpt}</div>
  </article>
);
