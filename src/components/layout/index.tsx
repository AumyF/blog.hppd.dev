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
import { Header } from "../header";
import styled from "@emotion/styled";
import { tap } from "lodash";

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
};

const Plain: React.FCX<LayoutProps> = ({
  title,
  children,
  date,
  toc,
  className,
}) => (
  <div className={className}>
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
    <Header date={date} title={title} />
    <Main title={title} date={date} toc={toc}>
      {children}
    </Main>
  </div>
);

const baseStyle = css`
  font-size: 18px;
  min-height: 100vh;
  background-color: ${styleValues.main.background};
  cursor: auto;
  text-decoration: none;
`;

export const Layout = styled(Plain)`
  ${baseStyle};
`;
