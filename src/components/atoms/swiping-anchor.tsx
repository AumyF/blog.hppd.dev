import { css } from "@emotion/core";
import React from "react";
import { AnchorOrLink } from "./anchor-or-link";
import { GatsbyLinkProps } from "gatsby";
import { styleValues } from "../../styles/styleValues";
import { ThemeContainer } from "../../styles/theme";

export const SwipingAnchor: React.FC<GatsbyLinkProps<unknown>> = props => (
  <span
    css={css`
      z-index: 0;
      position: relative;
      display: inline-block;
    `}
  >
    <AnchorOrLink
      css={css`
        color: var(--primary);
        text-decoration: underline var(--primary);
        text-decoration-thickness: 2px;
        color: inherit;
        transition: all 0.4s ease-in-out;
        &::before {
          display: block;
          content: "";
          height: 100%;
          background-color: var(--primary);
          position: absolute;
          transition: all 0.4s ease-in-out;
          top: 0;
          left: 0;
          right: 100%;
          z-index: -1;
          border-radius: 1px;
        }
        &:hover {
          color: black;
          &::before {
            left: 0;
            right: 0;
          }
        }
      `}
      {...props}
    />
  </span>
);
