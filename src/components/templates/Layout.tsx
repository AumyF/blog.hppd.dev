import React from "react"
import { Sidebar } from "../organisms/Sidebar"
import { Helmet } from "react-helmet"
import { Main } from "./Main"
import "sanitize.css"
import { css, Global } from "@emotion/core"
import s from "../../images/dark.svg"
import { styleValues } from "../../styles/styleValues"
import { PostDate } from "../../libs/date"

export type LayoutProps = {
  date?: PostDate
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ title, children, date }) => (
  <div
    id="Layout"
    css={css`
      font-size: 20px;
      min-height: 100vh;
      background-image: url(${s});
      background-attachment: fixed;
      background-size: cover;
    `}
  >
    <Global
      styles={css`
        html {
          background-color: #000;
          color: ${styleValues.global.text};
          scrollbar-color: ${styleValues.global.scrollbar};
        }
        body {
        }
        a {
          color: ${styleValues.global.primaryAccent};
        }
      `}
    />
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Sidebar />
    <Main title={title} date={date}>
      {children}
    </Main>
  </div>
)
