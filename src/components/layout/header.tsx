import React from "react";
import { useSite } from "../../hooks/use-site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AnchorOrLink } from "../atoms/anchor-or-link";
import { Link } from "gatsby";
import tw from "twin.macro";
import { invisibleAnchor } from "../styles/styles";
import svg from "../../../static/ftrf-logo.svg";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ className }) => {
  const { siteMetadata } = useSite();
  return (
    <header
      className={
        className + " text-gray-100 bg-gray-900 leading-tight text-center"
      }
    >
      <div className="flex container mx-auto px-4 items-center gap-2 justify-end">
        <div className="mr-auto flex items-center flex-wrap">
          <h1 className="text-3xl font-bold pr-2 ">
            <Link to="/" className="text-current no-underline">
              <img src={svg} alt="FortunateRicefield" />
            </Link>
          </h1>
          <span className="pl-2 border-l-2 border-gray-300 ">
            {siteMetadata?.description}
          </span>
        </div>
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
    className="transition-colors text-3xl mx-1 text-gray-300 hover:text-teal-500"
  >
    <FontAwesomeIcon {...{ icon }} />
  </AnchorOrLink>
);
