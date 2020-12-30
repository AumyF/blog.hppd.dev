import {
  Skeleton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
  VStack,
} from "@chakra-ui/react";
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
  | {
      lastUpdate?: string;
      message?: string;
      path?: string;
      status: "Loading";
      url?: string;
    };

const Plain: React.FC<PlainProps> = props => {
  if (props.status === "Error") return <Text>{props.errMessage}</Text>;
  return (
    <VStack wordBreak="break-all" spacing=".5rem">
      {
        <>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Th>Date</Th>
                <Td>
                  <Skeleton isLoaded={props.status === "Success"}>
                    {props.lastUpdate}
                  </Skeleton>
                </Td>
              </Tr>
              <Tr>
                <Th>Message</Th>
                <Td>
                  <Skeleton isLoaded={props.status === "Success"}>
                    {props.message}
                  </Skeleton>
                </Td>
              </Tr>
              <Tr>
                <Th>Hash</Th>
                <Td>
                  <Skeleton isLoaded={props.status === "Success"}>
                    <Hyper to={props.url ?? ""}>
                      {props.url?.split("/").pop()?.substr(0, 7)}
                    </Hyper>
                  </Skeleton>
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
      }
    </VStack>
  );
};

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
