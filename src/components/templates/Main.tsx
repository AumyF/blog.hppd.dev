import React from "react"
import { css } from "@emotion/core"
import { scheme } from "../../styles/colorScheme"
import MainHeader from "../organisms/ContentHeader"
import { styleValues } from "../../styles/styleValues"

export type MainProps = { title: string }

export const Main: React.FC<MainProps> = ({ children, title }) => (
  <div
    css={css`
      margin: 0;
      margin-left: 200px;
      background-color: #ddd6;
      border-radius: ${styleValues.main.borderRadius};
      border-top-right-radius: 0;
      overflow: hidden;
    `}
  >
    <MainHeader title={title} />
    <main
      id="main"
      css={css`
        padding: 20px;
        background-color: ${scheme.background};
        /*border-top-left-radius: ${styleValues.main.borderRadius};
        border-top-right-radius: ${styleValues.main.borderRadius};*/
      `}
    >
      {children}
    </main>
  </div>
)
