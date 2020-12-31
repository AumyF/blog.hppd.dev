import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  useBreakpoint,
  useDisclosure,
} from "@chakra-ui/react";
import { faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { ChakraIcon } from "../atoms/chakra-icon";
import { TableOfContents, TOC } from "../table-of-contents";

type MobileTOCProps = { toc: TOC };
type ViewProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
} & MobileTOCProps;

const MobileTOCView: React.FC<ViewProps> = ({
  isOpen,
  onClose,
  onOpen,
  toc,
}) => (
  <>
    <Button
      onClick={onOpen}
      pos="sticky"
      bottom="0"
      rounded="0"
      zIndex="10"
      w="full"
      bg="gray.800"
      borderTopWidth="1px"
      borderColor="gray.600"
      _hover={{ bg: "gray.700" }}
      _active={{ bg: "gray.600" }}
      h="12"
    >
      <ChakraIcon mr="2" icon={faList} />
      目次
    </Button>
    <Drawer placement="bottom" {...{ isOpen, onClose }}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p="4">
            <TableOfContents toc={toc} onItemClick={onClose} />
          </DrawerBody>
          <DrawerFooter>
            <Button
              onClick={onClose}
              width="full"
              borderColor="teal.400"
              color="teal.400"
              borderWidth="2px"
              bg="transparent"
              _hover={{ bg: "teal.400", color: "gray.800" }}
            >
              <ChakraIcon mr="2" icon={faTimes} />
              閉じる
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </>
);

export const MobileTOC: React.FC<MobileTOCProps> = ({ toc }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  if (!["base", "sm"].includes(useBreakpoint() ?? "")) return null;
  if (toc == null) return null;

  return <MobileTOCView {...{ isOpen, onClose, onOpen, toc }} />;
};
