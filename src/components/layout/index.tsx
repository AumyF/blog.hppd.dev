import React from "react";
import { Helmet } from "react-helmet";
import { Main } from "../content";
import "sanitize.css";
import { css } from "@emotion/core";
import { TOC } from "../../libs/toc";
import { mq } from "../../styles/mediaQueries";
import { Footer } from "../content/footer";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
  path: string;
};

export const Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
}) => {
  return (
    <div
      css={css`
        color: var(--foreground);
        background-color: var(--background);
        font-family: "Helvetica Neue", "Hiragino Kaku Gothic ProN",
          "Noto Sans CJK JP", "Meiryo", sans-serif;
        min-height: 100vh;
        cursor: auto;
        text-decoration: none;
        font-size: 16px;
        ${mq.tab} {
          font-size: 18px;
        }
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
