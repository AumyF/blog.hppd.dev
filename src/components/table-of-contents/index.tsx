import { SwipingAnchor } from "../atoms/swiping-anchor";
import React from "react";
import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import { TOC } from "../../libs/toc";
import styled from "@emotion/styled";

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
  ${styleValues.TableOfContents}
  font-size: 1rem;
  padding: 0.5rem 1rem;
  & > div {
    text-align: center;
    margin: auto 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid ${styleValues.global.text};
  }
`;
