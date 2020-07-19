import React from "react";
import { GatsbyBrowser } from "gatsby";
import { ThemeStore } from "../../styles/theme";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <ThemeStore>
    <main className="hey">{element}</main>
  </ThemeStore>
);
