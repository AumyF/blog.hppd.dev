import { useColorModeValue } from "@chakra-ui/react";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

export const useIconColor = (): string =>
  useColorModeValue("gray.500", "gray.400");

export const useWeakTextColor = (): string =>
  useColorModeValue("gray.500", "gray.400");
