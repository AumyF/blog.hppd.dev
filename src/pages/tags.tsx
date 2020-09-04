import React from "react";
import { Layout } from "../components/layout";
import { PageProps, graphql, Link } from "gatsby";
import { TagsPageQuery } from "../../types/graphqlTypes";
import { PostList } from "../components/post-link/post-list";
import { Article } from "../components/article";

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
    <Article>
      {group.map(({ fieldValue, totalCount, edges }) => (
        <section key={fieldValue ?? ""}>
          <h2 id={`${fieldValue}`}>
            <Link to={"/tags/" + fieldValue ?? "#"}>{fieldValue}</Link>
            <span className="text-base ml-4 font-normal">
              記事数: {totalCount}
            </span>
          </h2>
          <PostList edges={edges} />
        </section>
      ))}
    </Article>
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
