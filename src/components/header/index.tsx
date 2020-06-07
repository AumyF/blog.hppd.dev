import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles/mediaQueries";

export type HeaderProps = { date?: string; title: string };

export const Plain: React.FCX<HeaderProps> = ({ date, title, className }) => (
  <header className={className}>
    <h1>{title}</h1>
    <div>{date}</div>
  </header>
);

export const Header = styled(Plain)`
  padding: 0 2rem;
  & > h1 {
    transition: 100ms font-size ease;
    text-align: center;
    font-size: 7vw;
    ${mq.tab} {
      font-size: 2em;
    }
    margin: 0;
  }
  & > div {
    text-align: center;
  }
`;
