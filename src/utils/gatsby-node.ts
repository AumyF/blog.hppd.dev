import { GatsbyNode, CreatePagesArgs } from "gatsby"
import {
  MdxConnection,
  MdxEdge,
  MdxFrontmatter,
} from "../../types/graphqlTypes"
import Path from "path"
import { Post } from "./post"
import { replaceNullWith } from "./removeNullFromObject"
import { compact } from "lodash"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  console.log("хорошо!")
  const result = await graphql<{
    allMdx: Pick<MdxConnection, "edges">
  }>(`
    query gatsbyNode {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { status: { ne: "private" } } }
      ) {
        edges {
          node {
            id
            tableOfContents(maxDepth: 10)
            fileAbsolutePath
            body
            excerpt
            frontmatter {
              path
              status
              tags
              title
              date
            }
          }
          next {
            frontmatter {
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }
  if (!result.data) {
    reporter.panicOnBuild("result.data is undefined")
    return
  }

  const ToPost: (e: MdxEdge) => Post = ({
    node: { body, excerpt, id, tableOfContents, frontmatter },
  }) => {
    const { title, date, path, status, tags } = frontmatter
      ? frontmatter
      : ({
          title: "Untitled",
          date: "2020-09-09",
          path: id,
          status: "public",
          tags: [],
        } as MdxFrontmatter)
    return {
      body,
      id,
      toc: tableOfContents,
      date: date,
      description: excerpt,
      excerpt: excerpt,
      path: path!,
      status: status!,
      tags: compact(tags),
      title: title!,
    }
  }

  result.data.allMdx.edges.forEach(edge => {
    const post = ToPost(edge)
    createPage({
      path: post.path ?? post.id,
      component: Path.resolve("./src/components/templates/BlogPost.tsx"),
      context: { post: post },
    })
  })
}
