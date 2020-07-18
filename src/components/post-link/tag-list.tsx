import React from "react";
import { css } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Post } from "../../../types/graphqlTypes";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";

export type TagListProps = Pick<Post, "tags">;

export module TagList {
  export const Tag: React.FCX<{ tag: Post["tags"][number] }> = ({ tag }) => (
    <Link to={`/tags/${tag}`}>
      <li
        css={css`
          ${tw``}
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
  );
  export const Plain: React.FCX<TagListProps> = ({ tags, className }) => (
    <div className={className}>
      <span>
        <FontAwesomeIcon icon={faTags} />
      </span>
      <ul>
        {tags?.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </ul>
    </div>
  );

  export const Styled = styled(Plain)`
    display: inline-flex;
    flex-wrap: wrap;
    padding: 0;
    > ul {
      display: contents;
      list-style: none;
    }
  `;
}
