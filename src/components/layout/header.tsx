import React from "react";
import { useSite } from "../../hooks/use-site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AnchorOrLink } from "../atoms/anchor-or-link";
import { Link } from "gatsby";
import tw from "twin.macro";
import { invisibleAnchor } from "../styles/styles";
// import svg from "../../../static/ftrf-logo.svg";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ className }) => {
  const { siteMetadata } = useSite();
  return (
    <header
      className={
        className + " text-gray-200 bg-gray-900 leading-tight text-center"
      }
    >
      <div className="flex container mx-auto px-4 items-center gap-2 justify-end">
        <h1 className="text-3xl font-bold pr-2 mr-auto">
          <Link to="/" className="text-current no-underline">
            {/* <img src={svg} alt="FortunateRicefield" /> */}
            Happy Paddy
          </Link>
        </h1>
        {/* <nav>
          <Link css={[navigation, invisibleAnchor]} to="/about">
            About
          </Link>
        </nav> */}
        <nav>
          <Link css={[navigation, invisibleAnchor]} to="/tags">
            Tags
          </Link>
        </nav>
        {/* <nav>
          <Link css={[navigation, invisibleAnchor]} to="/archives">
            Archives
          </Link>
        </nav> */}
        <nav className="py-2">
          <Icon to="https://twitter.com/MominisJ" icon={faTwitter} />
          <Icon to="https://github.com/AumyF" icon={faGithub} />
        </nav>
      </div>
    </header>
  );
};

const navigation = tw`text-current`;

type HeaderIconProps = { icon: IconProp; to: string };

const Icon: React.FCX<HeaderIconProps> = ({ icon, to }) => (
  <AnchorOrLink
    {...{ to, alt: "icon" }}
    className="transition-colors text-3xl mx-1 text-gray-200 hover:text-fuchsia-black"
  >
    <FontAwesomeIcon {...{ icon }} />
  </AnchorOrLink>
);
