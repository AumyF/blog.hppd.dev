import React from "react";
import { css } from "@emotion/core";
import { mq } from "../../styles/mediaQueries";
import styled from "@emotion/styled";
import { Breadcrumbs } from "./breadcrumbs";
import { ArticleStyles } from "./article-styles";
import { ThemeSwitcher } from "../theme-switcher";

export type MainProps = { title: string; date?: string; path: string };

const Plain: React.FCX<MainProps> = ({
  children,
  title,
  date,
  path,
  className,
}) => (
  <main
    className={className}
    css={css`
      margin: 0 auto;
      overflow-wrap: break-word;
      min-width: 0;
    `}
  >
    <h1
      css={css`
        text-align: center;
        font-size: 3em;
        margin: 0;
      `}
    >
      {title}
    </h1>
    <ThemeSwitcher />
    <Breadcrumbs date={path?.split("/")} path={path} />
    <article css={ArticleStyles}>{children}</article>
  </main>
);

export const Main = styled<React.FCX<MainProps>>(Plain)`
  transition: max-width 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  max-width: 95%;
  ${mq.small} {
    max-width: 560px;
  }
  /**128 */
  ${mq.medium} {
    max-width: 640px;
  }
  /**256 */
  ${mq.large} {
    max-width: 900px;
  }
  /** 256 */
  ${mq.huge} {
    max-width: 1124px;
  }
`;
