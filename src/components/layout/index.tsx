import React from "react";
import { Helmet } from "react-helmet";
import { css, Global } from "@emotion/core";
import { TOC } from "../../libs/toc";
import { Footer } from "./footer";
import { Breadcrumbs } from "./breadcrumbs";
import { Title } from "./title";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "tailwindcss/dist/base.min.css";
import { SiteHeader } from "./header";
import { TableOfContents } from "../table-of-contents";
import { globalStyles } from "../styles/global";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export type LayoutProps = {
  date?: string;
  title: string;
  toc?: TOC;
  path: string;
};

const media = (size: "sm" | "md" | "lg" | "xl") =>
  `@media (min-width: ${{ sm: 560, md: 768, lg: 960, xl: 1024 }[size]}px)`;

export const Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
  toc,
}) => (
  <div className={className + " min-h-screen text-gray-400 bg-gray-900"}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Global styles={globalStyles} />
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
        <Title>{title}</Title>
        {children}
      </main>
    </div>
    <Footer />
  </div>
);
