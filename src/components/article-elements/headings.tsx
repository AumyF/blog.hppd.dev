import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "twin.macro";

export const headingStyle = css`
  font-feature-settings: "palt";
  font-weight: 200;
  font-family: "Hiragino Sans", "Noto Sans CJK JP Thin", "Yu Gothic", sans-serif;
`;

export const Heading1 = styled.h2`
  ${headingStyle}
  ${tw`leading-snug my-5 text-4xl`}
  border-bottom: 1px solid var(--border);
  font-feature-settings: "palt";
`;

export const Heading2 = Heading1;

export const Heading3 = styled.h3`
  ${headingStyle}
  ${tw`leading-snug my-4`}
  font-size: 1.8rem;
`;

export const Heading4 = styled.h3`
  ${headingStyle}
  font-size: 1.5rem;
`;
