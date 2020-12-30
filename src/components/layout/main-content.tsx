import { Box, ChakraComponent } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import { cardChakra } from "./sidebar";

export const MainContent: ChakraComponent<"main", { children: ReactNode }> = ({
  children,
}) => (
  <Box as="main" p="2rem" minW="0" flexGrow={1} flexShrink={1} {...cardChakra}>
    {children}
  </Box>
);
