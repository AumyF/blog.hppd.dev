import { css } from "@emotion/react";

import { prismStyles } from "./prism-styles";

export const globalStyles = css`
  * {
    transition: 200ms background-color ease;
  }
  html {
    scrollbar-color: #7975a2 #4a457f;
    overflow-y: scroll;
  }
  body {
  }

  ${prismStyles}
`;
