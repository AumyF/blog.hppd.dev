import scheme from "./colorScheme";
import { css } from "@emotion/core";

export const styleValues = {
  global: {
    text: scheme.silver,
    primaryAccent: scheme.blue,
    secondaryAccent: scheme.yellow,
    border: scheme.light,
    scrollbar: scheme.light + scheme.dark,
  },
  a: css`
    color: ${scheme.blue};
    text-decoration: underline ${scheme.blue};
    text-decoration-thickness: 2px;
  `,
  ContentHeader: { background: scheme.jet },
  main: {
    background: scheme.dark,
    borderRadius: "16px",
  },
  Card: {
    background: scheme.jet,
  },
  SideBar: {
    width: "200px",
  },
  TableOfContents: css`
    background-color: ${scheme.dark};
  `,
} as const;
