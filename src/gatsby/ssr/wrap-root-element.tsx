import React from "react";
import { GatsbySSR } from "gatsby";
import { ThemeStore } from "../../styles/theme";

export const wrapRootElement: NonNullable<GatsbySSR["wrapRootElement"]> = ({
  element,
}) => (
  <ThemeStore>
    <main className="afsdfafa">{element}</main>
    {console.log("FUCK")}
  </ThemeStore>
);
