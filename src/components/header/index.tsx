import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles/mediaQueries";
import { styleValues } from "../../styles/styleValues";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";
import { assertsNonNull } from "../../libs/asserts-non-null";
import { ThemeSwitcher } from "../theme-switcher";

export type HeaderProps = { title: string };

const minmax = (...[x, n, v]: number[]) => (v < n ? n : v > x ? x : v);

export const Plain: React.FCX<HeaderProps> = ({ title, className }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [{ x, fontSize, backgroundColor }, setX] = useSpring(() => ({
    fontSize: `2em`,
    backgroundColor: `rgba(30, 30, 33, 1)`,
    x: 0,
  }));
  const bind = useScroll(
    ({ xy: [, y] }) => {
      const windowWidth = window.innerWidth,
        scrollPercentage = minmax(
          0.5,
          0,
          (window.scrollY * 2) / window.innerHeight
        ),
        xScroll = scrollPercentage * windowWidth * -1,
        h1Width = assertsNonNull(ref.current?.clientWidth);

      setX({
        x: xScroll + h1Width * scrollPercentage * 1.2,
        fontSize: `${2 - scrollPercentage}em`,
        backgroundColor: `rgba(30, 30, 33, ${scrollPercentage * 2})`,
      });
    },
    { domTarget: window }
  );

  useEffect(() => {
    bind();
  }, [bind]);
  return (
    <animated.header style={{ backgroundColor }} className={className}>
      <animated.h1 ref={ref} style={{ x, fontSize }}>
        {title}
      </animated.h1>
    </animated.header>
  );
};

export const Header = styled(Plain)`
  position: sticky;
  top: 0rem;
  z-index: 10;
  padding: 0 2rem;
  text-align: center;
  & > h1 {
    display: inline-block;
    background-color: ${styleValues.main.background};
    font-size: 7vw;
    ${mq.tab} {
      font-size: 2em;
    }
    margin: 0;
  }
`;
