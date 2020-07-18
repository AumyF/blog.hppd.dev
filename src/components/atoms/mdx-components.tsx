import { MDXProviderComponentsProp } from "@mdx-js/react";
import styled from "@emotion/styled";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "../article-elements/headings";
import { Strong } from "../article-elements/strong";
import { Anchor } from "../article-elements/anchor";
import { OrderedList, UnorderedList } from "../article-elements/list";
import { HorizontalLine } from "../article-elements/horizontal-line";
import { Paragraph } from "../article-elements/paragraph";

type Elm = JSX.IntrinsicElements;

export const MDXComponents: MDXProviderComponentsProp = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: styled.h5``,
  h6: styled.h6``,
  blockquote: styled.blockquote``,
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
