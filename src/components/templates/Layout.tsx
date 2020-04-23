import React from "react"
import { Sidebar } from "../organisms/Sidebar"
import { Helmet } from "react-helmet"
import { Main } from "./Main"
import "sanitize.css"
import { css, Global } from "@emotion/core"
import { scheme } from "../../styles/colorScheme"

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
    <Global
      styles={css`
        html {
          background-color: ${scheme.background};
          color: ${scheme.text};
        }
        a {
          color: ${scheme.primaryAccent};
        }
      `}
    />
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
