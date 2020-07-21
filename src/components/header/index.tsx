import React from "react";
import { useSite } from "../../hooks/use-site";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeSwitcher } from "../theme-switcher";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import tw from "twin.macro";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ children }) => {
  const { siteMetadata } = useSite();
  return (
    <>
      <header className="leading-tight text-center text-background bg-foreground">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-3xl font-thin top-0 ">{siteMetadata?.title}</h1>
          <nav className="top-0 py-2">
            <Icon to="/tags" icon={faTag} />
            <Icon to="/archives" icon={faCalendarAlt} />
            <Icon to="https://twitter.com/MominisJ" icon={faTwitter} />
            <Icon to="https://github.com/AumyF" icon={faGithub} />
            <ThemeSwitcher className="text-3xl text-foreground mx-1" />
          </nav>
        </div>
      </header>
    </>
  );
};

const Icon: React.FCX<{ icon: IconProp; to: string }> = ({
  icon,
  to,
  className,
}) => (
  <Link {...{ to, alt: "icon" }}>
    <FontAwesomeIcon
      {...{ icon }}
      className="text-background transition-colors hover:text-primary text-3xl mx-1"
    />
  </Link>
);
