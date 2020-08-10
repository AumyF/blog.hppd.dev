import { css } from "@emotion/core";
import React from "react";

export type HeaderAutoLinkProps = {};

export const HeaderAutoLink: React.FCX<HeaderAutoLinkProps> = props => (
  <a
    {...props}
    className={" text-gray-400 fill-current float-left absolute"}
    css={css`
      left: -20px;
      position: absolute;
      svg {
        display: inline;
        transform: scale(1.2);
      }
    `}
  />
);
