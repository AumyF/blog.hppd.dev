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
      <Sidebar toc={toc} />
      <Main title={title} date={date}>
        {children}
      </Main>
    </div>
  );
};

const layoutStyle = css`
  font-size: 18px;
  min-height: 100vh;
  background-image: url(${s});
  background-attachment: fixed;
  background-size: cover;
  cursor: auto;
  text-decoration: none;
  nav div nav {
    display: none;
  }
  ${mq.medium} {
    display: grid;
    grid-template-columns: ${styleValues.SideBar.width} 1fr;
    nav div nav {
      display: block;
    }
  }
  display: block;
  a {
    color: var(--global-text);
  }
`;
