import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";

export const prismStyles = css`
  pre[class*="language-"].line-numbers {
    padding: 0 0 0 3em;
  }
  .gatsby-highlight-code-line {
    background-color: #013c33;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${styleValues.global.secondaryAccent};
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: #25252d;
  }
  div.gatsby-code-title {
    background: #25252d;
    margin-bottom: -9px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8em;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
  }
`;
