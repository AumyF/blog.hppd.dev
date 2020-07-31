import React from "react";
import { css } from "@emotion/core";
import { TOC } from "../../libs/toc";
import styled from "@emotion/styled";

const TOCItemComponent: React.FCX<TOC> = ({ items, className }) => (
  <ul className={className}>
    {items.map(items => (
      <li key={items.title} className="leading-normal" css={css``}>
        <a
          className="block my-1 no-underline transition-all duration-75 hover:bg-border"
          href={items.url}
        >
          {items.title}
        </a>
        {items.items ? (
          <TOCItemComponent className="ml-4" items={items.items} />
        ) : null}
      </li>
    ))}
  </ul>
);

export type TableOfContentsProps = {
  toc: TOC;
};

const PlainComponent: React.FCX<TableOfContentsProps> = ({
  toc: TOC,
  className,
}) => (
  <div className={className}>
    <div>Table of Contents</div>
    <TOCItemComponent items={TOC.items} />
  </div>
);

export const TableOfContents = styled(PlainComponent)`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  & > div {
    text-align: center;
    margin: auto 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid var(--border);
  }
`;
