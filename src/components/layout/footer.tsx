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
      © 2021 Aumy
      <br />
      Build date: {buildTime}
      <br />
      Built with <Link href="https://gatsbyjs.org/">Gatsby</Link> and hosted on{" "}
      <Link href="https://pages.cloudflare.com">Cloudflare Pages</Link>
      .
      <br />
      This website uses{" "}
      <Link href="https://www.cloudflare.com/web-analytics/">
        Cloudflare Web Analytics
      </Link>
      .
    </footer>
  );
};
