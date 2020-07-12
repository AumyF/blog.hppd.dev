import React from "react";
import { Global, css } from "@emotion/core";
import { prismStyles } from "../components/layout/prism-styles";
import { createContainer } from "unstated-next";
import { generateVariables } from "./variables";
import { hsl } from "../libs/styleFn/color";
import { ElementOf } from "ts-essentials";
import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const lightnessList = [0, 10, 25, 50, 75, 90, 100] as const;

type tmp = (arg: number[]) => { [index in ElementOf<typeof arg>]: string };

export const palettes = {
  mono: Object.fromEntries(lightnessList.map(n => [n, hsl(0, 0, n)])) as {
    [index in typeof lightnessList extends readonly (infer R)[]
      ? R
      : never]: string;
  },
};

const defaultTheme: typeof themes["dark"] = {
  background: palettes.mono[10],
  primary: "#8094ff",
  secondary: "#fd468a",
  foreground: "#d0d0d0",
  strong: "#f0f0f0",
  border: "#404040",
  postLink: {
    background: "#222",
  },
};

const themes: {
  [index in ThemeName]: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    strong: string;
    border: string;
    postLink: {
      background: string;
    };
  };
} = {
  dark: defaultTheme,
  light: {
    ...defaultTheme,
    primary: "#00a0a8",
    secondary: "#f77253",
    background: palettes.mono[90],
    foreground: "#333",
    strong: "#202020",
    border: "#ddd",
    postLink: { background: "#f0f0f0" },
  },
};

export type ThemeName = "dark" | "light";

const useTheme = () => {
  const [themeName, setThemeName] = useLocalStorageState<ThemeName>(
    "theme",
    "dark"
  );

  const toggleTheme = () => {
    setThemeName(name => (name === "dark" ? "light" : "dark"));
  };

  return {
    variables: generateVariables(themes[themeName]),
    themeName,
    toggleTheme,
  };
};

export const ThemeContainer = createContainer(useTheme);

const ThemeStoreInner: React.FC = () => {
  const { variables } = ThemeContainer.useContainer();
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
          ${variables}
        }
        body {
        }
        a {
          color: var(--primary);
          text-decoration: underline var(--primary);
          text-decoration-thickness: 1px;
          &:hover {
            text-decoration-thickness: 2px;
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
