import SwipingAnchor from "../atoms/SwipingAnchor";
import React from "react";
import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import { TOC } from "../../libs/toc";

const TOCItemComponent: React.FC<TOC> = ({ items }) => (
  <ul
    css={css`
      margin: 0;
      padding: 0.5rem 0;
    `}
  >
    {items.map(i => (
      <li key={i.title} css={css``}>
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
      ${styleValues.TableOfContents}
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}
  >
    <div
      css={css`
        text-align: center;
        margin: auto 1rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid ${styleValues.global.text};
      `}
    >
      Table of Contents
    </div>
    <TOCItemComponent items={TOC.items} />
  </nav>
);

export default TableOfContents;
