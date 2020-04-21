import React from "react"
import { css } from "@emotion/core"

export type MainProps = {}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main
    id="main"
    css={css`
      margin-left: 200px;
    `}
  >
    {children}
  </main>
)
