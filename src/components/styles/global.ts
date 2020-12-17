import { css } from '@emotion/react';
import tw from "twin.macro";

import { prismStyles } from "./prism-styles";
import { growingUnderlineAnchor } from "./styles";

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
  a {
    ${tw`text-fuchsia-white`};
    ${growingUnderlineAnchor};
  }

  ${prismStyles}
`;
