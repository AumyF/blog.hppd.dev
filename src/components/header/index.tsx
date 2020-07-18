import React from "react";
import { useSite } from "../../hooks/use-site";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faTag } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "../theme-switcher";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import tw from "twin.macro";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ children }) => {
  const { siteMetadata } = useSite();
  return (
    <>
      <header className="leading-tight text-center text-background bg-foreground">
        <h1 className="text-5xl font-thin top-0 ">{siteMetadata?.title}</h1>
        <p>{siteMetadata?.description}</p>
      </header>
      <nav className="sticky text-center bg-foreground top-0">
        <Icon to="/tags" icon={faTag} />
        <ThemeSwitcher className="text-5xl text-foreground" />
      </nav>
    </>
  );
};

const Icon: React.FCX<{ icon: IconProp; to: string }> = ({
  icon,
  to,
  className,
}) => (
  <Link {...{ to }}>
    <FontAwesomeIcon {...{ icon }} className="text-5xl" />
  </Link>
);
