import { Flex, Image } from "@chakra-ui/react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Hatena from "../../images/hatena-bookmark.svg";
import { Hyper } from "../atoms/Hyper";

export const Share: React.FC<{ url: string }> = ({ url }) => (
  (url = encodeURIComponent(url)),
  (
    <Flex gridGap="2" alignItems="center" justifyContent="center">
      <Hyper
        to={`https://twitter.com/intent/tweet?text=HappyPaddy%3A%3ABlog&url=https%3A%2F%2Fblog.hppd.dev%2F${url}`}
      >
        <FontAwesomeIcon color="#1da1f2" size="lg" icon={faTwitter} />
      </Hyper>
      <Hyper
        to={`https://b.hatena.ne.jp/entry?url=https%3A%2F%2Fblog.hppd.dev%2F${url}`}
        bg="#00a4de"
        p=".3rem"
        rounded=".25rem"
        w="24px"
      >
        <Image src={Hatena} />
      </Hyper>
    </Flex>
  )
);
