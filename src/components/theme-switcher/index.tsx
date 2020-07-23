import { ThemeContainer } from "../../styles/theme";
import React from "react";
import { css } from "@emotion/core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeSwitcher: React.FCX = ({ className }) => {
  const { colorMode, toggleTheme } = ThemeContainer.useContainer();
  return (
    <button
      name="テーマを変更"
      type="button"
      className={className}
      onClick={toggleTheme}
      css={css`
        cursor: pointer;
        display: contents;
      `}
    >
      <FontAwesomeIcon
        className="text-secondary"
        icon={colorMode === "dark" ? faMoon : faSun}
      />
    </button>
  );
};
