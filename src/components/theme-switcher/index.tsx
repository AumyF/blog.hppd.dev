import { ThemeContainer, withTheme } from "../../styles/theme";
import React from "react";
import { css } from "@emotion/core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeSwitcherBase: React.FCX = ({ className }) => {
  const { colorMode, toggleTheme } = ThemeContainer.useContainer();
  return (
    <button
      name="テーマを変更"
      type="button"
      className={className + "cursor-pointer contents"}
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        className="text-secondary"
        icon={colorMode === "dark" ? faMoon : faSun}
      />
    </button>
  );
};

export const ThemeSwitcher = withTheme(ThemeSwitcherBase, {
  dark: css``,
  light: css``,
});
