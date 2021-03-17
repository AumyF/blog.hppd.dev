import { graphql, PageProps } from "gatsby";
import React from "react";

import { PostListPage } from "./post-list-page";

export type TagPageContext = {
  tag: string;
};
export type TagPageTemplateProps = PageProps<
  GatsbyTypes.TagPageTemplateQuery,
  TagPageContext
>;

export const TagPageTemplate: React.FC<TagPageTemplateProps> = ({
  data: {
    allMdx: { nodes },
  },
  pageContext: { tag },
}) => (
  <PostListPage {...{ nodes }} title={`tag: ${tag}`} path={`tags/${tag}`} />
);

export default TagPageTemplate;

export const pageQuery = graphql`
  query TagPageTemplate($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { order: DESC, fields: fields___yyyymmdd }
    ) {
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
