import { useReducer, useEffect } from "react";
import { panic } from "../../utils/panic";

type User = { name: string; email: string; date: string };

type LatestCommit = {
  sha: string;
  node_id: string;
  html_url: string;
  commit: {
    author: User;
    committer: User;
    message: string;
  };
};

type Data = {
  lastUpdate: string;
  message: string;
  url: string;
};

type State = {
  isLoading: boolean;
  isError: boolean;
  data: Data;
  errMessage: string;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_FAILURE"; message: string }
  | { type: "FETCH_SUCCESS"; payload: Data };

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
            html_url: url,
            commit: {
              message,
              committer: { date: lastUpdate },
            },
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
