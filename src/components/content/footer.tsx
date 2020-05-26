import React from "react";
import { css } from "@emotion/core";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => (
  <footer
    css={css`
      text-align: center;
      margin-bottom: 2rem;
      margin-top: auto;
      padding: 2rem;
    `}
  >
    © 2020 Mominis
  </footer>
);

export default Footer;
