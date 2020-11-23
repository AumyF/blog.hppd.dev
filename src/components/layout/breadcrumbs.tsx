import { css } from "@emotion/core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";

import { useSite } from "../../hooks/use-site";
import { assertsNonNull } from "../../utils/asserts-non-null";
import { invisibleAnchor } from "../styles/styles";

export type BreadcrumbsProps = {
  date?: string[];
  path: string;
};

const Slash = <span className="select-none mx-1">/</span>;

export const Breadcrumbs: React.FCX<BreadcrumbsProps> = ({
  className,
  date,
}) => {
  const [year, month, dayPath] = date ?? [undefined, undefined, undefined];
  const [topLevelDomain, ...restDomainName] = assertsNonNull(
    useSite().siteMetadata?.domainName?.split(".").reverse()
  );

  const second = `${restDomainName[0]}.${topLevelDomain}`;
  return (
    <nav className={clsx(`text-text bg-white`, className)}>
      <div
        className="container mx-auto px-4"
        css={css`
          a {
            ${invisibleAnchor}
          }
        `}
      >
        <Link to={`https://${restDomainName[1]}.${second}`}>
          {restDomainName[1]}
        </Link>
        .<a href={`https://` + second}>{second}</a>
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
      </div>
    </nav>
  );
};
