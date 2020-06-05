import React from "react";
import { css } from "@emotion/core";
import { MainHeader } from "./header";
import { styleValues } from "../../styles/styleValues";
import { PostDate } from "../../libs/date";
import Footer from "./footer";
import { mq } from "../../styles/mediaQueries";

export type MainProps = { title: string; date?: string };

export const Main: React.FC<MainProps> = ({ children, title, date }) => (
  <div
    css={css`
      margin: 0 auto;
      background-color: ${styleValues.main.background};
      max-width: 100%;
    `}
  >
    <main
      id="main"
      css={css`
        background-color: ${styleValues.main.background};
        letter-spacing: 0.09em;
        font-feature-settings: "palt";
        h1 {
          border-bottom: 1px solid ${styleValues.global.border};
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        h2 {
          border-bottom: 1px solid ${styleValues.global.border};
          font-weight: medium;
          font-size: 1.2rem;
          padding-left: 0.25rem;
          padding-right: 0.25rem;
          padding-top: 0.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        hr {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
          border: 1px solid ${styleValues.global.border};
        }
      `}
    >
      {children}
    </main>
    <Footer />
  </div>
);
