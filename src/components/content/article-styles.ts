import { css } from "@emotion/core";
import { headingStyle } from "../article-elements/";
import tw from "twin.macro";

const listStyle = css`
  ${tw`py-1 px-2 pl-8`}
`;

export const ArticleStyles = css`
  h2 {
    ${headingStyle};
    ${tw`leading-snug my-5 text-4xl border-b border-gray-800`};
    font-feature-settings: "palt";
  }
  h3 {
    ${headingStyle};
    ${tw`leading-snug my-4 text-3xl`};
  }
  h4 {
    ${headingStyle};
    ${tw`text-2xl`};
  }
  blockquote {
    ${tw`pl-6 border-l-2 border-gray-700`};
  }
  p {
    ${tw`my-4`};
  }
  hr {
    ${tw`my-4 border-t`};
  }
  ul {
    ${listStyle}
    ${tw`list-disc`};
  }
  ol {
    ${listStyle}
    ${tw`list-decimal`};
  }
  strong {
    ${tw`font-bold`};
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
      ${tw`border-b border-gray-700`}
    }
    > tbody {
      > tr {
        &:nth-of-type(2n) {
          background-color: #fff1;
        }
        > td {
          padding: 0.2rem 1rem;
          &:not(:last-child) {
            ${tw`border-r border-gray-800`}
          }
        }
      }
    }
  }
`;
