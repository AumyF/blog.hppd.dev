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
    readonly tags?: ReadonlyArray<string | undefined>;
    readonly title: string;
  };
}): Post => {
  const { excerpt, fields, frontmatter } = node;
  if (fields == null) throw new TypeError(`${{ fields }}`);
  if (frontmatter == null) throw new TypeError(`${{ frontmatter }}`);

  const { path, yyyymmdd } = fields,
    { tags, title } = frontmatter;
  if (yyyymmdd == null || path == null) throw new TypeError(`${fields}`);
  if (tags == null) throw new TypeError(`${{ tags, title }}`);

  return {
    excerpt,
    path,
    yyyymmdd,
    tags: tags.flatMap(tag => tag ?? []),
    title,
  };
};
