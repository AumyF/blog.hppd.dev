import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import {
  Box,
  ChakraComponent,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import React from "react";
import { Helmet } from "react-helmet";

import { globalStyles } from "../styles/global";
import { Breadcrumbs } from "./breadcrumbs";
import { Footer } from "./footer";
import { SiteHeader } from "./header";
import { Title } from "./title";
config.autoAddCss = false;

export type LayoutProps = {
  SidebarComponent?: React.ComponentProps<typeof SidebarCard>[];
  TitleComponent?: React.ComponentType<{ title: string }>;
  path: string;
  title: string;
};

export const Layout: React.FCX<LayoutProps> = ({
  children,
  className,
  path,
  SidebarComponent: SidebarComponents = null,
  title,
  TitleComponent,
}) => (
  <Box
    bg="gray.100"
    minH="100vh"
    className={clsx(className, "min-h-screen text-text bg-background")}
  >
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{title} - Happy Paddy</title>
    </Helmet>
    <Global styles={globalStyles} />
    <SiteHeader />
    <Breadcrumbs date={path?.split("/")} path={path} />
    <div className="container mx-auto my-8 px-4">
      <Title>{title}</Title>
      {TitleComponent && <TitleComponent {...{ title }} />}
    </div>
    <Container maxW="120ch">
      <div className="container mx-auto flex gap-4 px-0 sm:px-4 transition-all duration-100">
        <Stack direction="row-reverse" spacing="1rem">
          {/* TODO: 別コンポーネントに切り出し */}
          {SidebarComponents && (
            <Stack
              spacing="1rem"
              flexShrink="unset"
              position="sticky"
              h="min-content"
              className="flex-shrink-0 hidden md:block sticky h-min-content"
              top="1rem"
              css={[
                css`
                  flex-basis: 192px;
                `,
              ]}
            >
              {SidebarComponents.map(props => (
                <SidebarCard {...props} key={props.title} />
              ))}
            </Stack>
          )}

          <Box
            as="main"
            p="2rem"
            className="leading-relaxed p-8 flex-grow min-w-0 "
            {...cardChakra}
          >
            {children}
          </Box>
        </Stack>
      </div>
    </Container>
    <Footer />
  </Box>
);

type SidebarCardProps = { readonly title: string };

const SidebarCard: ChakraComponent<"div", SidebarCardProps> = props => (
  <Box p="1rem" {...cardChakra}>
    <Heading
      as="h4"
      fontSize="1rem"
      borderBottom="1px"
      borderColor="gray.400"
      textAlign="center"
      pb=".5rem"
      px="1rem"
      mb=".5rem"
      className="text-center pb-2 px-4 border-b border-border"
    >
      {props.title}
    </Heading>
    {props.children}
  </Box>
);

const cardChakra = {
  bg: "white",
  rounded: "1rem",
  css: css`
    box-shadow: 0 2px 5px hsla(260, 60%, 50%, 0.1);
  `,
} as const;
