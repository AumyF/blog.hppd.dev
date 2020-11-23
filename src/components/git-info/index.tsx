import React from "react";

import { useLatestCommit } from "./useLatestCommit";

export type GitInfoProps = { filePath: string };

export const GitInfo: React.FC<GitInfoProps> = ({ filePath: path }) => {
  path = `${path}/index`;
  const {
    data: { lastUpdate, message, url },
    errMessage,
    isError,
    isLoading,
  } = useLatestCommit(path);
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <span className="text-error">{`Error: ${errMessage}`}</span>
      ) : (
        <>
          <table className="my-2">
            <tbody>
              <Raw {...{ head: "Last Update", data: lastUpdate }} />
              <Raw {...{ head: "Message", data: message }} />
              <Raw
                {...{
                  head: "Hash",
                  data: <a href={url}>{url.split("/").pop()?.substr(0, 7)}</a>,
                }}
              />
            </tbody>
          </table>
          <a
            className="block text-center"
            href={`https://github.com/AumyF/blog/blob/master/posts/${path}.mdx`}
          >
            View source on GitHub
          </a>
        </>
      )}
    </div>
  );
};

const Raw: React.FC<{ data: React.ReactNode; head: string }> = props => (
  <tr>
    <th className="text-text p-1 pl-2 text-left border-r border-border">
      {props.head}
    </th>
    <td className="text-weak p-1 pl-2 break-all">{props.data}</td>
  </tr>
);
