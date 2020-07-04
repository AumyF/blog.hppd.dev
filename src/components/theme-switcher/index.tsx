import { ThemeContainer } from "../../styles/theme";
import React from "react";
import { css } from "@emotion/core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeSwitcher: React.FCX = ({ className }) => {
  const { themeName, toggleTheme } = ThemeContainer.useContainer();
  return (
    <button
      name="テーマを変更"
      type="button"
      className={className}
      onClick={toggleTheme}
      css={css`
        cursor: pointer;
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
