import React from "react";
import { css } from "@emotion/core";
import { PostDate, PostDateToString } from "../../libs/date";
import { styleValues } from "../../styles/styleValues";

export type MainHeaderProps = { title: string; date?: string };

export const MainHeader: React.FC<MainHeaderProps> = ({ title, date }) => {
  return (
    <header
      css={css`
        background-color: ${styleValues.ContentHeader.background};
        padding: 0 2rem;

        h1 {
          text-align: center;
          font-size: 1.5em;
          margin: 0;
        }
        div {
          text-align: center;
        }
      `}
    >
      <div>{date}</div>
      <h1>{title}</h1>
    </header>
  );
};
