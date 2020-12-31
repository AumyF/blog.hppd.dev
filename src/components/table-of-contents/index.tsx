import {
  Box,
  ChakraComponent,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

import { Hyper } from "../atoms/Hyper";

export type TOC = Readonly<{ items?: TOCItems }>;

export type TOCItems = {
  items?: TOCItems;
  title: string;
  url: string;
}[];

const TOCItem: ChakraComponent<"ul", { items: TOCItems }> = ({
  className,
  items,
  ml = 0,
}) => (
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
          _hover={{ color: "green.300" }}
          color="gray.400"
          to={items.url}
        >
          {items.title}
        </Hyper>
        {items.items ? <TOCItem ml="1rem" items={items.items} /> : null}
      </ListItem>
    ))}
  </UnorderedList>
);

export type TableOfContentsProps = {
  toc: TOC;
};

export const TableOfContents: React.VFC<TableOfContentsProps> = ({
  toc: { items = null },
}) =>
  items && (
    <Box pb="1rem">
      <TOCItem items={items} />
    </Box>
  );
