import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout";

export type NotFoundPageProps = PageProps<{}>;

export const NotFound: React.FC<NotFoundPageProps> = ({}) => (
  <Layout title={"404 Not Found"}>OMG.</Layout>
);

export default NotFound;
