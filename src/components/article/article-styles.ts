import { css } from "@emotion/react";
const listStyle = css``;
const headingStyle = css`
  font-feature-settings: "palt";
  font-weight: 600;
  font-family: "Hiragino Sans", "Noto Sans CJK JP", "Yu Gothic", sans-serif;
`;

export const ArticleStyles = css`
  h1 {
    ${headingStyle};
    font-feature-settings: "palt";
  }

  h2 {
    ${headingStyle};
  }

  h3 {
    ${headingStyle};
  }

  blockquote {
  }

  p {
  }

  hr {
  }

  ul {
    ${listStyle}
  }
  ol {
    ${listStyle}
  }

  li:not(:last-child) {
  }

  strong {
  }

  a {
    transition: text-decoration 100ms ease-in-out;
  }

  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
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
    }
    > tbody {
      > tr {
        &:nth-of-type(2n) {
          background-color: #fff1;
        }
        > td {
          padding: 0.2rem 1rem;
          &:not(:last-child) {
          }
        }
      }
    }
  }

  iframe {
    max-width: 100%;
  }
`;
