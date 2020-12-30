import { css } from '@emotion/react';
import React from "react";

export type HeaderAutoLinkProps = {};

export const HeaderAutoLink: React.FCX<HeaderAutoLinkProps> = props => (
  <a
    {...props}
    className={"text-fuchsia-white fill-current float-left absolute"}
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
