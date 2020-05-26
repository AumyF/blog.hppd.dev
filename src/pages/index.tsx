import React from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components/layout/layout";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import PostLink from "../components/post-link/post-link";
import { genPostDateAndPath, Post } from "../libs/post";
import PostList from "../components/organisms/PostList";
import _ from "lodash";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout title="MOMIREPO">
    <PostList
      posts={edges.map(e => ({
        path: genPostDateAndPath(e.node.fileAbsolutePath).path,
        title: e.node.frontmatter?.title ?? "",
        tags: _.compact(e.node.frontmatter?.tags),
      }))}
    />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
          fileAbsolutePath
        }
      }
    }
  }
`;
