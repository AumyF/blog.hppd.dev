import React from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components/layout";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import { genPostDateAndPath, Post } from "../libs/post";
import { PostList } from "../components/post-link/post-list";
import _ from "lodash";
import { useSite } from "../hooks/use-site";
import { assertsNonNull } from "../libs/asserts-non-null";
import { ThemeSwitcher } from "../components/theme-switcher";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allPost: { edges },
  },
}) => {
  const { siteMetadata } = useSite();
  return (
    <Layout path="" title={assertsNonNull(siteMetadata?.title)}>
      <PostList edges={edges} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    allPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          title
          tags
          date
          path
        }
      }
    }
  }
`;
