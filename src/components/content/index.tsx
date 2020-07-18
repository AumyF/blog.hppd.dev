import React from "react";
import { css } from "@emotion/core";
import { mq } from "../../styles/mediaQueries";
import styled from "@emotion/styled";
import { Breadcrumbs } from "./breadcrumbs";
import { ArticleStyles } from "./article-styles";
import { ThemeSwitcher } from "../theme-switcher";
import { Header } from "./header";

export type MainProps = { title: string; date?: string; path: string };

export const Main: React.FCX<MainProps> = ({
  children,
  title,
  date,
  path,
  className,
}) => (
  <main className="container mx-auto leading-relaxed">
    <ThemeSwitcher />
    <Breadcrumbs date={path.split("/")} path={path} />
    <Header>{title}</Header>
    <article>{children}</article>
  </main>
);

const Plain: React.FCX<MainProps> = ({
  children,
  title,
  date,
  path,
  className,
}) => (
  <main className={`container ${className}`} css={css``}>
    <ThemeSwitcher />
    <Breadcrumbs date={path?.split("/")} path={path} />
    <Header>{title}</Header>
    <article css={ArticleStyles}>{children}</article>
  </main>
);
