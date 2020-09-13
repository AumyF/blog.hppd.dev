import React from "react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Post } from "../../../types/graphqlTypes";
import { Link } from "gatsby";

export type TagListProps = Pick<Post, "tags">;

const Tag: React.FCX<{ tag: Post["tags"][number] }> = ({ tag, className }) => (
  <Link className={"text-teal-500 " + className} to={`/tags/${tag}`}>
    {tag}
  </Link>
);

export const TagList: React.FCX<TagListProps> = ({ tags, className }) => (
  <div className={`${className ?? ""} inline-flex flex-wrap gap-1`}>
    <span>
      <FontAwesomeIcon icon={faTags} />
    </span>
    <div className="contents">
      {tags?.map(tag => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  </div>
);
