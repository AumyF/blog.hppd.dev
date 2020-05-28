import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Post, genPostDateAndPath } from "../libs/post";
import { ArchiveYearPageQuery } from "../../types/graphqlTypes";
import PostList from "../components/organisms/PostList";

export type ArchiveYearPageContext = {
  year: string;
  posts: Post[];
  startDate: string;
  endDate: string;
};
export type ArchiveYearPageProps = PageProps<
  ArchiveYearPageQuery,
  ArchiveYearPageContext
>;

export const ArchiveYearPage: React.FC<ArchiveYearPageProps> = ({
  pageContext: { posts, year },
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout title={year}>
    <div>
      <PostList
        posts={edges.map(({ node: { frontmatter, fileAbsolutePath } }) => {
          const { title } = frontmatter ?? { title: "" };
          const { path } = genPostDateAndPath(fileAbsolutePath);
          return { path, title };
        })}
      />
    </div>
  </Layout>
);

export default ArchiveYearPage;

export const pageQuery = graphql`
  query ArchiveYearPage($startDate: Date, $endDate: Date) {
    allMdx(
      filter: { frontmatter: { date: { gt: $startDate, lt: $endDate } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          fileAbsolutePath
        }
      }
    }
  }
`;
