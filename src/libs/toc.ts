import { InterpolationWithTheme } from "@emotion/core";

export type TOC = Readonly<{ items: TOCItems }>;

export type TOCItems = {
  url: string;
  title: string;
  items?: TOCItems;
}[];
