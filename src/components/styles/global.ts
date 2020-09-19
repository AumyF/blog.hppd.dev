import { css } from "@emotion/core";
import tw from "twin.macro";
import { growingUnderlineAnchor } from "./styles";
import { prismStyles } from "./prism-styles";

export const globalStyles = css`
  * {
    transition: 200ms background-color ease;
  }
  html {
    scrollbar-color: hsl(260, 25%, 35%) hsl(260, 12.5%, 90%);
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
