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
import { MDXProviderComponentsProp } from "@mdx-js/react";
import React from "react";

import { AnchorOrLink } from "../../components/atoms/anchor-or-link";
import { assertsNonNull } from "../../utils/asserts-non-null";
import { HeaderAutoLink } from "./autolink-header";

const ArticleAnchor: React.FC<JSX.IntrinsicElements["a"]> = props =>
  props.className?.includes(`autolink-headers`) ? (
    <HeaderAutoLink {...props} />
  ) : (
    <AnchorOrLink to={assertsNonNull(props.href)} {...props} />
  );

export const ArticleElements = {
  a: ArticleAnchor,
  code: Code,
  ul: UnorderedList,
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
      marginY: "1rem",
    },
  }),
  h2: chakra("h2", { baseStyle: { fontSize: "1.5rem", marginY: "0.75rem" } }),
  h3: chakra("h3", { baseStyle: { fontSize: "1.25rem", marginY: "0.625rem" } }),
  p: chakra("p", { baseStyle: { mb: ".5rem" } }),
  blockquote: chakra("blockquote", {
    baseStyle: {
      borderLeft: "2px",
      paddingLeft: "1rem",
      my: ".5rem",
    },
  }),
} as const;
