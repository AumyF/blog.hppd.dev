import { Box, ChakraComponent, Heading, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const Sidebar: ChakraComponent<"aside", { children: ReactNode }> = ({
  children,
}) => {
  return (
    <Stack
      as="aside"
      display={{ base: "none", md: "flex" }}
      spacing="1rem"
      position="sticky"
      h="min-content"
      top="1rem"
      flexBasis={{ base: "220px", lg: "255px" }}
      flexShrink={0}
      maxH="calc(100vh - 2rem)"
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

export const SidebarCard: ChakraComponent<"div", { scrollable?: boolean }> = ({
  children,
  scrollable,
}) => (
  <Box p="1rem" overflow={scrollable ? "auto" : "visible"} {...cardChakra}>
    {children}
  </Box>
);

export const cardChakra = {
  bg: "purple.990",
  borderWidth: { base: "0px", sm: "1px" },
  borderY: "1px",
  borderColor: "gray.700",
  rounded: { base: "0", sm: "1rem" },
} as const;
