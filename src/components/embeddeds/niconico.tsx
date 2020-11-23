import React from "react";

export type NiconicoProps = {
  from?: number;
  src: string;
  title?: string;
};

export const Niconico: React.FCX<NiconicoProps> = ({
  className = "",
  from = 0,
  src,
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
