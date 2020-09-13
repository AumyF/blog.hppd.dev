import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { invisibleAnchor } from "../styles/styles";
import { useSite } from "../../hooks/use-site";

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
  const domainName = useSite().siteMetadata?.domainName;
  return (
    <nav {...{ className }}>
      <span
        css={css`
          a {
            ${invisibleAnchor}
          }
        `}
      >
        <Link to="/">{domainName}</Link>
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
