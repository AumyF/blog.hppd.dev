import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";

import { AnchorOrLink } from "../atoms/anchor-or-link";
import { invisibleAnchor } from "../styles/styles";
// import svg from "../../../static/ftrf-logo.svg";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ className }) => {
  return (
    <Box
      as="header"
      bg="white"
      textAlign="center"
      py=".5rem"
      className={clsx(
        className,
        "text-text bg-white leading-tight text-center"
      )}
    >
      <Container maxW="120ch">
        <Flex
          direction="row"
          alignItems="center"
          className="flex container mx-auto px-4 items-center gap-2 justify-end"
        >
          <Heading as="h1" className="text-3xl font-bold pr-2 mr-auto">
            <Link to="/" className="text-current no-underline">
              {/* <img src={svg} alt="FortunateRicefield" /> */}
              Happy Paddy
            </Link>
          </Heading>
          <Spacer />
          <HStack divider={<Divider orientation="vertical" />}>
            <nav>
              <Link css={[navigation, invisibleAnchor]} to="/about">
                About
              </Link>
            </nav>
            <nav>
              <Link css={[navigation, invisibleAnchor]} to="/tags">
                Tags
              </Link>
            </nav>
            {/* <nav className="py-2">
              <Icon to="https://twitter.com/MominisJ" icon={faTwitter} />
              <Icon to="https://github.com/AumyF" icon={faGithub} />
            </nav> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

const navigation = css``;

type HeaderIconProps = { icon: IconProp; to: string };

const Icon: React.FCX<HeaderIconProps> = ({ icon, to }) => (
  <AnchorOrLink
    {...{ to, alt: "icon" }}
    className="transition-colors text-3xl mx-1 text-text hover:text-fuchsia-black"
  >
    <FontAwesomeIcon {...{ icon }} />
  </AnchorOrLink>
);
