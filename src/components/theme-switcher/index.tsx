import { ThemeContext, themes } from "../../styles/theme";
import { useContext } from "react";
import React from "react";
import { css } from "@emotion/core";
import * as LocalStorage from "../../libs/local-storage";
import { Select } from "../sidebar/typesafe-select";

const keys = <T,>(o: T): (keyof T)[] => Object.keys(o) as any;

export const ThemeSwitcher: React.FCX = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <Select
      defaultValue={LocalStorage.get("theme") ?? "cyan"}
      onChangeHandler={changeTheme}
      options={keys(themes)}
    />
  );
};
