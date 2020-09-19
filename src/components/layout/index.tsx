import React from "react";
import { Helmet } from "react-helmet";
import { css, Global } from "@emotion/core";
import { Footer } from "./footer";
import { Breadcrumbs } from "./breadcrumbs";
import { Title } from "./title";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "tailwindcss/dist/base.min.css";
import { SiteHeader } from "./header";
import { globalStyles } from "../styles/global";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export type LayoutProps = {
  title: string;
  path: string;
  SidebarComponent?: () => React.ReactNode;
};

const media = (size: "sm" | "md" | "lg" | "xl") =>
  `@media (min-width: ${{ sm: 560, md: 768, lg: 960, xl: 1024 }[size]}px)`;

export const Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
  SidebarComponent = null,
}) => (
  <div className={className + " min-h-screen text-gray-800 bg-gray-200"}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Global styles={globalStyles} />
    <SiteHeader />
    <Breadcrumbs className="mb-4 pb-1" date={path?.split("/")} path={path} />
    <div className="container mx-auto flex gap-2">
      {SidebarComponent && (
        <div
          className="shadow-lg rounded-md flex-shrink-0 hidden md:block sticky h-min-content top-0 px-4 bg-gray-100 py-5"
          css={css`
            flex-basis: 192px;
            ${media("lg")} {
              flex-basis: 255px;
            }
          `}
        >
          {SidebarComponent()}
        </div>
      )}

      <main className="leading-relaxed p-8 rounded-md flex-grow min-w-0 bg-gray-100 shadow-lg">
        <Title>{title}</Title>
        {children}
      </main>
    </div>
    <Footer />
  </div>
);
