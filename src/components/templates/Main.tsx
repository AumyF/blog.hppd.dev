import React from "react"
import { css } from "@emotion/core"
import { scheme } from "../../styles/colorScheme"

export type MainProps = {}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main
    id="main"
    css={css`
      margin-left: 200px;
      padding: 20px;
      background-color: ${scheme.background};
    `}
  >
    {children}
  </main>
)
