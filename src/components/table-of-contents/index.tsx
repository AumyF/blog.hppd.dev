import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import clsx from "clsx";

export type TOC = Readonly<{ items?: TOCItems }>;

export type TOCItems = {
  url: string;
  title: string;
  items?: TOCItems;
}[];

const Item: React.FCX<{ items: TOCItems }> = ({ items, className }) => (
  <ul className={className}>
    {items.map(items => (
      <li key={items.title} className="leading-normal" css={css``}>
        <Link
          className="block px-1 my-1 no-underline hover:bg-border text-weak"
          to={items.url}
        >
          {items.title}
        </Link>
        {items.items ? <Item className="ml-4" items={items.items} /> : null}
      </li>
    ))}
  </ul>
);

export type TableOfContentsProps = {
  toc: TOC;
};

export const TableOfContents: React.FCX<TableOfContentsProps> = ({
  toc: { items = null },
  className = "",
}) =>
  items && (
    <div className={clsx(`pb-2`, className)}>
      <Item className="pt-2" items={items} />
    </div>
  );
