import { chakra, Container, Link, useColorModeValue } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { useSite } from "../../hooks/use-site";
import { assertsNonNull } from "../../utils/asserts-non-null";
import { ChakraIcon } from "../atoms/chakra-icon";
import { Hyper } from "../atoms/Hyper";
import { invisibleAnchor } from "../styles/styles";

export type BreadcrumbsProps = {
  date?: string[];
  path: string;
};

const Slash = (
  <chakra.span userSelect="none" mx=".25rem" className="select-none mx-1">
    /
  </chakra.span>
);

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ date }) => {
  const [year, month, dayPath] = date ?? [undefined, undefined, undefined];
  const [topLevelDomain, ...restDomainName] = assertsNonNull(
    useSite().siteMetadata?.siteUrl?.split("//").pop()?.split(".").reverse()
  );

  const second = `${restDomainName[0]}.${topLevelDomain}`;

  const bg = useColorModeValue("gray.50", "purple.990");

  return (
    <chakra.nav py=".25rem" bg={bg}>
      <Container
        maxW="120ch"
        px="1rem"
        css={css`
          a {
            ${invisibleAnchor}
          }
        `}
      >
        <Hyper to={`https://${restDomainName[1]}.${second}`}>
          {restDomainName[1]}
        </Hyper>
        .<Link href={`https://` + second}>{second}</Link>
        {year && (
          <>
            {Slash}
            <Hyper to={`/${year}/`}>{year}</Hyper>
          </>
        )}
        {month && (
          <>
            {Slash}
            <Hyper to={`/${year}/${month}/`}>{month}</Hyper>
          </>
        )}
        {dayPath && (
          <>
            {Slash}
            <Hyper to={`/${year}/${month}/${dayPath}/`}>{dayPath}</Hyper>
          </>
        )}
        <ChakraIcon ml=".25rem" icon={faChevronRight} />
      </Container>
    </chakra.nav>
  );
};
