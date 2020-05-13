import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { css } from "@emotion/core";
import AnchorOrLink from "../atoms/AnchorOrLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
