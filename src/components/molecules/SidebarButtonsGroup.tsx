import React from "react"
import { css } from "@emotion/core"
import { SidebarButtonProps, SidebarButton } from "../atoms/SidebarButton"

export type SidebarButtonsGroupProps = {
  buttons: SidebarButtonProps[]
}

export const SidebarButtonsGroup: React.FC<SidebarButtonsGroupProps> = ({
  buttons,
}) => (
  <ul
    css={css`
      margin-left: 10%;
    `}
  >
    {buttons.map(c => (
      <SidebarButton {...c} key={c.children} />
    ))}
  </ul>
)

export default SidebarButtonsGroup
