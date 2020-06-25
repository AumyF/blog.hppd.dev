import React from "react";
import { css } from "@emotion/core";
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
      Built with <a href="https://gatsbyjs.org/">Gatsby</a>, hosted on{" "}
      <a href="https://netlify.com">Netlify</a>.
      <br />
      Build date: {buildTime}
    </footer>
  );
};
