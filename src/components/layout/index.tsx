import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Helmet } from "react-helmet";

import { globalStyles } from "../styles/global";
import { Breadcrumbs } from "./breadcrumbs";
import { Footer } from "./footer";
import { SiteHeader } from "./header";
config.autoAddCss = false;

export type LayoutProps = {
  TitleComponent?: React.ComponentType<{ title: string }>;
  path: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, path }) => (
  <Box bg="gray.100" minH="100vh">
    <Helmet htmlAttributes={{ lang: "ja" }} />
    <Global styles={globalStyles} />

    <SiteHeader />
    <Breadcrumbs date={path?.split("/")} path={path} />
    {children}
    <Footer />
  </Box>
);
