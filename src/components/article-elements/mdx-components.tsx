import { MDXProviderComponentsProp } from "@mdx-js/react";
import styled from "@emotion/styled";
import { Heading1, Heading2, Heading3, Heading4 } from "./headings";
import { Strong } from "./strong";
import { Anchor } from "./anchor";
import { OrderedList, UnorderedList } from "./list";
import { HorizontalLine } from "./horizontal-line";
import { Paragraph } from "./paragraph";
import React from "react";
import { css } from "@emotion/core";

type Elm = JSX.IntrinsicElements;

export const MDXComponents: MDXProviderComponentsProp = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: styled.h5``,
  h6: styled.h6``,
  blockquote: (props: JSX.IntrinsicElements["blockquote"]) => (
    <blockquote
      {...props}
      className="pl-6 border-l-2 border-foreground-neutral"
    />
  ),
  p: Paragraph,
  a: Anchor,
  strong: Strong,
  ul: UnorderedList,
  ol: OrderedList,
  li: styled.li``,
  hr: HorizontalLine,
  pre: styled.pre``,
  thematicBreak: styled.br``,
  tr: styled.tr``,
  table: styled.table``,
  td: styled.td``,
};
