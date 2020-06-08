import React, { ReactNode } from "react";
import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import colorScheme from "../../styles/colorScheme";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { DateTime } from "luxon";
import { assertsNonNull } from "../../libs/asserts-non-null";
import { callOptionalUndefined } from "../../libs/call-optional";

export type BreadcrumbsProps = {
  date?: string[];
  path: string;
};

const Slash = (
  <span
    css={css`
      margin: 0 4px;
      color: var(--global-text);
      user-select: none;
    `}
  >
    /
  </span>
);

export const Breadcrumbs: React.FCX<BreadcrumbsProps> = ({ date }) => {
  const [year, month, dayPath] = date ?? [undefined, undefined, undefined];
  return (
    <nav>
      <span
        css={css`
          background-image: linear-gradient(0.25turn, #c49131, #ca32c0);
          background-clip: text;
          color: transparent;
          a {
            color: transparent;
          }
        `}
      >
        <Link to="/">blog.momini.space</Link>
        {year && (
          <>
            {Slash}
            <Link to={`/${year}/`}>{year}</Link>
          </>
        )}
        {month && (
          <>
            {Slash}
            <Link to={`/${year}/${month}/`}>{month}</Link>
          </>
        )}
        {dayPath && (
          <>
            {Slash}
            <Link to={`/${year}/${month}/${dayPath}/`}>{dayPath}</Link>
          </>
        )}
        <FontAwesomeIcon
          icon={faChevronRight}
          css={css`
            margin-left: 4px;
            color: var(--global-text);
          `}
        />
      </span>
    </nav>
  );
};
