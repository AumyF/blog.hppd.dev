import React, { useState } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { Helmet } from "react-helmet";
import { Main } from "../content";
import "sanitize.css";
import { css, Global } from "@emotion/core";
import s from "../../images/dark.svg";
import { styleValues } from "../../styles/styleValues";
import { PostDate } from "../../libs/date";
import { TOC } from "../../libs/toc";
import { mq } from "../../styles/mediaQueries";
import { Variables } from "../../styles/variables";
import Header from "../header";

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
};

export const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  date,
  toc,
}) => {
  return (
    <div id="Layout" css={layoutStyle}>
      <Global
        styles={css`
          html {
            background-color: #000;
            color: var(--global-text);
            scrollbar-color: ${styleValues.global.scrollbar};
            ${Variables}
          }
          body {
          }
          a {
            color: ${styleValues.global.primaryAccent};
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header date={date} title={title} />
      <main
        css={css`
          display: block;
          margin: 0 auto;
          transition: max-width 1000ms cubic-bezier(0.19, 1, 0.22, 1);
          ${mq.small} {
            display: grid;
            grid-template-columns: 1fr 3fr;
            column-gap: 1rem;
            grid-template-areas: "sidebar content";
            max-width: 640px;
            width: calc(100vw - 64px);
          }
          /**128 */
          ${mq.medium} {
            max-width: 768px;
            width: calc(100vw - 128px);
          }
          /**256 */
          ${mq.large} {
            max-width: 1024px;
            width: calc(100vw - 128px);
          }
          /** 256 */
          ${mq.huge} {
            max-width: 1280px;
            width: calc(100vw - 128px);
          }
        `}
      >
        <Sidebar toc={toc} />
        <Main title={title} date={date}>
          {children}
        </Main>
      </main>
    </div>
  );
};

const layoutStyle = css`
  font-size: 18px;
  min-height: 100vh;
  background-color: ${styleValues.main.background};
  background-attachment: fixed;
  background-size: cover;
  cursor: auto;
  text-decoration: none;
  nav div nav {
    display: none;
  }

  ${mq.small} {
    grid-template-areas:
      "header  header"
      "main main";
    nav {
      grid-area: sidebar;
    }
    header {
      grid-area: header;
    }
    main {
      grid-area: main;
    }
    nav div nav {
      display: block;
    }
  }
`;
