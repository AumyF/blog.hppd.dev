import { ThemeStore } from "./src/styles/theme";
import React from "react";

export const wrapRootElement = ({ element }) => (
  <ThemeStore>{element}</ThemeStore>
);
