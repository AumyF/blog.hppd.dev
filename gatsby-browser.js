//import { wrapRootElement } from "./ssr/wrap-root-element";
import { ThemeStore } from "./src/styles/theme";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/dist/base.min.css";
import "./src/styles/init.css";
import "prismjs/themes/prism-okaidia.css";

export const wrapRootElement = ({ element }) => (
  <ThemeStore>{element}</ThemeStore>
);
