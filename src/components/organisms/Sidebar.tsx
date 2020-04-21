import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Link } from "gatsby"
import AnchorOrLink from "../atoms/AnchorOrLink"
import { faHome } from "@fortawesome/free-solid-svg-icons"

export type SidebarProps = {}

export type SidebarButtonProps = {
  icon: IconProp
  to: string
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  children,
  to,
}) => (
  <li className="sidebar-button">
    <AnchorOrLink to={to}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </AnchorOrLink>
  </li>
)

export const Sidebar: React.FC<SidebarProps> = () => (
  <nav id="sidebar">
    <SidebarButton icon={faHome} to="/">
      HOME
    </SidebarButton>
  </nav>
)
