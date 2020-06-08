import React, { ReactNode } from "react";
import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import colorScheme from "../../styles/colorScheme";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

export type BreadcrumbsProps = {
  year?: string;
  month?: string;
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
  year,
  month,
  path,
}) => (
  <>
    <Link to="/">blog.momini.space</Link>
    {Slash}
    {year && [<Link to={`/${year}/`}>{year}</Link>, Slash]}
    {month && [<Link to={`/${year}/${month}/`}>{month}</Link>, Slash]}
    <Link to={`/${year}/${month}/${path}/`}>{path}</Link>
    <FontAwesomeIcon
      icon={faChevronRight}
      css={css`
        margin-left: 4px;
      `}
    />
  </>
);
