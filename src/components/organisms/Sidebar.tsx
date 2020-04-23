import React from "react"
import { faHome, faTags } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"
import { mq } from "../../styles/mediaQueries"
import { SidebarButton } from "../atoms/SidebarButton"
import SidebarButtonsGroup from "../molecules/SidebarButtonsGroup"
import { scheme } from "../../styles/colorScheme"

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
      background-color: ${scheme.sidebarBackground};
      a {
        color: ${scheme.text};
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
