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
      list-style: none;
    `}
  >
    {buttons.map(c => (
      <SidebarButton {...c} />
    ))}
  </ul>
)

export default SidebarButtonsGroup
