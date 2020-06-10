import React from "react";
import { css } from "@emotion/core";
import { MainHeader } from "./header";
import { styleValues } from "../../styles/styleValues";
import { PostDate } from "../../libs/date";
import Footer from "./footer";
import { mq } from "../../styles/mediaQueries";
import styled from "@emotion/styled";
import { Sidebar } from "../sidebar/sidebar";
import { TOC } from "../../libs/toc";
import { Breadcrumbs } from "./breadcrumbs";
import { DateTime } from "luxon";
import { callOptionalUndefined } from "../../libs/call-optional";
import { Post } from "../../libs/post";
import { ArticleStyles } from "./article-styles";

export type MainProps = { title: string } & Partial<
  Pick<Post, "date" | "toc" | "path">
>;

const Plain: React.FCX<MainProps> = ({
  children,
  title,
  date,
  toc,
  path,
  className,
}) => (
  <main className={className}>
    <Sidebar toc={toc} />
    <article>
      <Breadcrumbs date={path?.split("/")} path="ubuntu-focal" />
      {children}
      <Footer />
    </article>
  </main>
);

export const Main = styled<React.FCX<MainProps>>(Plain)`
  ${ArticleStyles};
  transition: max-width 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  & > ${Sidebar} {
    display: none;
  }
  max-width: 95%;
  ${mq.small} {
    max-width: 560px;
    & > ${Sidebar} {
      display: block;
    }
  }
  /**128 */
  ${mq.medium} {
    max-width: 640px;
  }
  /**256 */
  ${mq.large} {
    max-width: 900px;
  }
  /** 256 */
  ${mq.huge} {
    max-width: 1124px;
  }

  & > article {
    overflow-wrap: break-word;
    min-width: 0;
  }
`;
