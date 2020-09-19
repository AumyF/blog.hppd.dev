import React from "react";
import { css } from "@emotion/core";

export type TOC = Readonly<{ items: TOCItems }>;

export type TOCItems = {
  url: string;
  title: string;
  items?: TOCItems;
}[];

const Item: React.FCX<TOC> = ({ items, className }) => (
  <ul className={className}>
    {items.map(items => (
      <li key={items.title} className="leading-normal" css={css``}>
        <a
          className="block px-1 my-1 no-underline hover:bg-gray-200 text-gray-600 hover:text-gray-700"
          href={items.url}
        >
          {items.title}
        </a>
        {items.items ? <Item className="ml-4" items={items.items} /> : null}
      </li>
    ))}
  </ul>
);

export type TableOfContentsProps = {
  toc: TOC;
};

export const TableOfContents: React.FCX<TableOfContentsProps> = ({
  toc: TOC,
  className = "",
}) => (
  <div className={`${className ?? ""} pb-2`}>
    <div className="text-center pb-2 px-4 border-b border-gray-400">
      Table of Contents
    </div>
    <Item className="pt-2" items={TOC.items} />
  </div>
);
