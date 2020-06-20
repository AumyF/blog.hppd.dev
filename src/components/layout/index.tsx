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
import { ThemeContext, styled } from "../../styles/theme";

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
  const { theme } = useContext(ThemeContext);
  return (
    <div
      css={css`
        font-size: 18px;
        min-height: 100vh;
        background-color: ${theme.background};
        color: ${theme.foreground};
        cursor: auto;
        text-decoration: none;
      `}
      className={className}
    >
      <Global
        styles={css`
          * {
            transition: 200ms background-color ease;
          }
          html {
            background-color: #000;
            color: ${theme.foreground};
            scrollbar-color: ${theme.background};
            overflow-y: scroll;
            ${Variables}
          }
          body {
          }
          a {
            color: ${theme.primary};
            text-decoration: underline dotted ${theme.foreground};
            text-decoration-thickness: 2px;
            &:hover {
              text-decoration-style: solid;
            }
          }
          ${prismStyles}
        `}
      />
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
