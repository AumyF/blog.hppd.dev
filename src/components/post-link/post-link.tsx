import React from "react";
import { Link } from "gatsby";
import { PostDate } from "./post-date";
import { invisibleAnchor } from "../styles/styles";
import { TagList } from "../atoms/tag-list";
import clsx from "clsx";
import { css } from "@emotion/core";

export type PostLinkProps = {
  path: string;
  title: string;
  tags: string[];
  yyyymmdd: string;
  excerpt: string;
};
// PickAndPartialPick<Post, "path" | "title", "tags"> &
//   Pick<MdxFields, "yyyymmdd">;

export const PostLink: React.FCX<PostLinkProps> = ({
  path,
  title,
  className,
  tags,
  yyyymmdd,
  excerpt,
}) => (
  <article
    className={clsx(className, "p-4 bg-transparent border-t border-border")}
  >
    <div
      className="flex flex-wrap items-baseline gap-4 text-weak"
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
