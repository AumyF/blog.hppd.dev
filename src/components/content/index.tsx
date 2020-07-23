import React from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { Header } from "./header";

export type MainProps = { title: string; date?: string; path: string };

export const Main: React.FCX<MainProps> = ({
  className,
  children,
  title,
  path,
}) => (
  <main className={`leading-relaxed ${className}`}>
    <Breadcrumbs date={path?.split("/")} path={path} />
    <Header>{title}</Header>
    {children}
  </main>
);
