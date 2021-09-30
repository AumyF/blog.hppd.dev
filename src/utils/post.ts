import { graphql } from "gatsby";

export type Post = {
  readonly excerpt: string;
  readonly path: string;
  readonly tags: readonly string[];
  readonly title: string;
  readonly yyyymmdd: string;
};

export const Post = (node: {
  readonly excerpt: string;
  readonly fields?: {
    readonly path?: string;
    readonly yyyymmdd?: string;
  };
  readonly frontmatter?: {
    readonly description?: string;
    readonly tags?: ReadonlyArray<string | undefined>;
    readonly title: string;
  };
}): Post => {
  const { excerpt, fields, frontmatter } = node;
  if (fields == null) throw new TypeError(`${{ fields }}`);
  if (frontmatter == null) throw new TypeError(`${{ frontmatter }}`);

  const { path, yyyymmdd } = fields,
    { description, tags, title } = frontmatter;
  if (yyyymmdd == null || path == null) throw new TypeError(`${fields}`);
  if (tags == null) throw new TypeError(`${{ tags, title }}`);

  return {
    excerpt: description ?? excerpt,
    path,
    yyyymmdd,
    tags: tags.flatMap(tag => tag ?? []),
    title,
  };
};

export const query = graphql`
  fragment Post on Mdx {
    id
    frontmatter {
      title
      tags
      description
    }
    fields {
      path
      yyyymmdd
    }
    excerpt(truncate: true)
  }
`;
