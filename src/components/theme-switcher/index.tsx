import { ThemeContainer } from "../../styles/theme";
import { useContext } from "react";
import React from "react";
import { css } from "@emotion/core";
import * as LocalStorage from "../../libs/local-storage";
import { Select } from "../sidebar/typesafe-select";
import RSelect from "react-select";
import { assertsNonNull } from "../../libs/asserts-non-null";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const keys = <T,>(o: T): (keyof T)[] => Object.keys(o) as any;

export const ThemeSwitcher: React.FC = () => {
  const { themeName, toggleTheme } = ThemeContainer.useContainer();
  return (
    <button
      css={css`
        background-color: var(--background);
      `}
    >
      <FontAwesomeIcon
        role="button"
        onClick={toggleTheme}
        icon={themeName === "dark" ? faMoon : faSun}
      />
    </button>
  );
};
