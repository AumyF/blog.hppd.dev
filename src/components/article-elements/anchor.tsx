import React from "react";
import { HeaderAutoLink } from "../atoms/autolink-header";
import { SwipingAnchor } from "../atoms/swiping-anchor";

export const Anchor = (props: JSX.IntrinsicElements["a"]) => {
  return props.className?.includes(`autolink-headers`) ? (
    <HeaderAutoLink>{props.children}</HeaderAutoLink>
  ) : (
    <SwipingAnchor to={props.href!} {...props} />
  );
};
