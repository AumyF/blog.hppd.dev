import { css } from "@emotion/react";

import { prismStyles } from "./prism-styles";

export const globalStyles = css`
  * {
    transition: 200ms background-color ease;
  }
  html {
    scrollbar-color: #d2d3e3 #1a1723;
    scroll-behavior: smooth;
    overflow-y: scroll;
  }
  body {
  }

  ${prismStyles}
`;
