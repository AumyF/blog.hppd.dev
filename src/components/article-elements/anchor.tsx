import React from "react";
import { HeaderAutoLink } from "../atoms/autolink-header";
import { Link } from "gatsby";

export const Anchor = (props: JSX.IntrinsicElements["a"]) => {
  return props.className?.includes(`autolink-headers`) ? (
    <HeaderAutoLink {...props} />
  ) : (
    <Link to={props.href!} {...(props as any)} />
  );
};
