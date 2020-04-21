import React from "react"
import { Sidebar } from "../organisms/Sidebar"
import { Helmet } from "react-helmet"

export type LayoutProps = {
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div id="Layout">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Sidebar />
    <h1>{title}</h1>
    <main>{children}</main>
  </div>
)
