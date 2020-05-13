import React from "react"
import { css } from "@emotion/core"
import { tap } from "lodash"
export type EmbeddedNiconicoPlayerProps = {
  src: string
  from: number
}

export const EmbeddedNiconicoPlayer: React.FC<EmbeddedNiconicoPlayerProps> = ({
  src,
  from = 0,
}) => (
  <iframe
    allow="autoplay"
    src={`https://embed.nicovideo.jp/watch/${src}?oldScript=1&allowProgrammaticFullScreen=1&referer=&from=${from}`}
    css={css`
      max-width: 100%;
      margin: 1rem auto;
    `}
    width="640"
    height="360"
  ></iframe>
)
