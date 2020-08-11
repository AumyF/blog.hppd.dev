import React from "react";
import { useSite } from "../../hooks/use-site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AnchorOrLink } from "../atoms/anchor-or-link";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ className }) => {
  const { siteMetadata } = useSite();
  return (
    <header
      className={
        className + " bg-gray-100 text-gray-900 leading-tight text-center"
      }
    >
      <div className="flex container mx-auto px-4 items-center gap-4 justify-between">
        <h1 className="text-3xl">{siteMetadata?.title}</h1>
        <nav className="py-2">
          <Icon to="/tags" icon={faTag} />
          <Icon to="/archives" icon={faCalendarAlt} />
          <Icon to="https://twitter.com/MominisJ" icon={faTwitter} />
          <Icon to="https://github.com/AumyF" icon={faGithub} />
        </nav>
      </div>
    </header>
  );
};

type HeaderIconProps = { icon: IconProp; to: string };

const Icon: React.FCX<HeaderIconProps> = ({ icon, to }) => (
  <AnchorOrLink
    {...{ to, alt: "icon" }}
    className="transition-colors text-3xl mx-1 text-gray-900 hover:text-teal-500"
  >
    <FontAwesomeIcon {...{ icon }} />
  </AnchorOrLink>
);
