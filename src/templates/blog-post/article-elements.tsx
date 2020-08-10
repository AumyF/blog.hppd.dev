import { MDXProviderComponentsProp } from "@mdx-js/react";
import React from "react";
import { css } from "@emotion/core";
import { HeaderAutoLink } from "./autolink-header";
import { AnchorOrLink } from "../../components/atoms/anchor-or-link";

export const ArticleElements: MDXProviderComponentsProp = {
  a: (props: JSX.IntrinsicElements["a"]) => {
    return props.className?.includes(`autolink-headers`) ? (
      <HeaderAutoLink {...props} />
    ) : (
      <AnchorOrLink to={props.href!} {...props} />
    );
  },
};
