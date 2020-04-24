import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Mdx } from "../../../types/graphqlTypes"
import { Post } from "../../libs/post"
import { totalmem } from "os"
import { scheme } from "../../styles/colorScheme"
import {} from "ts-essentials"

export type PostLinkProps = Readonly<{
  excerpt: string
  path: string
  title: string
}>

export const PostLink: React.FC<PostLinkProps> = ({ excerpt, path, title }) => (
  <Link
    to={path}
    css={css`
      display: block;
      border: 1px solid ${scheme.border};
    `}
  >
    <div>
      <h2>
        <span>{title}</span>
      </h2>
    </div>
    <p>{excerpt}</p>
  </Link>
)

export default PostLink

/**
const Styled = styled(Plain)`
  display: block;
  ${ss.boxShadowMedium};
  ${ss.rounded};
  border-top-left-radius: 0;
  ${ss.hidden};
  height: 100%;
  background-color: ${cs.cardBackground};
  transition: 150ms filter ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
  div {
    text-decoration: none;
    flex-wrap: wrap;
    padding: 0.25rem;
    ${ss.transition};
    color: ${cs.border};

    background-color: ${cs.primaryAccent};
    background-size: contain;
    background-attachment: fixed;
    border-left: 1px solid ${cs.secondaryAccent};
    border-left-width: 4px;
    filter: saturate(180%);
    h2 {
      span {
        ${ss.textShadow}
        color: white;
      }
    }
  }
  p {
    text-align: left;
    padding: 0.5rem;
  }
`*/
