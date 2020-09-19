import React from "react";

export type YouTubeProps = {
  src: string;
  from?: number;
};

export const YouTube: React.FCX<YouTubeProps> = ({
  src,
  from = 0,
  className = "",
}) => (
  <iframe
    className={className + " "}
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${src}?start=${from}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
