import { Box } from "@chakra-ui/react";
import React from "react";

export type ColorCheckerProps = {};

export const ColorChecker: React.FC<ColorCheckerProps> = () => (
  <div>
    <Box bg="gray.50">50</Box>
    <Box bg="gray.100">100</Box>
    <Box bg="gray.200">200</Box>
    <Box bg="gray.300">300</Box>
    <Box bg="gray.400">400</Box>
    <Box bg="gray.500">500</Box>
    <Box bg="gray.600">600</Box>
    <Box bg="gray.700">700</Box>
    <Box bg="gray.800">800</Box>
    <Box bg="gray.900">900</Box>
  </div>
);
