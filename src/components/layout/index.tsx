import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Helmet } from "react-helmet";

import { ColorChecker } from "../color-checker";
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
  <Box bg="purple.990" color="gray.300" minH="100vh">
    <Helmet htmlAttributes={{ lang: "ja" }} />
    <Global styles={globalStyles} />

    <Breadcrumbs date={path?.split("/")} path={path} />
    <SiteHeader />
    {children}
    <Footer />
  </Box>
);
