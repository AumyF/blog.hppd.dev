import { css } from "@emotion/core";
import tw from "twin.macro";

export const invisibleAnchor = css(
  tw`no-underline hover:underline hover:underline-2`
);
export const growingUnderlineAnchor = css(
  tw`underline underline-1 hover:underline-2`
);
