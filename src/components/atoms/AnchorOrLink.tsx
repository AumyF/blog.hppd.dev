import { GatsbyLinkProps, Link } from "gatsby";
import React from "react";
/**
 * https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
 */
export const AnchorOrLink: React.FC<GatsbyLinkProps<unknown>> = ({
  to,
  children,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  return internal ? (
    <Link
      to={to}
      {...other}
      ref={undefined} //消すと動かない()
    >
      {children}
    </Link>
  ) : (
    <a href={to} {...other}>
      {children}
    </a>
  );
};
export default AnchorOrLink;
