import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export const Chronology: React.FC<Props> = p => (
  <Box
    {...p}
    as="section"
    pos="relative"
    pl="4rem"
    pb="1rem"
    _before={{
      content: `""`,
      borderLeft: "2px",
      borderColor: "gray.600",
      pos: "absolute",
      height: "100%",
      left: "31px",
    }}
    _first={{
      _before: {
        top: "2rem",
        height: "calc(100% - 2rem)",
      },
    }}
    _last={{
      paddingBottom: "4rem",
      _before: {
        bottom: "2rem",
        height: "calc(100% - 2rem)",
      },
    }}
  />
);

const circleRadius = "8.5px";
const circleDiameter = "17px";

export const ChronologyTime: FC<{ children: ReactNode }> = props => (
  <Box
    as="time"
    d="block"
    pos="relative"
    fontWeight="600"
    fontSize="3xl"
    _before={{
      pos: "absolute",
      bg: "purple.300",
      my: "auto",
      borderColor: "purple.990",
      borderWidth: "2px",
      content: `""`,
      width: circleDiameter,
      height: circleDiameter,
      top: `calc(50% - ${circleRadius})`,
      left: `calc(-2rem - ${circleRadius})`,
      borderRadius: "50%",
    }}
  >
    {props.children}
  </Box>
);

export const ChronologyTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
export const ChronologyNote = styled.div``;
