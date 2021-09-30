import { Flex } from "@chakra-ui/react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hatebu } from "../../images/hatena-bookmark";
import { Hyper } from "../atoms/Hyper";
import { useIconColor } from "../styles/colors";

export const Share: React.FC<{ url: string; title: string }> = ({
  url,
  title,
}) => {
  const iconColor = useIconColor();

  return (
    (url = encodeURIComponent(url)),
    (
      <Flex gridGap="2" alignItems="center" justifyContent="center">
        <Hyper
          color={iconColor}
          _hover={{ color: "#1da1f2" }}
          to={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}%20-%20HappyPaddy%3A%3ABlog&url=https%3A%2F%2Fblog.hppd.dev%2F${url}`}
        >
          <FontAwesomeIcon size="lg" icon={faTwitter} />
        </Hyper>
        <Hyper
          to={`https://b.hatena.ne.jp/entry?url=https%3A%2F%2Fblog.hppd.dev%2F${url}`}
          bg="transparent"
          color={iconColor}
          _hover={{ color: "#00a4de" }}
          p=".2rem"
          rounded=".25rem"
          w="24px"
        >
          <Hatebu />
        </Hyper>
      </Flex>
    )
  );
};
