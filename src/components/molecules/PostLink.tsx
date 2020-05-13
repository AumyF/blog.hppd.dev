import React, { MouseEventHandler, useState } from "react";
import { css, Interpolation } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Mdx } from "../../../types/graphqlTypes";
import { Post } from "../../libs/post";
import {} from "ts-essentials";
import { styleValues } from "../../styles/styleValues";
import { useSpring, animated } from "react-spring";

export type PostLinkProps = Readonly<{
  path: string;
  title: string;
  css?: Interpolation;
}>;

export const PostLink: React.FC<PostLinkProps> = ({
  path,
  title,
  css: cssProp,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const spring = useSpring({
    transform: hover ? "scale(115%)" : "scale(100%)",
    config: {
      tension: 200,
      friction: 15,
      clamp: false,
    },
  });

  const onMouseEnter: MouseEventHandler = e => setHover(true),
    onMouseLeave: MouseEventHandler = e => setHover(false),
    AnimatedLink = animated(Link);
  return (
    <AnimatedLink
      css={css`
        display: block;
        color: ${styleValues.global.text};
        background-color: ${styleValues.Card.background};
        text-decoration: none;
        padding: 1rem;
        width: 100%;
        box-shadow: 10px 10px 20px #0009;
        ${cssProp}
      `}
      to={path}
      style={spring}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <span
          css={css`
            font-size: 1.5rem;
            text-decoration: none;
          `}
        >
          {title}
        </span>
      </div>
    </AnimatedLink>
  );
};

export default PostLink;

/**
const Styled = styled(Plain)`
  display: block;
  ${ss.boxShadowMedium};
  ${ss.rounded};
  border-top-left-radius: 0;
  ${ss.hidden};
  height: 100%;
  background-color: ${cs.cardBackground};
  transition: 150ms filter ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
  div {
    text-decoration: none;
    flex-wrap: wrap;
    padding: 0.25rem;
    ${ss.transition};
    color: ${cs.border};

    background-color: ${cs.primaryAccent};
    background-size: contain;
    background-attachment: fixed;
    border-left: 1px solid ${cs.secondaryAccent};
    border-left-width: 4px;
    filter: saturate(180%);
    h2 {
      span {
        ${ss.textShadow}
        color: white;
      }
    }
  }
  p {
    text-align: left;
    padding: 0.5rem;
  }
`*/
