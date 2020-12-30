import { ChakraComponent, Container, Heading, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";

export const TitleContainer: React.FC<{
  children?: ReactNode;
}> = ({ children }) => (
  <Container maxW="120ch" my="2rem" px="1rem">
    <VStack alignItems="center" mx="auto">
      {children}
    </VStack>
  </Container>
);

export const TitleName: ChakraComponent<"h1", { children: string }> = ({
  children,
}) => (
  <Heading
    as="h1"
    textAlign="center"
    css={css`
      font-feature-settings: "palt";
    `}
  >
    {children}
  </Heading>
);
