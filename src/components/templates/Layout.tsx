import React from "react";
import { Sidebar } from "../Sidebar";
import { Helmet } from "react-helmet";
import { Main } from "./Main";
import "sanitize.css";
import { css, Global } from "@emotion/core";
import s from "../../images/dark.svg";
import { styleValues } from "../../styles/styleValues";
import { PostDate } from "../../libs/date";
import { TOC } from "../../libs/toc";

export type LayoutProps = {
  date?: PostDate;
  title: string;
  toc?: TOC;
};

export const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  date,
  toc,
}) => (
  <div
    id="Layout"
    css={css`
      display: grid;
      grid-template-columns: ${styleValues.SideBar.width} 1fr;
      font-size: 20px;
      min-height: 100vh;
      background-image: url(${s});
      background-attachment: fixed;
      background-size: cover;
      cursor: auto;
        text-decoration: none;
      }
    `}
  >
    <Global
      styles={css`
        html {
          background-color: #000;
          color: ${styleValues.global.text};
          scrollbar-color: ${styleValues.global.scrollbar};
        }
        body {
        }
        a {
          color: ${styleValues.global.primaryAccent};
        }
        .autolink-headers {
        }
      `}
    />
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div>
      <Sidebar toc={toc} />
    </div>
    <Main title={title} date={date}>
      {children}
    </Main>
  </div>
);
