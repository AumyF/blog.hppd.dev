import { css } from "@emotion/core";
import React from "react";
import { AnchorOrLink } from "./anchor-or-link";
import { GatsbyLinkProps } from "gatsby";
import { styleValues } from "../../styles/styleValues";

export const SwipingAnchor: React.FC<GatsbyLinkProps<unknown>> = props => (
  <span
    className="inline-block relative z-0"
    css={css`
      z-index: 0;
      position: relative;
      display: inline-block;
    `}
  >
    <AnchorOrLink
      css={css`
        ${styleValues.a}
        color: inherit;
        transition: all 0.4s ease-in-out;
        &::before {
          display: block;
          content: "";
          height: 100%;
          background-color: ${styleValues.global.primaryAccent};
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
