import React from "react";
import { Helmet } from "react-helmet";
import { Main } from "../content";
import { css } from "@emotion/core";
import { TOC } from "../../libs/toc";
import { mq } from "../../styles/mediaQueries";
import { Footer } from "../content/footer";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { SiteHeader } from "../header";
import { TableOfContents } from "../table-of-contents";
import { Breadcrumbs } from "../content/breadcrumbs";
import { Header } from "../content/header";

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
  path: string;
};

const media = (size: "md" | "lg" | "xl") =>
  `@media (min-width: ${{ md: 560, lg: 960, xl: 1024 }[size]})`;

export const Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
  toc,
}) => {
  return (
    <div
      css={css`
        color: var(--foreground);
        background-color: var(--background);
        font-family: "Helvetica Neue", "Hiragino Sans", "Noto Sans CJK JP",
          "Meiryo", sans-serif;
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
      <SiteHeader />
      <Breadcrumbs className="m-4" date={path?.split("/")} path={path} />
      <div className="container mx-auto flex gap-2">
        {toc && (
          <TableOfContents
            className="flex-shrink-0 hidden md:block sticky h-min-content top-0"
            css={css`
              flex-basis: 192px;
              @media (min-width: 1024px) {
                flex-basis: 255px;
              }
            `}
            toc={toc}
          />
        )}
        <main className="leading-relaxed p-4 flex-grow">
          <Header>{title}</Header>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
