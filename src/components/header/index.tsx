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
import { withTheme } from "../../styles/theme";

export type SiteHeaderProps = {};

const SiteHeaderInner: React.FCX<SiteHeaderProps> = ({ className }) => {
  const { siteMetadata } = useSite();
  return (
    <header {...{ className }}>
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-3xl font-thin top-0">{siteMetadata?.title}</h1>
        <nav className="top-0 py-2">
          <Icon to="/tags" icon={faTag} />
          <Icon to="/archives" icon={faCalendarAlt} />
          <Icon to="https://twitter.com/MominisJ" icon={faTwitter} />
          <Icon to="https://github.com/AumyF" icon={faGithub} />
          <ThemeSwitcher className="text-3xl text-foreground-neutral mx-1" />
        </nav>
      </div>
    </header>
  );
};

export const SiteHeader = withTheme(SiteHeaderInner, {
  dark: css`
    ${tw`bg-gray-100 text-gray-900`}
  `,
  light: css`
    ${tw`bg-gray-900 text-gray-100`}
  `,
  shared: css`
    ${tw`leading-tight text-center`}
  `,
});

const Icon: React.FCX<{ icon: IconProp; to: string }> = ({ icon, to }) => (
  <Link {...{ to, alt: "icon" }}>
    <FontAwesomeIcon
      {...{ icon }}
      className="text-background transition-colors hover:text-primary text-3xl mx-1"
    />
  </Link>
);
