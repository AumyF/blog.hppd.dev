import React from "react"
import { faHome, faTags } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"
import { mq } from "../../styles/mediaQueries"
import { SidebarButton } from "../atoms/SidebarButton"
import SidebarButtonsGroup from "../molecules/SidebarButtonsGroup"

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
      ${mq.lg} {
        width: 200px;
      }
    `}
  >
    <SidebarButtonsGroup
      buttons={[
        { icon: faHome, to: "/", children: "HOME" },
        { icon: faTags, to: "tags", children: "TAGS" },
      ]}
    />
    <SidebarButton icon={faHome} to="/">
      HOME
    </SidebarButton>
  </nav>
)
