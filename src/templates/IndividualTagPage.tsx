import React, { ComponentProps } from "react";
import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { Post } from "../libs/post";
import { PostList } from "../components/organisms/PostList";

export type IndividualTagPageContext = {
  tag: string;
  edges: ComponentProps<typeof PostList>["edges"];
};
export type IndividualTagPageProps = PageProps<{}, IndividualTagPageContext>;

export const IndividualTagPage: React.FC<IndividualTagPageProps> = ({
  pageContext: { edges, tag },
}) => (
  <Layout title={`tag: ${tag}`}>
    <div>
      <PostList edges={edges} />
    </div>
  </Layout>
);

export default IndividualTagPage;
