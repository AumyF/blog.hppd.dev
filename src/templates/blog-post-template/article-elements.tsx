import {
  chakra,
  Code,
  ListItem,
  OrderedList,
  Table,
  Td,
  Th,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

import { Hyper } from "../../components/atoms/Hyper";
import { assertsNonNull } from "../../utils/asserts-non-null";
import { HeaderAutoLink } from "./autolink-header";

const ArticleAnchor: React.FC<JSX.IntrinsicElements["a"]> = props =>
  props.className?.includes(`autolink-headers`) ? (
    <HeaderAutoLink {...props} />
  ) : (
    <Hyper to={assertsNonNull(props.href)} {...props} />
  );

export const ArticleElements = {
  a: chakra(ArticleAnchor, { baseStyle: {} }),
  code: Code,
  ul: chakra(UnorderedList, { baseStyle: { mb: ".5rem" } }),
  ol: OrderedList,
  li: ListItem,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
  h1: chakra("h1", {
    baseStyle: {
      fontSize: "2rem",
      borderBottomWidth: "1px",
      borderColor: "gray.600",
      marginY: "1.5rem",
      pb: ".5rem",
    },
  }),
  h2: chakra("h2", {
    baseStyle: { fontSize: "1.75rem", marginY: "1rem" },
  }),
  h3: chakra("h3", { baseStyle: { fontSize: "1.25rem", marginY: "0.625rem" } }),
  p: chakra("p", {}),
  blockquote: chakra("blockquote", {
    baseStyle: {
      borderLeft: "2px",
      borderColor: "gray.500",
      bg: "gray.800",
      pl: "1rem",
      pr: ".5rem",
      my: ".5rem",
      py: ".25rem",
    },
  }),
} as const;
