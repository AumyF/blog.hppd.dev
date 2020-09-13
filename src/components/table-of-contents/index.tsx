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
          className="block px-1 my-1 no-underline transition-all duration-50 hover:bg-gray-800 text-gray-500 hover:text-gray-400"
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
  <div className={className + " py-2"}>
    <div className="text-center pb-2 px-4 border-b border-gray-700">
      Table of Contents
    </div>
    <Item className="pt-2" items={TOC.items} />
  </div>
);
