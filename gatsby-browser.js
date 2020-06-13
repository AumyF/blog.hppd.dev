import React from "react";
import { Provider } from "react-redux";
import store from "./src/state/store";
import "prismjs/themes/prism-tomorrow.css";
import { ThemeStore } from "./src/styles/theme";

/**@type import("gatsby").GatsbyBrowser["wrapRootElement"] */
export const wrapRootElement = ({ element }) => {
  return <ThemeStore>{element}</ThemeStore>;
};
