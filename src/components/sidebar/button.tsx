import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { css } from "@emotion/core";
import { AnchorOrLink } from "../atoms/anchor-or-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSpring, animated } from "react-spring";

export type SidebarButtonProps = {
  icon: IconProp;
  to: string;
};

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  children,
  to,
}) => {
  const [spring, set] = useSpring(() => ({
    transform: "scale(100%)",
    config: {
      mass: 1,
      tension: 200,
      friction: 9,
    },
  }));
  return (
    <animated.li
      className="sidebar-button"
      css={css`
        font-size: 2rem;
        padding: 4px;
      `}
      style={spring}
      onMouseEnter={e => set({ transform: "scale(130%)" })}
      onMouseLeave={e => set({ transform: "scale(100%)" })}
    >
      <AnchorOrLink to={to}>
        <FontAwesomeIcon icon={icon} />
      </AnchorOrLink>
    </animated.li>
  );
};
