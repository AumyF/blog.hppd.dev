import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";

export const ArticleStyles = css`
  letter-spacing: 0.09em;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-feature-settings: "palt";
  }
  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    border: none;
    border-bottom: 1px solid ${styleValues.global.border};
  }
  pre {
    overflow-x: scroll;
  }
  p,
  li {
    line-height: 1.75;
  }
`;
