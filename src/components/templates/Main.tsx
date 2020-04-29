import React from "react"
import { css } from "@emotion/core"
import MainHeader from "../organisms/ContentHeader"
import { styleValues } from "../../styles/styleValues"
import { PostDate } from "../../libs/date"

export type MainProps = { title: string; date?: PostDate }

export const Main: React.FC<MainProps> = ({ children, title, date }) => (
  <div
    css={css`
      margin: 0;
      margin-left: 200px;
      margin-right: 20px;
      background-color: #ddd6;
      border-radius: ${styleValues.main.borderRadius};
      overflow: hidden;
    `}
  >
    <MainHeader title={title} date={date} />
    <main
      id="main"
      css={css`
        padding: 20px;
        background-color: ${styleValues.main.background};
      `}
    >
      {children}
    </main>
  </div>
)
