import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { Box, useColorModeValue } from "@chakra-ui/react";
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

export const Layout: React.FC<LayoutProps> = ({ children, path }) => {
  const bg = useColorModeValue("gray.50", "purple.990");
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <Box {...{ bg, color }} minH="100vh">
      <Helmet htmlAttributes={{ lang: "ja" }} />
      <Global styles={globalStyles} />

      <Breadcrumbs date={path?.split("/")} path={path} />
      <SiteHeader />
      {children}
      <Footer />
    </Box>
  );
};
