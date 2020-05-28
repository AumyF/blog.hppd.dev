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
import TableOfContents from "../table-of-contents";
import { TOC } from "../../libs/toc";
import { SidebarButtonsGroup } from "./buttons-group";

export type SidebarProps = { toc?: TOC };

export const Sidebar: React.FC<SidebarProps> = ({ toc }) => {
  return (
    <nav
      id="sidebar"
      css={css`
        /*position: fixed;*/
        height: 100%;
        ${mq.large} {
          width: 200px;
        }
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
        <SidebarButtonsGroup
          buttons={[
            { icon: faHome, to: "/" },
            { icon: faTags, to: "/tags/" },
            { icon: faTwitter, to: "https://twitter.com/mominisj" },
            { icon: faGithub, to: "https://github.com/kkrnme" },
          ]}
        />
        {toc ? <TableOfContents TOC={toc} /> : null}
      </div>
    </nav>
  );
};
