import React from "react"
import { css } from "@emotion/core"
import scheme from "../../styles/colorScheme"

export type ColorizedProps = { color: keyof typeof scheme }

export const Colorized: (color: keyof typeof scheme) => React.FC = color => ({
  children,
}) => (
  <span
    css={css`
      color: ${scheme[color]};
    `}
  >
    {children}
  </span>
)

export default Colorized

export const Red = Colorized("red"),
  Blue = Colorized("blue")
