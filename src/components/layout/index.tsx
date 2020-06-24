import React, { useState, useContext } from "react";
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
import { Header } from "../header";
import { tap } from "lodash";
import { Footer } from "../content/footer";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { prismStyles } from "./prism-styles";

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
  path: string;
};

export const Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  date,
  toc,
  path,
  className,
}) => {
  return (
    <div
      css={css`
        color: var(--foreground);
        background-color: var(--background);
        font-family: Helvetica, "Hiragino Sans", "Noto Sans CJK JP", "Meiryo",
          sans-serif;
        font-size: 18px;
        min-height: 100vh;
        cursor: auto;
        text-decoration: none;
      `}
      className={className}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main title={title} path={path}>
        {children}
      </Main>
      <Footer />
    </div>
  );
};
