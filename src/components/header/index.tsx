import React from "react";
import { css } from "@emotion/core";

export type HeaderProps = { date?: string; title: string };

export const Header: React.FC<HeaderProps> = ({ date, title }) => (
  <header
    css={css`
      padding: 0 2rem;

      h1 {
        text-align: center;
        font-size: 2.5em;
        margin: 0;
      }
      div {
        text-align: center;
      }
    `}
  >
    <h1>{title}</h1>
    <div>{date}</div>
  </header>
);

export default Header;
