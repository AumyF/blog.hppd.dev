import React from "react";
import { css } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Post } from "../../../types/graphqlTypes";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { withTheme } from "../../styles/theme";

export type TagListProps = Pick<Post, "tags">;

const Tag: React.FCX<{ tag: Post["tags"][number] }> = ({ tag, className }) => (
  <Link className={"text-teal-500 px-1 " + className} to={`/tags/${tag}`}>
    {tag}
  </Link>
);
export const TagList: React.FCX<TagListProps> = ({ tags, className }) => (
  <div className={className + " inline-flex flex-wrap"}>
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
