import { ThemeContext, themes } from "../../styles/theme";
import { useContext } from "react";
import React from "react";
import { css } from "@emotion/core";
import * as LocalStorage from "../../libs/local-storage";

const keys = <T,>(o: T): (keyof T)[] => Object.keys(o) as any;

export const ThemeSwitcher: React.FCX = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <select
      name=""
      id=""
      defaultValue={LocalStorage.get("theme") ?? "cyan"}
      onChange={({ currentTarget: { value } }) => {
        changeTheme(value as any);
      }}
    >
      {keys(themes).map(k => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
};
