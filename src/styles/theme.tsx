import { useState } from "react";
import React from "react";
import * as LocalStorage from "../libs/local-storage";
import { Global, css } from "@emotion/core";
import { prismStyles } from "../components/layout/prism-styles";
import { createContainer } from "unstated-next";
import { generateVariables } from "./variables";

const palettes = {
  vividDark: {
    mono: ["1e1e21", "#404040", "#d0d0d0"],
  },
} as const;

const defaultTheme: typeof themes["dark"] = {
  background: "#1c1c1c",
  primary: "#73e135",
  secondary: "#f77253",
  foreground: "#d0d0d0",
  border: "border",
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
    background: "#f0f0f0",
    foreground: "#333",
    border: "#ddd",
    postLink: { background: "#f0f0f0" },
  },
};

export type ThemeName = "dark" | "light";

const useTheme = () => {
  const local = LocalStorage.get("theme");
  const initialTheme =
    local !== null && ["dark", "light"].includes(local) ? local : "dark";
  LocalStorage.set("theme")(initialTheme);
  const [themeName, setName] = useState<keyof typeof themes>(
    initialTheme as "dark" | "light"
  );

  const toggleTheme = () => {
    setName(name => {
      const newName = name === "dark" ? "light" : "dark";
      LocalStorage.set("theme")(newName);
      return newName;
    });
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
