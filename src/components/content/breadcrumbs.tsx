import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { invisibleAnchor } from "../../styles/styles";

export type BreadcrumbsProps = {
  date?: string[];
  path: string;
};

const Slash = <span className="select-none mx-1">/</span>;

export const Breadcrumbs: React.FCX<BreadcrumbsProps> = ({
  date,
  className,
}) => {
  const [year, month, dayPath] = date ?? [undefined, undefined, undefined];
  return (
    <nav {...{ className }}>
      <span
        css={css`
          a {
            ${invisibleAnchor}
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
        <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
      </span>
    </nav>
  );
};
