import { css } from "@emotion/core";
import tw from "twin.macro";

export const prismStyles = css`
  .gatsby-highlight {
    pre[class*="language-"] {
      border-radius: 0 0 1rem 1rem;
    }
    &-code-line {
      background-color: #013c33;
      display: block;
      margin-right: -1em;
      margin-left: -1em;
      padding-right: 1em;
      padding-left: 0.75em;
      border-left: 0.25em solid var(--secondary-neutral);
    }
  }
  pre[class*="language-"].line-numbers {
    padding: 0 0 0 3em;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: #25252d;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: monospace;
  }
  .gatsby-code-title {
    background: #25252d;
    margin-bottom: -9px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8em;
    ${tw`text-gray-100`}
    font-weight: 600;
    border-radius: 1rem 1rem 0 0;
  }
`;
