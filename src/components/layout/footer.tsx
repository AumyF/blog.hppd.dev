import { Link } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

import { useSite } from "../../hooks/use-site";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  const { buildTime } = useSite();
  return (
    <footer
      css={css`
        text-align: center;
        padding: 2rem;
      `}
    >
      © 2020 Mominis
      <br />
      Build date: {buildTime}
      <br />
      This website is built with{" "}
      <Link href="https://gatsbyjs.org/">Gatsby</Link> and hosted on{" "}
      <Link href="https://firebase.google.com/docs/hosting?hl=ja">
        Firebase Hosting
      </Link>
      .
      <br />
      This website uses{" "}
      <Link href="https://analytics.google.com">Google Analytics</Link>.
    </footer>
  );
};
