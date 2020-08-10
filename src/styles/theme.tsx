import React, { ComponentType } from "react";
import { Global, css, SerializedStyles } from "@emotion/core";
import { prismStyles } from "../components/layout/prism-styles";
import { createContainer } from "unstated-next";
import { generateVariables } from "./variables";
import { hsla } from "../libs/styleFn/color";
import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { config } from "@fortawesome/fontawesome-svg-core";
import tw from "twin.macro";
import { growingUnderlineAnchor } from "./styles";

config.autoAddCss = false;

const mono = (l: number) => (a: number = 1) => hsla(0, 0, l, a);

export const palettes = {
  mono,
};

type Color = {
  light: string;
  neutral: string;
  dark: string;
};

type Brightness = {
  strong: string;
  neutral: string;
  weak: string;
};

type ColorMode = {
  white: string;
  primary: Color;
  secondary: Color;
  background: string;
  foreground: Brightness;
  strong: string;
  border: string;
  postLink: {
    background: string;
  };
  font: {
    light: string;
    regular: string;
  };
};

const defaultTheme: ColorMode = {
  white: palettes.mono(95)(),
  background: palettes.mono(10)(),
  primary: {
    light: "hsl(230, 80%, 90%)",
    neutral: "hsl(230, 80%, 75%)",
    dark: "",
  },
  secondary: { dark: "", neutral: "#fd468a", light: "" },
  foreground: { strong: "", neutral: "#d0d0d0", weak: "" },
  strong: "#f0f0f0",
  border: "#404040",
  postLink: {
    background: "#222",
  },
  font: {
    regular: `"Helvetica Neue", "Hiragino Sans", "Noto Sans CJK JP",
    "Meiryo", sans-serif`,
    light: `"Hiragino Sans", "Noto Sans CJK JP Thin", "Yu Gothic",
    sans-serif;`,
  },
};

const themes: {
  [index in ColorModeName]: ColorMode;
} = {
  dark: defaultTheme,
  light: {
    ...defaultTheme,
    primary: { light: "", neutral: "#00a0a8", dark: "" },
    secondary: { light: "", neutral: "#f77253", dark: "" },
    background: palettes.mono(95)(),
    foreground: { neutral: palettes.mono(15)(), strong: "", weak: "" },
    strong: "#202020",
    border: "#ddd",
    postLink: { background: "#f0f0f0" },
  },
};

export type ColorModeName = "dark" | "light";

const useTheme = () => {
  const [colorMode, setColorMode] = useLocalStorageState<ColorModeName>(
    "theme",
    "dark"
  );

  const toggleTheme = () => {
    setColorMode(name => (name === "dark" ? "light" : "dark"));
  };

  return {
    variables: generateVariables(themes[colorMode]),
    colorMode,
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
          ${tw`text-teal-500`};
          ${growingUnderlineAnchor};
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

export const withTheme = <P extends object>(
  Component: ComponentType<P & { className?: string }>,
  style: {
    [index in ColorModeName]: SerializedStyles;
  } & { shared?: SerializedStyles }
) => {
  const Themed: React.FCX<P> = props => {
    const { colorMode } = ThemeContainer.useContainer();
    return <Component {...props} css={[style[colorMode], style.shared]} />;
  };

  return Themed;
};
