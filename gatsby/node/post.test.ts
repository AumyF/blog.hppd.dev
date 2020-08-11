import { Post } from "./post";

describe("Post", (): void => {
  test("Postが正しく生成されるか", () => {
    const response: Post = Post({
      node: {
        body: "body",
        excerpt: "excerpt",
        fileAbsolutePath:
          "/mnt/c/Users/user/Documents/GitHub/boke/src/posts/2020/04/22-file-title.mdx",
        id: "ididididididididid",
        tableOfContents: {},
        frontmatter: {
          title: "title",
          date: "",
          path: "path",
          status: "public",
          tags: ["tag1", "tag2"],
        },
      },
    });
    console.log(response);
  });
});
