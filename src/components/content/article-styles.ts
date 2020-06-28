import { css } from "@emotion/core";
import { styleValues } from "../../styles/styleValues";
import { letterSpacing } from "../../libs/styleFn/text";

export const ArticleStyles = css`
  ${letterSpacing([0.09, "em"])}
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
    border-bottom: 1px solid var(--border);
  }
  pre {
    overflow-x: scroll;
  }
  p,
  li {
    line-height: 1.75;
  }
`;
