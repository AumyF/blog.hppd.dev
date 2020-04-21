import React from "react"
import { Sidebar } from "../organisms/Sidebar"

export type LayoutProps = {
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div id="Layout">
    <Sidebar />
    <h1>{title}</h1>
    <main>{children}</main>
  </div>
)
