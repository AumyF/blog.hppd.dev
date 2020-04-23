import { GatsbyNode, CreatePagesArgs } from "gatsby"
import {
  MdxConnection,
  MdxEdge,
  MdxFrontmatter,
} from "../../types/graphqlTypes"
import Path from "path"
import { Post } from "./post"
import { compact, concat, uniqBy, unzip, toPairs } from "lodash"
import { TagsPageContext, Tag } from "../components/templates/Tags"
import _ from "lodash"

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

  const tagTmpArray: string[] = [],
    categoryTmpArray: string[] = []

  result.data.allMdx.edges.forEach(edge => {
    const post = Post(edge)
    createPage({
      path: post.path ?? post.id,
      component: Path.resolve("./src/components/templates/BlogPost.tsx"),
      context: { post: post },
    })
    tagTmpArray.push(...post.tags)
    categoryTmpArray.push(post.category)
  })

  createPage<TagsPageContext>({
    path: "/tags",
    component: Path.resolve("./src/components/templates/Tags.tsx"),
    context: { tags: tagTmpArray.map(t => ({ name: t })) },
  })
}
