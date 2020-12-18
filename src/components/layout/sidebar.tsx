import { Box, ChakraComponent, css, Heading, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const Sidebar: ChakraComponent<"aside", { children: ReactNode }> = ({
  children,
}) => {
  return (
    <Stack
      as="aside"
      spacing="1rem"
      flexShrink="unset"
      position="sticky"
      h="min-content"
      top="1rem"
      css={[
        css`
          flex-basis: 192px;
        `,
      ]}
    >
      {children}
    </Stack>
  );
};

export const SidebarCardTitle: ChakraComponent<"h4", { children: string }> = ({
  children: children,
}) => (
  <Heading
    as="h4"
    fontSize="1rem"
    borderBottom="1px"
    borderColor="gray.400"
    textAlign="center"
    pb=".5rem"
    px="1rem"
    mb=".5rem"
  >
    {children}
  </Heading>
);

export const SidebarCard: ChakraComponent<"div", {}> = props => (
  <Box p="1rem" {...cardChakra}>
    {props.children}
  </Box>
);

export const cardChakra = {
  bg: "white",
  rounded: "1rem",
  css: css`
    box-shadow: 0 2px 5px hsla(260, 60%, 50%, 0.1);
  `,
} as const;
