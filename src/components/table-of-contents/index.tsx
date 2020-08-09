import React from "react";
import { css } from "@emotion/core";
import { TOC } from "../../libs/toc";
import { withTheme } from "../../styles/theme";
import tw from "twin.macro";

const ItemBase: React.FCX<TOC> = ({ items, className }) => (
  <ul className={className}>
    {items.map(items => (
      <li key={items.title} className="leading-normal" css={css``}>
        <a
          className="block my-1 no-underline transition-all duration-75"
          href={items.url}
        >
          {items.title}
        </a>
        {items.items ? <Item className="ml-4" items={items.items} /> : null}
      </li>
    ))}
  </ul>
);

const Item = withTheme(ItemBase, {
  dark: css`
    > li > a {
      ${tw`hover:bg-gray-800`}
    }
  `,
  light: css`
    > li > a {
      ${tw`hover:bg-gray-300`}
    }
  `,
});

export type TableOfContentsProps = {
  toc: TOC;
};

const TableOfContentsBase: React.FCX<TableOfContentsProps> = ({
  toc: TOC,
  className,
}) => (
  <div className={className + " px-4 py-2"}>
    <div className="text-center pb-2 px-4 border-b">Table of Contents</div>
    <Item className="pt-2" items={TOC.items} />
  </div>
);

export const TableOfContents = withTheme(TableOfContentsBase, {
  dark: css`
    > div {
      ${tw`border-gray-700`}
    }
  `,
  light: css`
    > div {
      ${tw`border-gray-200`}
    }
  `,
});
