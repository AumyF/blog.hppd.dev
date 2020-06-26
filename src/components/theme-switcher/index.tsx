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

export const ThemeSwitcher: React.FCX = ({ className }) => {
  const { themeName, toggleTheme } = ThemeContainer.useContainer();
  return (
    <button
      className={className}
      onClick={toggleTheme}
      css={css`
        background-color: var(--background);
        border: none;
        padding: 0;
        font-size: 2em;
        height: 48px;
        color: var(--secondary);
      `}
    >
      <FontAwesomeIcon icon={themeName === "dark" ? faMoon : faSun} />
    </button>
  );
};
