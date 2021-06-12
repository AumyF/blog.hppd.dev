import { chakra } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hyper } from "../../src/components/atoms/Hyper";

const LinkToGitHub: React.VFC<{
  owner: string;
  repo: string;
}> = ({ owner, repo }) => {
  return (
    <chakra.span
      display="inline-flex"
      justifyContent="space-evenly"
      gridGap="0.5"
    >
      <span>
        <FontAwesomeIcon icon={faGithub} />
      </span>
      <Hyper to={`https://github.com/${owner}`}>{owner}</Hyper>
      <chakra.span userSelect="none">/</chakra.span>
      <Hyper to={`https://github.com/${owner}/${repo}`}>{repo}</Hyper>
    </chakra.span>
  );
};

export default LinkToGitHub;
