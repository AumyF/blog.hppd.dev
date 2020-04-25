import React from "react"
import { css } from "@emotion/core"

export type MainHeaderProps = { title: string }

export const MainHeader: React.FC<MainHeaderProps> = ({ title }) => (
  <header
    css={css`
      padding-left: 20px;
      color: #1a1a1a;
    `}
  >
    <h1>{title}</h1>
  </header>
)

export default MainHeader
