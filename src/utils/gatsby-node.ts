import { GatsbyNode, CreatePagesArgs } from "gatsby"
import {
  MdxConnection,
  MdxEdge,
  MdxFrontmatter,
} from "../../types/graphqlTypes"
import Path from "path"
import { Post } from "../libs/post"
import { compact, concat, uniqBy, unzip, toPairs } from "lodash"
import _ from "lodash"
import { IndividualTagPageContext } from "../components/templates/IndividualTagPage"

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
              path
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

  const tagTmpArray: string[] = []
  const classifiedPosts: { [index: string]: Post[] } = {}

  result.data.allMdx.edges.forEach(edge => {
    const post = Post(edge)
    createPage({
      path: post.path ?? post.id,
      component: Path.resolve("./src/components/templates/BlogPost.tsx"),
      context: { post: post },
    })
    tagTmpArray.push(...post.tags)
  })

  /**createPage<TagsPageContext>({
    path: "/tags",
    component: Path.resolve("./src/components/templates/Tags.tsx"),
    context: { tags: tagTmpArray },
  })

  tagTmpArray.forEach(tag => (createPage<IndividualTagPageContext>({
    path: "/tags/" + tag
  ,component: Path.resolve("./src/components/templates/IndividualTagPageContext"),
  context: {tag: tag, posts:}
  })))
  createPage<IndividualTagPageContext>({
    path: "/tags/" ,
    component: 
  }) */
}
