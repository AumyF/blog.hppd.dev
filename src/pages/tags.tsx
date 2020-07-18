import React from "react";
import { css } from "@emotion/core";
import { Layout } from "../components/layout";
import { PageProps, graphql, Link } from "gatsby";
import { TagsPageQuery } from "../../types/graphqlTypes";
import { PostList } from "../components/post-link/post-list";
import { Heading2 } from "../components/article-elements/headings";

export type TagsPageProps = PageProps<TagsPageQuery>;

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  data: {
    allPost: { group },
  },
}) => (
  <Layout
    path="tags"
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
        <Heading2 id={`${fieldValue}`}>
          <Link to={"/tags/" + fieldValue ?? "#"}>{fieldValue}</Link>
          <span
            css={css`
              font-size: 1rem;
              margin-left: 0.5em;
            `}
          >
            記事数: {totalCount}
          </span>
        </Heading2>
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
            excerpt
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
