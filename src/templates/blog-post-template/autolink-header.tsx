import { Link } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

export type HeaderAutoLinkProps = {};

export const HeaderAutoLink: React.FCX<HeaderAutoLinkProps> = props => (
  <Link
    {...props}
    left="-20px"
    pos="absolute"
    css={css`
      svg {
        fill: currentColor;
        display: inline;
        transform: scale(1.2);
      }
    `}
  />
);
