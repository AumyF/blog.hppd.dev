import { css } from '@emotion/react';
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
      This website is built with <a href="https://gatsbyjs.org/">Gatsby</a> and
      hosted on{" "}
      <a href="https://firebase.google.com/docs/hosting?hl=ja">
        Firebase Hosting
      </a>
      .
      <br />
      This website uses{" "}
      <a href="https://analytics.google.com">Google Analytics</a>.
    </footer>
  );
};
