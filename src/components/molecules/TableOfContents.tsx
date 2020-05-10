import SwipingAnchor from "../atoms/SwipingAnchor";
import React from "react";
import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import { TOC } from "../../libs/toc";

const TOCItemComponent: React.FC<TOC> = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i.title} className="ml-1">
        <SwipingAnchor to={i.url}>{i.title}</SwipingAnchor>
        {i.items ? <TOCItemComponent items={i.items} /> : null}
      </li>
    ))}
  </ul>
);

export type TableOfContentsProps = {
  TOC: TOC;
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({ TOC }) => (
  <nav
    css={css`
      font-size: 0.9rem;
      background-color: #222;
      border: 1px solid ${styleValues.global.border};
      border-radius: 0.25rem;
      padding: 0.5rem;
    `}
  >
    <TOCItemComponent items={TOC.items} />
  </nav>
);

export default TableOfContents;
