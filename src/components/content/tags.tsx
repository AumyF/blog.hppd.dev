import React from "react";
import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import colorScheme from "../../styles/colorScheme";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export type PostTagsProps = { tags: readonly string[] };

export const PostTags: React.FC<PostTagsProps> = ({ tags }) => (
  <ul
    css={css`
      margin: 0;
      padding: 0;
    `}
  >
    {tags.map(tag => (
      <li
        css={css`
          list-style: none;
          display: inline;
        `}
        key={tag}
      >
        <Link
          css={css`
            text-decoration: none;
          `}
          to={`/tags/${tag}/`}
        >
          <FontAwesomeIcon
            icon={faTag}
            css={css`
              margin: 0 4px;
            `}
          />
          {tag}
        </Link>
      </li>
    ))}
  </ul>
);

export default PostTags;

/**<li
        key={tag}
        css={css`
          background-color: ${styleValues.global.primaryAccent};
          color: ${colorScheme.dark};
          display: inline-block;
          position: relative;
          height: 32px;
          padding-left: 18px;
          &::after {
            content: " ";
            display: block;
            height: 0;
            position: absolute;
            width: 0;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-left: 16px solid ${styleValues.global.primaryAccent};
            left: 100%;
            top: 0;
            z-index: 2;
          }

          &:nth-of-type(1n) {
            background-color: ${colorScheme.blue};
            &::after {
              border-left-color: ${colorScheme.blue};
            }
          }
          &:nth-of-type(2n) {
            background-color: ${colorScheme.green};
            &::after {
              border-left-color: ${colorScheme.green};
            }
          }
          &:nth-of-type(3n) {
            background-color: ${colorScheme.yellow};
            &::after {
              border-left-color: ${colorScheme.yellow};
            }
          }
          &:nth-of-type(4n) {
            background-color: ${colorScheme.red};
            &::after {
              border-left-color: ${colorScheme.red};
            }
          }
        `}
      >
        <Link
          css={css`
            text-decoration: none;
            color: var(--scheme-dark);
          `}
          to={`/tags/${tag}/`}
        >
          {tag}
        </Link>
      </li> */
