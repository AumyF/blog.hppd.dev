import React from "react";
import { Link } from "gatsby";
import { Post } from "../../../types/graphqlTypes";
import { TagList } from "../atoms/tag-list";
import { PostDate } from "./post-date";
import { PickAndPartialPick } from "../../utils/type-utils";
import { invisibleAnchor } from "../styles/styles";

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
}) => (
  <article className={className + " p-4 border-gray-800 border rounded-lg"}>
    <Link
      css={invisibleAnchor}
      className="text-2xl leading-normal font-bold"
      to={`/${path}`}
    >
      {title}
    </Link>
    {path && <PostDate {...{ path }} />}
    {tags && <TagList {...{ tags }} />}
    <div className="text-gray-500">{excerpt}</div>
  </article>
);
