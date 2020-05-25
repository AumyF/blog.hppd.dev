import React from "react";
import { css } from "@emotion/core";
import { Layout } from "../components/layout/Layout";
import { PageProps, graphql, Link } from "gatsby";
import { TagsPageQuery } from "../../types/graphqlTypes";
import PostLink from "../components/post-link";
import { nage } from "../utils/nage";
import { genPostDateAndPath } from "../libs/post";
import PostList from "../components/organisms/PostList";

export type TagsPageProps = PageProps<TagsPageQuery>;

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout
    title="TAGS"
    toc={{
      items: group.map(({ edges, fieldValue }) => ({
        title: fieldValue ?? "",
        url: `./#${fieldValue}`,
      })),
    }}
  >
    {group.map(tag => (
      <section key={tag.fieldValue ?? ""}>
        <h1 id={`${tag.fieldValue}`}>
          <Link to={"/tags/" + tag.fieldValue ?? "#"}>{tag.fieldValue}</Link>
          <span
            css={css`
              font-size: 0.6em;
              margin-left: 0.5em;
            `}
          >
            記事数: {tag.totalCount}
          </span>
        </h1>
        <PostList
          posts={tag.edges.map(
            ({ node: { frontmatter, fileAbsolutePath } }) => ({
              path: genPostDateAndPath(fileAbsolutePath).path,
              title: frontmatter?.title ?? "",
            })
          )}
        />
      </section>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query TagsPage {
    allMdx {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
        edges {
          node {
            excerpt
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;

export default TagsPage;
