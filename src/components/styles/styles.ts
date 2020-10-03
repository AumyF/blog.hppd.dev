import { css } from "@emotion/core";
import tw from "twin.macro";

export const invisibleAnchor = css`
  transition: 75ms text-decoration-color ease;
  text-decoration-style: underline;
  text-decoration-color: transparent;
  &:hover {
    text-decoration-color: currentColor;
  }
`;
export const growingUnderlineAnchor = css(
  tw`underline underline-1 hover:underline-2`
);
