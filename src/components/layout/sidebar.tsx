import React from "react";
import { css } from "@emotion/core";
import { TableOfContents } from "../table-of-contents";

export type SidebarProps = {
  children?: (toc: typeof TableOfContents) => React.ReactNode;
};

const media = (size: "sm" | "md" | "lg" | "xl") =>
  `@media (min-width: ${{ sm: 560, md: 768, lg: 960, xl: 1024 }[size]}px)`;

export const Sidebar: React.FC<SidebarProps> = ({
  children = node => node,
}) => (
  <aside
    className="flex-shrink-0 hidden sm:block sticky h-min-content top-0 px-4 "
    css={css`
      flex-basis: 192px;
      ${media("xl")} {
        flex-basis: 255px;
      }
    `}
  >
    {children(TableOfContents)}
  </aside>
);

export default Sidebar;
