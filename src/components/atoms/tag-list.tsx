import React from "react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import clsx from "clsx";

export type TagListProps = { tags: string[] };

const Tag: React.FCX<{ tag: string }> = ({ tag, className }) => (
  <Link className={clsx("text-fuchsia-white ", className)} to={`/tags/${tag}`}>
    {tag}
  </Link>
);

export const TagList: React.FCX<TagListProps> = ({ tags, className }) => (
  <div className={clsx(className, ` inline-flex flex-wrap gap-1`)}>
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
