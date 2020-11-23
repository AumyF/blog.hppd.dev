import { PageProps } from "gatsby";
import React from "react";

import { Layout } from "../components/layout";

export type NotFoundPageProps = PageProps<{}>;

export const NotFound: React.FC<NotFoundPageProps> = () => (
  <Layout path="/404" title={"404 Not Found"}>
    OMG.
  </Layout>
);

export default NotFound;
