import React from "react";
import { Helmet } from "react-helmet";
import { Global } from "@emotion/core";
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
  date?: string;
  title: string;
  path: string;
  SidebarComponent?: () => React.ReactNode;
};

export const Layout: React.FCX<LayoutProps> = ({
  title,
  children,
  path,
  className,
  SidebarComponent = null,
}) => (
  <div className={className + " min-h-screen text-gray-400 bg-gray-900"}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Global styles={globalStyles} />
    <SiteHeader />
    <Breadcrumbs className="p-4" date={path?.split("/")} path={path} />
    <div className="container mx-auto flex gap-2">
      {SidebarComponent?.()}
      <main className="leading-relaxed p-4 flex-grow min-w-0">
        <Title>{title}</Title>
        {children}
      </main>
    </div>
    <Footer />
  </div>
);
