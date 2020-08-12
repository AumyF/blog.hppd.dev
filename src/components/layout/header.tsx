import React from "react";
import { useSite } from "../../hooks/use-site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AnchorOrLink } from "../atoms/anchor-or-link";
import { Link } from "gatsby";
import tw from "twin.macro";
import { invisibleAnchor } from "../styles/styles";

export type SiteHeaderProps = {};

export const SiteHeader: React.FCX<SiteHeaderProps> = ({ className }) => {
  const { siteMetadata } = useSite();
  return (
    <header
      className={
        className + " bg-gray-100 text-gray-800 leading-tight text-center"
      }
    >
      <div className="flex container mx-auto px-4 items-center gap-2 justify-end">
        <div className="mr-auto flex items-center flex-wrap">
          <h1 className="text-3xl font-bold pr-2 ">
            <Link to="/" className="text-current no-underline">
              {siteMetadata?.title}
            </Link>
          </h1>
          <span className="pl-2 border-l-2 border-gray-700 ">
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
    className="transition-colors text-3xl mx-1 text-gray-900 hover:text-teal-500"
  >
    <FontAwesomeIcon {...{ icon }} />
  </AnchorOrLink>
);
