import { chakra } from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren } from "react";

import { ChakraIcon } from "../../src/components/atoms/chakra-icon";

const ShellPrompt: React.VFC<{ code: string }> = props => (
  <chakra.pre borderWidth="1px" borderColor="gray.700" borderRadius="md" p="4">
    <ChakraIcon icon={faChevronRight} mr="2" />
    <chakra.code _before={{ content: "''" }}>{props.code}</chakra.code>
  </chakra.pre>
);

export default ShellPrompt;
