import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/core";
import { Post } from "../../../types/graphqlTypes";

export type PostDateProps = Pick<Post, "path">;

export const PostDate: React.FCX<PostDateProps> = ({ path }) => (
  <div>
    <FontAwesomeIcon icon={faCalendarDay} />
    <span
      css={css`
        margin-left: 0.5rem;
      `}
    >
      {path}
    </span>
  </div>
);
