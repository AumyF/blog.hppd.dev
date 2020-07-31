import React from "react";
import { HeaderAutoLink } from "../atoms/autolink-header";
import { SwipingAnchor } from "../atoms/swiping-anchor";
import { Link } from "gatsby";

export const Anchor = (props: JSX.IntrinsicElements["a"]) => {
  return props.className?.includes(`autolink-headers`) ? (
    <HeaderAutoLink>{props.children}</HeaderAutoLink>
  ) : (
      <Link to={props.href!} {...props as any} />
    );
};
