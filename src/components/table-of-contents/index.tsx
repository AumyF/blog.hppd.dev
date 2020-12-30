import {
  Box,
  ChakraComponent,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

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
        <Link
          className="block px-1 my-1 no-underline hover:bg-border text-weak"
          to={items.url}
        >
          {items.title}
        </Link>
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
      <TOCItem className="pt-2" items={items} />
    </Box>
  );
