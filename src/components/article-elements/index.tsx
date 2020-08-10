import { MDXProviderComponentsProp } from "@mdx-js/react";
import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/core";
import { HeaderAutoLink } from "../atoms/autolink-header";
import { AnchorOrLink } from "../atoms/anchor-or-link";

export const headingStyle = css`
  font-feature-settings: "palt";
  font-weight: 200;
  font-family: "Hiragino Sans", "Noto Sans CJK JP", "Yu Gothic", sans-serif;
`;

export const ArticleElements: MDXProviderComponentsProp = {
  a: (props: JSX.IntrinsicElements["a"]) => {
    return props.className?.includes(`autolink-headers`) ? (
      <HeaderAutoLink {...props} />
    ) : (
      <AnchorOrLink to={props.href!} {...props} />
    );
  },
};
