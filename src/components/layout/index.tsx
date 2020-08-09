import React from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { TOC } from "../../libs/toc";
import { mq } from "../../styles/mediaQueries";
import { Footer } from "../content/footer";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "tailwindcss/dist/base.min.css";
import { SiteHeader } from "../header";
import { TableOfContents } from "../table-of-contents";
import { Breadcrumbs } from "../content/breadcrumbs";
import { Header } from "../content/header";
import { withTheme } from "../../styles/theme";
import tw from "twin.macro";

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
  path: string;
};

const media = (size: "sm" | "md" | "lg" | "xl") =>
  `@media (min-width: ${{ sm: 560, md: 768, lg: 960, xl: 1024 }[size]}px)`;

const LayoutBase: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
  toc,
}) => (
  <div {...{ className }}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <SiteHeader />
    <Breadcrumbs className="p-4" date={path?.split("/")} path={path} />
    <div className="container mx-auto flex gap-2">
      {toc && (
        <TableOfContents
          className="flex-shrink-0 hidden sm:block sticky h-min-content top-0"
          css={css`
            flex-basis: 192px;
            ${media("xl")} {
              flex-basis: 255px;
            }
          `}
          toc={toc}
        />
      )}
      <main className="leading-relaxed p-4 flex-grow min-w-0">
        <Header>{title}</Header>
        {children}
      </main>
    </div>
    <Footer />
  </div>
);

export const Layout = withTheme(LayoutBase, {
  shared: css`
    ${tw`min-h-screen`};
  `,
  dark: css`
    ${tw`text-gray-400 bg-gray-900`};
  `,
  light: css`
    ${tw`text-gray-900 bg-gray-100`};
  `,
});

export const _Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
  toc,
}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SiteHeader />
      <Breadcrumbs className="m-4" date={path?.split("/")} path={path} />
      <div className="container mx-auto flex gap-2">
        {toc && (
          <TableOfContents
            className="flex-shrink-0 hidden sm:block sticky h-min-content top-0"
            css={css`
              flex-basis: 192px;
              ${media("xl")} {
                flex-basis: 255px;
              }
            `}
            toc={toc}
          />
        )}
        <main className="leading-relaxed p-4 flex-grow min-w-0">
          <Header>{title}</Header>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
