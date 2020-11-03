import { css } from "@emotion/core";
import tw from "twin.macro";
import { growingUnderlineAnchor } from "./styles";
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
  a {
    ${tw`text-fuchsia-white`};
    ${growingUnderlineAnchor};
  }

  ${prismStyles}
`;
