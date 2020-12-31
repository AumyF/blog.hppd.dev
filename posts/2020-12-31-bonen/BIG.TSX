import { Text } from "@chakra-ui/react";
import React from "react";

const Big: React.FC = ({ children }) => (
  <Text fontSize="4em" fontWeight="900">
    {children}
  </Text>
);

export default Big;
