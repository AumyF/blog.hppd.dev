import React from "react";
import { css } from "@emotion/core";
import { Layout } from "../components/layout";
import { PageProps, graphql, Link } from "gatsby";
import { TagsPageQuery } from "../../types/graphqlTypes";
import { nage } from "../utils/nage";
import { genPostDateAndPath } from "../libs/post";
import { PostList } from "../components/post-link/post-list";

export type TagsPageProps = PageProps<TagsPageQuery>;

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  data: {
    allPost: { group },
  },
}) => (
  <Layout
    title="TAGS"
    toc={{
      items: group.map(({ fieldValue }) => ({
        title: fieldValue ?? "",
        url: `./#${fieldValue}`,
      })),
    }}
  >
    {group.map(({ fieldValue, totalCount, edges }) => (
      <section key={fieldValue ?? ""}>
        <h1 id={`${fieldValue}`}>
          <Link to={"/tags/" + fieldValue ?? "#"}>{fieldValue}</Link>
          <span
            css={css`
              font-size: 1rem;
              margin-left: 0.5em;
            `}
          >
            記事数: {totalCount}
          </span>
        </h1>
        <PostList edges={edges} />
      </section>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query TagsPage {
    allPost {
      group(field: tags) {
        fieldValue
        totalCount
        edges {
          node {
            id
            path
            tags
            title
          }
        }
      }
    }
  }
`;

export default TagsPage;
