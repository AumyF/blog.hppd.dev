import React from "react";
import { css } from "@emotion/core";

export type NiconicoProps = {
  src: string;
  from?: number;
  title?: string;
};

export const Niconico: React.FCX<NiconicoProps> = ({
  src,
  from = 0,
  className = "",
  title = "",
}) => (
  <iframe
    title={title}
    className={className + " "}
    allow="autoplay"
    src={`https://embed.nicovideo.jp/watch/${src}?oldScript=1&allowProgrammaticFullScreen=1&referer=&from=${from}`}
    width="560"
    height="315"
  ></iframe>
);
