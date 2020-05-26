import React from "react";
import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout/layout";

export type NotFoundPageProps = PageProps<{}>;

export const NotFound: React.FC<NotFoundPageProps> = ({}) => (
  <Layout title={"404 Not Found"}>OMG.</Layout>
);

export default NotFound;
