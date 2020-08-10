import React from "react";
import { css } from "@emotion/core";
import { TOC } from "../../libs/toc";

const Item: React.FCX<TOC> = ({ items, className }) => (
  <ul className={className}>
    {items.map(items => (
      <li key={items.title} className="leading-normal" css={css``}>
        <a
          className="block my-1 no-underline transition-all duration-75 hover:bg-gray-800"
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
  className,
}) => (
  <div className={className + " px-4 py-2"}>
    <div className="text-center pb-2 px-4 border-b border-gray-700">
      Table of Contents
    </div>
    <Item className="pt-2" items={TOC.items} />
  </div>
);
