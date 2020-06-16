import React from "react";
import { css } from "@emotion/core";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styleValues } from "../../styles/styleValues";
import { useTheme } from "../../styles/theme";

export type TagListProps = {
  tags: readonly string[];
};

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  const { theme } = useTheme();
  return (
    <div css={css``}>
      <span>
        <FontAwesomeIcon icon={faTags} />
      </span>
      <ul
        css={css`
          display: inline-flex;
          padding: 0;
          list-style: none;
        `}
      >
        {tags?.map(tag => (
          <li
            key={tag}
            css={css`
              font-size: 1em;
              margin-left: 0.3rem;
              color: ${theme.colors.primary};
            `}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
