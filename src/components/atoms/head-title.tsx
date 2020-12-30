import React from "react";
import { Helmet } from "react-helmet";

export const HeadTitle: React.FC<{ children: string }> = ({ children }) => (
  <Helmet>
    <title>{children} - Happy Paddy</title>
  </Helmet>
);
