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
    top: 2px;
    a {
      color: var(--global-text);
    }
  }
`;
