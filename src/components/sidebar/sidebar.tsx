import React from "react";
import { TableOfContents } from "../table-of-contents";
import { TOC } from "../../libs/toc";
import styled from "@emotion/styled";

export type SidebarProps = { toc?: TOC };

export const PlainComponent: React.FCX<SidebarProps> = ({ toc, className }) => (
  <nav id="sidebar" className={className}>
    {toc ? <TableOfContents toc={toc} /> : null}
  </nav>
);

export const Sidebar = styled(PlainComponent)`
  & > ${TableOfContents} {
    position: sticky;
    margin: 0 auto;
    width: 230px;
    background-color: var(--color-sidebar-background);
    top: 3rem;
  }
`;
