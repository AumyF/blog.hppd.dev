import { Link } from "@chakra-ui/react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import React, { ComponentProps } from "react";

export type HyperProps = ComponentProps<typeof Link> &
  Pick<GatsbyLinkProps<unknown>, "to">;

export const Hyper: React.FC<HyperProps> = props => (
  <Link {...props} as={GatsbyLink} />
);
