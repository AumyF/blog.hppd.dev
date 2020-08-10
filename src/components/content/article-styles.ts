import { css } from "@emotion/core";
import { letterSpacing } from "../../libs/styleFn/text";
import { headingStyle } from "../article-elements/";
import tw from "twin.macro";

export const h2 = css`
  ${headingStyle};
  ${tw`leading-snug my-5 text-4xl`};
  border-bottom: 1px solid var(--border);
  font-feature-settings: "palt";
`;

export const h3 = css`
  ${headingStyle};
  ${tw`leading-snug my-4`};
  font-size: 1.8rem;
`;

export const h4 = css`
  ${headingStyle};
  font-size: 1.5rem;
`;

export const blockquote = css`
  ${tw`pl-6 border-l-2 border-foreground-neutral`};
`;

export const p = css`
  ${tw`my-4`};
`;

export const hr = css`
  ${tw`my-4 border-t`};
`;

export const ul = css`
  ${tw`list-disc py-1 px-2 pl-8`};
`;

export const ol = css`
  ${tw`list-decimal py-1 px-2 pl-8`};
`;

export const strong = css`
  ${tw`font-bold`};
`;

export const ArticleStyles = css`
  h2 {
    ${headingStyle};
    ${tw`leading-snug my-5 text-4xl`};
    border-bottom: 1px solid var(--border);
    font-feature-settings: "palt";
  }
  h3 {
    ${h3};
  }
  h4 {
    ${h4};
  }
  blockquote {
    ${blockquote};
  }
  p {
    ${p};
  }
  hr {
    ${hr};
  }
  ul {
    ${ul};
  }
  ol {
    ${ol};
  }
  strong {
    ${strong};
  }
  a {
    ${tw`underline underline-1 hover:underline-2`}
    transition: text-decoration 100ms ease-in-out;
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
  table {
    > thead {
      border-bottom: 1px solid var(--foreground-neutral);
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
