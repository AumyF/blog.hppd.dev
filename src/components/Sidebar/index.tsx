import React from "react";
import { faHome, faTags } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/core";
import { mq } from "../../styles/mediaQueries";
import { styleValues } from "../../styles/styleValues";
import TableOfContents from "../table-of-contents";
import { TOC } from "../../libs/toc";
import { SidebarButtonsGroup } from "./ButtonsGroup";

export type SidebarProps = { toc?: TOC };

export const Sidebar: React.FC<SidebarProps> = ({ toc }) => (
  <nav
    id="sidebar"
    css={css`
      /*position: fixed;*/
      height: 100%;
      ${mq.large} {
        width: 200px;
      }
      a {
        color: ${styleValues.global.text};
      }
    `}
  >
    <div>MOMIREPO</div>
    <div
      css={css`
        position: sticky;
        top: 2px;
      `}
    >
      <SidebarButtonsGroup
        buttons={[
          { icon: faHome, to: "/", children: "HOME" },
          { icon: faTags, to: "/tags/", children: "TAGS" },
        ]}
      />
      {toc ? <TableOfContents TOC={toc} /> : null}
    </div>
  </nav>
);
