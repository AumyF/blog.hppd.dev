import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export type BreadcrumbsProps = {
  date?: string[];
  path: string;
};

const Slash = (
  <span
    css={css`
      margin: 0 4px;
      user-select: none;
    `}
  >
    /
  </span>
);

export const Breadcrumbs: React.FCX<BreadcrumbsProps> = ({
  date,
  className,
}) => {
  const [year, month, dayPath] = date ?? [undefined, undefined, undefined];
  return (
    <nav {...{ className }}>
      <span
        css={css`
          color: var(--foreground-neutral);
          a {
            text-decoration: underline solid #0000;
            transition: text-decoration 100ms ease-in-out;
            &:hover {
              text-decoration: underline solid var(--primary-neutral);
            }
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
            color: var(--foreground-neutral);
          `}
        />
      </span>
    </nav>
  );
};
