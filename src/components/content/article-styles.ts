import { css } from "@emotion/core";
import { letterSpacing } from "../../libs/styleFn/text";
import { headingStyle, Heading1 } from "../article-elements/headings";
import tw from "twin.macro";

export const ArticleStyles = css`
  ${letterSpacing([0.05, "em"])}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingStyle};
  }
  > h2 {
    ${tw`leading-snug my-5 text-4xl`};
    border-bottom: 1px solid var(--border);
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
  p {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  table {
    > thead {
      border-bottom: 1px solid var(--foreground);
    }
    > tbody {
      > tr {
        &:nth-of-type(2n) {
          background-color: #fff1;
        }
        > td {
          padding: 0.2rem 1rem;
          &:not(:last-child) {
            border-right: 1px solid var(--border);
          }
        }
      }
    }
  }
`;
