import { Table, Tbody, Td, Text, Th, Tr, VStack } from "@chakra-ui/react";
import React from "react";

import { Hyper } from "../atoms/Hyper";
import { useLatestCommit } from "./useLatestCommit";

export type GitInfoProps = { filePath: string };

type PlainProps =
  | { errMessage: string; status: "Error" }
  | {
      lastUpdate: string;
      message: string;
      path: string;
      status: "Success";
      url: string;
    }
  | { status: "Loading" };

const Plain: React.FC<PlainProps> = props => (
  <VStack spacing=".5rem">
    {props.status === "Error" ? (
      <Text>{props.errMessage}</Text>
    ) : props.status === "Loading" ? (
      <Text>Loading...</Text>
    ) : (
      <>
        <Table className="my-2" size="sm">
          <Tbody>
            <Tr>
              <Th>Date</Th>
              <Td>{props.lastUpdate}</Td>
            </Tr>
            <Tr>
              <Th>Message</Th>
              <Td>{props.message}</Td>
            </Tr>
            <Tr>
              <Th>Hash</Th>
              <Td>
                <Hyper to={props.url}>
                  {props.url.split("/").pop()?.substr(0, 7)}
                </Hyper>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Hyper
          textAlign="center"
          display="block"
          to={`https://github.com/AumyF/blog/blob/master/posts/${props.path}.mdx`}
        >
          View source on GitHub
        </Hyper>
      </>
    )}
  </VStack>
);

export const GitInfo: React.FC<GitInfoProps> = ({ filePath: path }) => {
  path = `${path}/index`;
  const {
    data: { lastUpdate, message, url },
    errMessage,
    isError,
    isLoading,
  } = useLatestCommit(path);

  const status = isError ? "Error" : isLoading ? "Loading" : "Success";

  return <Plain {...{ lastUpdate, message, url, errMessage, status, path }} />;
};
