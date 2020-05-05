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
  <Layout title="TAGS">
    {group.map(tag => (
      <section>
        <h1>
          <Link to={"tags/" + tag.fieldValue ?? "#"}>{tag.fieldValue}</Link>
        </h1>
        <p>記事数: {tag.totalCount}</p>
        {tag.edges.map(({ node: post }) => {
          const pathAndTitle = genPostDateAndPath(post.fileAbsolutePath);
          return (
            <PostLink
              {...pathAndTitle}
              excerpt={post.excerpt}
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
