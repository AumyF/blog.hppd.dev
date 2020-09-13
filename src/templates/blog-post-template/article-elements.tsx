import { MDXProviderComponentsProp } from "@mdx-js/react";
import React from "react";
import { HeaderAutoLink } from "./autolink-header";
import { AnchorOrLink } from "../../components/atoms/anchor-or-link";
import { assertsNonNull } from "../../utils/asserts-non-null";

const ArticleAnchor: React.FC<JSX.IntrinsicElements["a"]> = props =>
  props.className?.includes(`autolink-headers`) ? (
    <HeaderAutoLink {...props} />
  ) : (
    <AnchorOrLink to={assertsNonNull(props.href)} {...props} />
  );

export const ArticleElements: MDXProviderComponentsProp = {
  a: ArticleAnchor,
};
