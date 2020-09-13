import React from "react";
import { PageProps, graphql } from "gatsby";
import { TagPageTemplateQuery } from "../../types/graphqlTypes";
import { PostListPage } from "./post-list-page";

export type TagPageContext = {
  tag: string;
};
export type TagPageTemplateProps = PageProps<
  TagPageTemplateQuery,
  TagPageContext
>;

export const TagPageTemplate: React.FC<TagPageTemplateProps> = ({
  pageContext: { tag },
  data: {
    allMdx: { nodes },
  },
}) => (
  <PostListPage {...{ nodes }} title={`tag: ${tag}`} path={`tags/${tag}`} />
);

export default TagPageTemplate;

export const pageQuery = graphql`
  query TagPageTemplate($tag: String) {
    allMdx(filter: { frontmatter: { tags: { eq: $tag } } }) {
      nodes {
        excerpt(truncate: true)
        frontmatter {
          title
          tags
        }
        fields {
          path
          yyyymmdd
        }
      }
    }
  }
`;
