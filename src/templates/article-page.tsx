import React from "react";
import { Layout } from "../components/layout";
import { ArticleStyles } from "../components/content/article-styles";

export type ArticlePageProps = {
  title: string;
  path: string;
  date: string;
  toc: Parameters<typeof Layout>[0]["toc"];
};

export const ArticlePage: React.FCX<ArticlePageProps> = ({
  children,
  className,
  title,
  path,
  date,
  toc,
}) => (
  <Layout {...{ title, path, className, date, toc }}>
    <article css={ArticleStyles}>{children}</article>
  </Layout>
);
