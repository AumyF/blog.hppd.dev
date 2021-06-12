import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Hyper } from "../atoms/Hyper";

export const Author: React.FC = () => (
  <>
    <Flex my="4" alignItems="center" gridGap="1rem">
      <Avatar></Avatar>
      <Box>
        <Box mb="1">Aumy / おーみー</Box>
        <Flex gridGap="2">
          <Hyper
            color="gray.300"
            _hover={{ color: "#1da1f2" }}
            to="https://twitter.com/aumy_f"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </Hyper>
          <Hyper
            color="gray.300"
            _hover={{ color: "gray.100" }}
            to="https://github.com/aumyf"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </Hyper>
        </Flex>
      </Box>
    </Flex>
    <Text fontSize="0.9rem" textAlign="justify">
      2003年，横浜市生れ．小学生ごろからプログラミングに触れる．
      ビジネス，プロダクトとかよりもコンピュータの理論やオープンソースの文化が好き．
    </Text>
  </>
);
