import React from "react";
import { Link } from "gatsby";
import { PostDate } from "./post-date";
import { invisibleAnchor } from "../styles/styles";
import { TagList } from "../atoms/tag-list";
import clsx from "clsx";

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
    <div className="flex items-baseline gap-2 flex-wrap">
      <Link
        to={`/${path}`}
        className="text-3xl font-bold leading-tight "
        css={invisibleAnchor}
      >
        {title}
      </Link>
      <div className="contents">
        {yyyymmdd && <PostDate path={yyyymmdd} />}
        <div className="flex flex-wrap items-baseline gap-1">
          <TagList tags={tags} />
        </div>
      </div>
    </div>
    <div className="text-weak">{excerpt}</div>
  </article>
);
