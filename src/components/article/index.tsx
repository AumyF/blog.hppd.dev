import React from "react";
import styled from "@emotion/styled";
import { ArticleStyles } from "./article-styles";

type ArticleProps = {};

const ArticleBase: React.FCX<ArticleProps> = ({ children, className }) => (
  <article {...{ children, className }} />
);

export const Article = styled(ArticleBase)`
  ${ArticleStyles};
`;
