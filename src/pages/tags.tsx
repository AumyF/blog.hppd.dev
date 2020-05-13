import React from "react";
import { css } from "@emotion/core";
import { Layout } from "../components/templates/Layout";
import { PageProps, graphql, Link } from "gatsby";
import { TagsPageQuery } from "../../types/graphqlTypes";
import PostLink from "../components/molecules/PostLink";
import { nage } from "../utils/nage";
import { genPostDateAndPath } from "../libs/post";

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
        </h1>
        <p>記事数: {tag.totalCount}</p>
        {tag.edges.map(({ node: post }) => {
          const { path } = genPostDateAndPath(post.fileAbsolutePath);
          return (
            <PostLink
              key={post.frontmatter?.title}
              path={`/${path}`}
              title={post.frontmatter?.title!}
            />
          );
        })}
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
