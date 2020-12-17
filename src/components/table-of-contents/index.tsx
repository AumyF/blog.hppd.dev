import { css } from '@emotion/react';
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";

export type TOC = Readonly<{ items?: TOCItems }>;

export type TOCItems = {
  items?: TOCItems;
  title: string;
  url: string;
}[];

const Item: React.FCX<{ items: TOCItems }> = ({ className, items }) => (
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
  className = "",
  toc: { items = null },
}) =>
  items && (
    <div className={clsx(`pb-2`, className)}>
      <Item className="pt-2" items={items} />
    </div>
  );
