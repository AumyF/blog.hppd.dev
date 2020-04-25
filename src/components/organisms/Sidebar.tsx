import React from "react"
import { faHome, faTags } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"
import { mq } from "../../styles/mediaQueries"
import { SidebarButton } from "../atoms/SidebarButton"
import SidebarButtonsGroup from "../molecules/SidebarButtonsGroup"
import { readFileSync } from "fs"
import { styleValues } from "../../styles/styleValues"

export type SidebarProps = {}

export const sidebarWidth: { [index in "sm" | "md" | "lg" | "xl"]: string } = {
  sm: "200px",
  md: "200px",
  lg: "200px",
  xl: "200px",
}

export const Sidebar: React.FC<SidebarProps> = () => (
  <nav
    id="sidebar"
    css={css`
      position: fixed;
      height: 100%;
      ${mq.lg} {
        width: 200px;
      }
      backdrop-filter: blur(2px);
      a {
        color: ${styleValues.global.text};
      }
    `}
  >
    <SidebarButtonsGroup
      buttons={[
        { icon: faHome, to: "/", children: "HOME" },
        { icon: faTags, to: "/tags/", children: "TAGS" },
      ]}
    />
  </nav>
)
