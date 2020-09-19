import React from "react";
import { css } from "@emotion/core";
import { TableOfContents } from "../table-of-contents";

export type SidebarProps = {
  children?: (toc: typeof TableOfContents) => React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({
  children = node => node,
}) => (
  <aside className="" css={css``}>
    {children(TableOfContents)}
  </aside>
);

export default Sidebar;
