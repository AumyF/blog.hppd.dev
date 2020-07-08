import React from "react";
import { css } from "@emotion/core";

export type EmbeddedNiconicoPlayerProps = {
  src: string;
  from: number;
  title: string;
};

export const EmbeddedNiconicoPlayer: React.FCX<EmbeddedNiconicoPlayerProps> = ({
  src,
  from = 0,
  className,
  title,
}) => (
  <iframe
    title={title}
    className={className}
    allow="autoplay"
    src={`https://embed.nicovideo.jp/watch/${src}?oldScript=1&allowProgrammaticFullScreen=1&referer=&from=${from}`}
    css={css`
      max-width: 100%;
      margin: 1rem auto;
    `}
    width="640"
    height="360"
  ></iframe>
);
