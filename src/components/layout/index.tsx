import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { css, Global } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import React from "react";
import { Helmet } from "react-helmet";

import { globalStyles } from "../styles/global";
import { Breadcrumbs } from "./breadcrumbs";
import { Footer } from "./footer";
import { SiteHeader } from "./header";
import { Title } from "./title";
config.autoAddCss = false;

export type LayoutProps = {
  SidebarComponent?: React.ComponentProps<typeof SidebarCard>[];
  TitleComponent?: React.ComponentType<{ title: string }>;
  path: string;
  title: string;
};

const media = (size: "sm" | "md" | "lg" | "xl") =>
  `@media (min-width: ${{ sm: 560, md: 768, lg: 960, xl: 1024 }[size]}px)`;

export const Layout: React.FCX<LayoutProps> = ({
  children,
  className,
  path,
  SidebarComponent: SidebarComponents = null,
  title,
  TitleComponent,
}) => (
  <div className={clsx(className, "min-h-screen text-text bg-background")}>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{title} - Happy Paddy</title>
    </Helmet>
    <Global styles={globalStyles} />
    <SiteHeader />
    <Breadcrumbs className="mb-8 pb-1" date={path?.split("/")} path={path} />
    <div className="container mx-auto my-8 px-4">
      <Title>{title}</Title>
      {TitleComponent && <TitleComponent {...{ title }} />}
    </div>
    <div className="container mx-auto flex gap-4 px-0 sm:px-4 transition-all duration-100">
      {SidebarComponents && (
        <div
          className="flex-shrink-0 hidden md:block sticky h-min-content"
          css={[
            css`
              flex-basis: 192px;
              ${media("lg")} {
                flex-basis: 255px;
              }
              top: 1rem;
            `,
          ]}
        >
          {SidebarComponents.map(props => (
            <SidebarCard {...props} key={props.title} css={cardStyle} />
          ))}
        </div>
      )}

      <main className="leading-relaxed p-8 flex-grow min-w-0 " css={cardStyle}>
        {children}
      </main>
    </div>
    <Footer />
  </div>
);

type SidebarCardProps = { readonly title: string };

const SidebarCard: React.FCX<SidebarCardProps> = ({
  children,
  className,
  title,
}) => (
  <div className={clsx(className, `p-4 mb-4`)}>
    <div className="text-center pb-2 px-4 border-b border-border">{title}</div>
    <div>{children}</div>
  </div>
);

const cardStyle = css`
  box-shadow: 0 2px 5px hsla(260, 60%, 50%, 0.1);
  /* ${tw`bg-white rounded-xl`} */
`;
