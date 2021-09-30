import { Box, ChakraComponent } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import { useCardStyle } from "./sidebar";

export const MainContent: ChakraComponent<"main", { children: ReactNode }> = ({
  children,
}) => {
  const cardStyle = useCardStyle();
  return (
    <Box as="main" minW="0" flexGrow={1} flexShrink={1} {...cardStyle}>
      {children}
    </Box>
  );
};
