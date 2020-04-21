import React from "react"
import { Sidebar } from "../organisms/Sidebar"
import { Helmet } from "react-helmet"
import { Main } from "./Main"
import "sanitize.css"
import { css } from "@emotion/core"

export type LayoutProps = {
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div
    id="Layout"
    css={css`
      font-size: 20px;
    `}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Sidebar />
    <Main>
      <h1>{title}</h1>
      {children}
    </Main>
  </div>
)
