import React, { useState } from "react";
import { faHome, faTags } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import { mq } from "../../styles/mediaQueries";
import { styleValues } from "../../styles/styleValues";
import { TableOfContents } from "../table-of-contents";
import { TOC } from "../../libs/toc";
import { SidebarButtonsGroup } from "./buttons-group";

export type SidebarProps = { toc?: TOC };

export const Sidebar: React.FC<SidebarProps> = ({ toc }) => {
  return (
    <nav
      id="sidebar"
      css={css`
        /*position: fixed;*/
        margin: 0 auto;
        height: 100%;
        max-width: 200px;
        min-width: 150px;
        background-color: var(--color-sidebar-background);
        a {
          color: var(--global-text);
        }
      `}
    >
      <div
        css={css`
          position: sticky;
          top: 2px;
        `}
      >
        {toc ? <TableOfContents TOC={toc} /> : null}
      </div>
    </nav>
  );
};
