import React from "react";
import { css } from "@emotion/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import AnchorOrLink from "./AnchorOrLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SidebarButtonProps = {
  icon: IconProp;
  to: string;
  children: string;
};
export const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  children,
  to,
}) => (
  <li
    className="sidebar-button"
    css={css`
      font-size: 2rem;
    `}
  >
    <AnchorOrLink to={to}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </AnchorOrLink>
  </li>
);
