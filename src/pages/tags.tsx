import { graphql, Link, PageProps } from "gatsby";
import React from "react";

import { TagsPageQuery } from "../../types/graphqlTypes";
import { Article } from "../components/article";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-link/post-list";
import { TableOfContents } from "../components/table-of-contents";

export type TagsPageProps = PageProps<TagsPageQuery>;

export const TagsPage: (props: TagsPageProps) => React.ReactElement = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout
    path="tags"
    title="TAGS"
    SidebarComponent={[
      {
        title: "Table of Contents",
        children: (
          <TableOfContents
            toc={{
              items: group.map(({ fieldValue }) => ({
                title: fieldValue ?? "",
                url: `./#${fieldValue}`,
              })),
            }}
          />
        ),
      },
    ]}
  >
    <Article>
      {group.map(({ fieldValue, nodes, totalCount }) => (
        <section key={fieldValue ?? ""}>
          <h1 id={`${fieldValue}`}>
            <Link to={"/tags/" + fieldValue ?? "#"}>{fieldValue}</Link>
            <span className="text-base ml-4 font-normal">
              記事数: {totalCount}
            </span>
          </h1>
          <PostList {...{ nodes }} />
        </section>
      ))}
    </Article>
  </Layout>
);

export const pageQuery = graphql`
  query TagsPage {
    allMdx(sort: { order: DESC, fields: fields___yyyymmdd }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          excerpt(truncate: true)
          id
          frontmatter {
            tags
            title
          }
          fields {
            path
            yyyymmdd
          }
        }
      }
    }
  }
`;

export default TagsPage;
