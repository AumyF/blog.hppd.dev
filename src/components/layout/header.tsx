import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

import { Hyper } from "../atoms/Hyper";
// import svg from "../../../static/ftrf-logo.svg";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = () => {
  return (
    <Box
      as="header"
      bg="purple.990"
      textAlign="center"
      pb=".5rem"
      mb="2rem"
      borderBottom="1px"
      borderBottomColor="gray.700"
    >
      <Container maxW="120ch">
        <Flex direction={{ base: "column", sm: "row" }} alignItems="center">
          <Heading as="h1">
            <Link to="/">
              {/* <img src={svg} alt="FortunateRicefield" /> */}
              HappyPaddy::Blog
            </Link>
          </Heading>
          <Spacer />
          <HStack divider={<Divider orientation="vertical" />}>
            <nav>
              <Hyper to="/about">About</Hyper>
            </nav>
            <nav>
              <Hyper to="/tags">Tags</Hyper>
            </nav>
            <nav>
              <Hyper to="/rss.xml">RSS</Hyper>
            </nav>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
