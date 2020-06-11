import React from "react";
import { Provider } from "react-redux";
import store from "./src/state/store";
import "prismjs/themes/prism-tomorrow.css";

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
