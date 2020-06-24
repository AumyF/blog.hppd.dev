import React from "react";
import { GatsbyBrowser, GatsbySSR } from "gatsby";
import { ThemeContainer, ThemeStore } from "../../styles/theme";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <ThemeStore>
    <main className="hey">{element}</main>
  </ThemeStore>
);
