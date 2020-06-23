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
import { Global, css } from "@emotion/core";
import { prismStyles } from "../components/layout/prism-styles";
import { createContainer } from "unstated-next";
import { generateVariables } from "./variables";
import { assertsNonNull } from "../libs/asserts-non-null";

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

const d: typeof themes["dark"] = {
  global: {
    background: "#222",
    primary: "#73e135",
    foreground: "#d0d0d0",
    border: "border",
  },
  postLink: {
    background: "#222",
  },
};

type a = keyof typeof themes["dark"]["global"];

const themes: {
  [index in ThemeName]: {
    global: {
      [index in "primary" | "background" | "foreground" | "border"]: string;
    };
    postLink: {
      background: string;
    };
  };
} = {
  dark: d,
  light: {
    ...d,
    global: {
      primary: "#00a0a8",
      background: "#f0f0f0",
      foreground: "#333",
      border: "#ddd",
    },
    postLink: { background: "#f0f0f0" },
  },
};

export type ThemeName = "dark" | "light";

const useTheme = () => {
  const [themeName, setName] = useState<keyof typeof themes>("dark");

  const toggleTheme = () => {
    setName(name => (name === "dark" ? "light" : "dark"));
  };
  console.log(generateVariables(themes[themeName]));

  //const local = LocalStorage.get("theme");
  // const theme = ["dark", "light"].includes(String(local)) ? local : "dark";
  // setName(prev =>
  //   prev === assertsNonNull(theme)
  //     ? prev
  //     : (assertsNonNull(theme) as "dark" | "light")
  // );
  //LocalStorage.set("theme")(theme!);
  //console.log(theme);

  return {
    theme: generateVariables(themes[themeName]),
    themeName,
    toggleTheme,
    setTheme: setName,
  };
};

export const ThemeContainer = createContainer(useTheme);

const ThemeStoreInner: React.FC = ({ children }) => {
  const { theme, toggleTheme } = ThemeContainer.useContainer();
  return (
    <Global
      styles={css`
        * {
          transition: 200ms background-color ease;
        }
        html {
          background-color: #000;
          scrollbar-color: var(--background);
          overflow-y: scroll;
          ${theme}
        }
        body {
        }
        a {
          color: var(--primary);
          text-decoration: underline dotted var(--foreground);
          text-decoration-thickness: 2px;
          &:hover {
            text-decoration-style: solid;
          }
        }
        ${prismStyles}
      `}
    />
  );
};
export const ThemeStore: React.FC = ({ children }) => {
  return (
    <ThemeContainer.Provider>
      <ThemeStoreInner />
      {children}
    </ThemeContainer.Provider>
  );
};
