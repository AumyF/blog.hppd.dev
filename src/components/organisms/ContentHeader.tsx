import React from "react";
import { css } from "@emotion/core";
import { PostDate, PostDateToString } from "../../libs/date";

export type MainHeaderProps = { title: string; date?: PostDate };

export const MainHeader: React.FC<MainHeaderProps> = ({ title, date }) => {
  return (
    <header
      css={css`
        padding-left: 20px;
        color: #1a1a1a;
      `}
    >
      <h1>{title}</h1>
      <div>{PostDateToString(date)}</div>
    </header>
  );
};

export default MainHeader;
