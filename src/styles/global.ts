import { css } from "@emotion/core";
import tw from "twin.macro";
import { growingUnderlineAnchor } from "./styles";
import { prismStyles } from "../components/layout/prism-styles";

export const globalStyles = css`
  * {
    transition: 200ms background-color ease;
  }
  html {
    scrollbar-color: #4a5568 #1a202c;
    overflow-y: scroll;
  }
  body {
  }
  a {
    ${tw`text-teal-500`};
    ${growingUnderlineAnchor};
  }

  ${prismStyles}
`;
