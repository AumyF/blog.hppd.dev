import { ChakraComponent, Container, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const BodyContainer: ChakraComponent<
  "div",
  {
    children: ReactNode;
  }
> = ({ children }) => (
  <Container maxW="120ch">
    <Stack direction="row-reverse" spacing="1rem">
      {children}
    </Stack>
  </Container>
);
