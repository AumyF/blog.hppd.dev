import { ThemeContext, themes } from "../../styles/theme";
import { useContext } from "react";
import React from "react";
import { css } from "@emotion/core";
import * as LocalStorage from "../../libs/local-storage";
import { Select } from "../sidebar/typesafe-select";
import RSelect from "react-select";
import { assertsNonNull } from "../../libs/asserts-non-null";

const keys = <T,>(o: T): (keyof T)[] => Object.keys(o) as any;

export const ThemeSwitcher: React.FCX = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  const t = (LocalStorage.get("theme") as keyof typeof themes) ?? "cyan";
  return (
    <RSelect
      styles={{
        container: provided => ({ ...provided, width: "200px" }),
        option: (provided, { value }) => {
          const { background, foreground } = themes[
            value as keyof typeof themes
          ];
          return {
            ...provided,
            backgroundColor: background,
            color: foreground,
          };
        },
        menu: provided => ({
          ...provided,
          backgroundColor: theme.postLink.bg,
          border: `2px solid ${theme.border}`,
        }),
      }}
      defaultValue={{
        value: t,
        label: t,
      }}
      onChange={e => changeTheme(assertsNonNull([e].flat()[0]?.value))}
      options={keys(themes).map(key => ({ value: key, label: key }))}
    />
  );
};
