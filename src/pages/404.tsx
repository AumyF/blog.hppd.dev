import { Box } from "@chakra-ui/react";
import { PageProps } from "gatsby";
import React from "react";

import { HeadTitle } from "../components/atoms/head-title";
import { Layout } from "../components/layout";
import { BodyContainer } from "../components/layout/container";
import { MainContent } from "../components/layout/main-content";
import { TitleContainer, TitleName } from "../components/layout/title";

export type NotFoundPageProps = PageProps<{}>;

export const NotFound: React.FC<NotFoundPageProps> = () => (
  <Layout path="/404">
    <HeadTitle>404</HeadTitle>

    <TitleContainer>
      <TitleName>404 Not Found</TitleName>
    </TitleContainer>

    <BodyContainer>
      <MainContent>
        <Box>
          リソースが見つかりません。ページは削除または移動されたかもしれません。
        </Box>
      </MainContent>
    </BodyContainer>
  </Layout>
);

export default NotFound;
