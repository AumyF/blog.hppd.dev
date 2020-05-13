import { SidebarButtonProps } from "./Button";
import { css } from "@emotion/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

export type SidebarButtonsGroupProps = {
  buttons: SidebarButtonProps[];
};

export const SidebarButtonsGroup: React.FC<SidebarButtonsGroupProps> = ({
  buttons,
}) => (
  <ul
    css={css`
      margin: 0;
      display: flex;
      justify-content: center;
      font-size: 2rem;
    `}
  >
    {buttons.map(c => (
      <li key={c.to}>
        <Link
          to={c.to}
          css={css`
            padding: 4px;
          `}
        >
          <FontAwesomeIcon icon={c.icon} />
        </Link>
      </li>
    ))}
  </ul>
);

export default SidebarButtonsGroup;
