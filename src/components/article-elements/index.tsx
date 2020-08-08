import { MDXProviderComponentsProp } from "@mdx-js/react";
import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/core";
import { HeaderAutoLink } from "../atoms/autolink-header";
import { Link } from "gatsby";
import tw from "twin.macro";

export const headingStyle = css`
  font-feature-settings: "palt";
  font-weight: 200;
  font-family: "Hiragino Sans", "Noto Sans CJK JP Thin", "Yu Gothic", sans-serif;
`;

export const Heading2 = styled.h2`
  ${headingStyle};
  ${tw`leading-snug my-5 text-4xl`};
  border-bottom: 1px solid var(--border);
  font-feature-settings: "palt";
`;

export const Heading3 = styled.h3`
  ${headingStyle};
  ${tw`leading-snug my-4`};
  font-size: 1.8rem;
`;

export const Heading4 = styled.h4`
  ${headingStyle};
  font-size: 1.5rem;
`;

export const BlockQuote = styled.blockquote`
  ${tw`pl-6 border-l-2 border-foreground-neutral`};
`;

export const Paragraph = styled.p`
  ${tw`my-4`};
`;

export const HorizontalLine = styled.hr`
  ${tw`my-4 border-b`};
`;

export const UnorderedList = styled.ul`
  ${tw`list-disc py-1 px-2 pl-8`};
`;

export const OrderedList = styled.ol`
  ${tw`list-decimal py-1 px-2 pl-8`};
`;

export const Strong = styled.strong`
  ${tw`font-bold`};
`;

export const ArticleElements: MDXProviderComponentsProp = {
  h1: Heading2,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: styled.h5``,
  h6: styled.h6``,
  blockquote: BlockQuote,
  p: Paragraph,
  a: (props: JSX.IntrinsicElements["a"]) => {
    return props.className?.includes(`autolink-headers`) ? (
      <HeaderAutoLink {...props} />
    ) : (
      <Link to={props.href!} {...(props as any)} />
    );
  },
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
