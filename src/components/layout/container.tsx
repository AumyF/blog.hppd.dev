import { ChakraComponent, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const BodyContainer: ChakraComponent<
  "div",
  {
    children: ReactNode;
  }
> = ({ children }) => (
  <Container maxW="120ch">
    <Flex direction="row-reverse" justifyContent="space-around" gridGap="1rem">
      {children}
    </Flex>
  </Container>
);
