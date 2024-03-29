import {
  Box,
  ChakraComponent,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { Hyper } from "../atoms/Hyper";

export type TOC = Readonly<{ items?: TOCItems }>;

export type TOCItems = {
  items?: TOCItems;
  title: string;
  url: string;
}[];

const TOCItem: ChakraComponent<
  "ul",
  { items: TOCItems; onItemClick?: () => void }
> = ({ className, items, ml = 0, onItemClick }) => {
  const textColor = useColorModeValue("gray.500", "gray.400");
  const hoverTextColor = useColorModeValue("gray.700", "gray.200");

  return (
    <UnorderedList
      spacing=".25rem"
      ml={ml}
      listStyleType="none"
      className={className}
    >
      {items.map(items => (
        <ListItem key={items.title}>
          <Hyper
            d="block"
            px="1"
            my="1"
            transitionDuration="50ms"
            _hover={{
              color: hoverTextColor,
            }}
            color={textColor}
            to={items.url}
            onClick={onItemClick}
          >
            {items.title}
          </Hyper>
          {items.items ? (
            <TOCItem ml="1rem" items={items.items} onItemClick={onItemClick} />
          ) : null}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export type TableOfContentsProps = {
  onItemClick?: () => void;
  toc: TOC;
};

export const TableOfContents: React.VFC<TableOfContentsProps> = ({
  onItemClick,
  toc: { items = null },
}) =>
  items && (
    <Box pb="1rem">
      <TOCItem items={items} onItemClick={onItemClick} />
    </Box>
  );
