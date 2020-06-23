import { ThemeContainer } from "../../styles/theme";
import { useContext } from "react";
import React from "react";
import { css } from "@emotion/core";
import * as LocalStorage from "../../libs/local-storage";
import { Select } from "../sidebar/typesafe-select";
import RSelect from "react-select";
import { assertsNonNull } from "../../libs/asserts-non-null";

const keys = <T,>(o: T): (keyof T)[] => Object.keys(o) as any;

export const ThemeSwitcher: React.FC = () => {
  const { themeName, toggleTheme } = ThemeContainer.useContainer();
  return <button onClick={toggleTheme}>{themeName}</button>;
};

export const _ThemeSwitcher: React.FCX = () => {
  const { toggleTheme, setTheme, theme } = ThemeContainer.useContainer();
  return (
    <RSelect
      styles={{
        container: provided => ({ ...provided, width: "200px" }),
        option: (provided, { value }) => {
          const { background, foreground } = {
            background: "var(--global-background)",
            foreground: "var(--global-foreground)",
          };
          return {
            ...provided,
            backgroundColor: background,
            color: foreground,
          };
        },
        menu: provided => ({
          ...provided,
          backgroundColor: `var(--global-background)`,
          border: `2px solid var(--global-border)`,
        }),
      }}
      defaultValue={{
        value: theme,
        label: theme,
      }}
      onChange={v => setTheme(v)}
      options={[
        {
          label: "dark",
          value: "dark",
        },
        {
          label: "light",
          value: "light",
        },
      ]}
    />
  );
};
