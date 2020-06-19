import {
  useTheme as EMOTION_USE_THEME,
  ThemeProvider as EMOTION_THEME_PROVIDER,
  ThemeProvider,
} from "emotion-theming";
import { createContext, useContext, useState } from "react";
import { ValueOf } from "ts-essentials";
import EmotionStyled, { CreateStyled } from "@emotion/styled";
import React from "react";
import * as LocalStorage from "../libs/local-storage";

const palettes = {
  vividDark: {
    mono: ["1e1e21", "#404040", "#d0d0d0"],
  },
} as const;

const defaultTheme = {
  primary: "#63b3ed",
  background: "#1e1e21",
  foreground: "#d0d0d0",
  border: palettes.vividDark.mono[1],
  postLink: {
    bg: "#1e1e21",
  },
};

export const themes = {
  cyan: {
    ...defaultTheme,
  },
  mint: {
    ...defaultTheme,
    background: "#002b23",
    primary: "#37e5ee", // #22d7b5
    foreground: "#bed5d0",
    border: "#2a4a43",
    postLink: {
      bg: "#002b23",
    },
  },
  light: {
    primary: "#63b3ed",
    background: "#fafafa",
    foreground: "#595988",
    border: palettes.vividDark.mono[1],
    postLink: {
      bg: "#fafafa",
    },
  },
  note: {
    ...defaultTheme,
    primary: "#f00",
    background: "#000",
    foreground: "#fff",
  },
} as const;

export type ThemeValues = ValueOf<typeof themes>;
type ThemeNames = keyof typeof themes;

export const ThemeContext = createContext<{
  changeTheme: (name: ThemeNames) => void;
  theme: ThemeValues;
}>({
  changeTheme: () => {
    console.log("noop");
  },
  theme: themes.cyan,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeStore: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeValues>(
    themes[(LocalStorage.get("theme") as ThemeNames) ?? "cyan"]
  );
  const setLocalStorage = LocalStorage.set<"theme", ThemeNames>("theme");
  return (
    <ThemeContext.Provider
      value={{
        changeTheme: (name: ThemeNames) => {
          setTheme(themes[name]);
          setLocalStorage(name);
        },
        theme,
      }}
    >
      <ThemeProvider theme={theme as any}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const styled = EmotionStyled as CreateStyled<ThemeValues>;
