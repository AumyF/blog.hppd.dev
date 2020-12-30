import { useEffect, useReducer } from "react";

import { panic } from "../../utils/panic";

type User = { date: string; email: string; name: string };

type LatestCommit = {
  commit: {
    author: User;
    committer: User;
    message: string;
  };
  html_url: string;
  node_id: string;
  sha: string;
};

type Data = {
  lastUpdate: string;
  message: string;
  url: string;
};

type State = {
  data: Data;
  errMessage: string;
  isError: boolean;
  isLoading: boolean;
};

type Action =
  | { type: "FETCH_START" }
  | { message: string; type: "FETCH_FAILURE" }
  | { payload: Data; type: "FETCH_SUCCESS" };

const latestCommitReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isError: false, isLoading: true };
      break;
    case "FETCH_SUCCESS":
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isError: true,
        isLoading: false,
        errMessage: action.message,
      };
  }
};

export const useLatestCommit = (filePath: string): State => {
  const [state, dispatch] = useReducer(latestCommitReducer, {
    isLoading: false,
    isError: false,
    errMessage: "",
    data: {
      lastUpdate: "None",
      message: "None",
      url: "",
    },
  });

  useEffect(() => {
    const fetchLatestCommit = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch(
          `https://api.github.com/repos/AumyF/blog/commits?path=posts/${encodeURIComponent(
            filePath
          )}.mdx&page=1&per_page=1`
        );

        const [
          {
            commit: {
              committer: { date: lastUpdate },
              message,
            },
            html_url: url,
          },
        ] = response.ok
          ? await (response.json() as Promise<[LatestCommit]>)
          : panic(new Error(`${response.status} ${response.statusText}`));

        dispatch({
          type: "FETCH_SUCCESS",
          payload: { url, lastUpdate, message },
        });
      } catch (error) {
        dispatch({
          type: "FETCH_FAILURE",
          message: `${error.name}: ${error.message}`,
        });
      }
    };

    fetchLatestCommit();
  }, []);
  return state;
};
