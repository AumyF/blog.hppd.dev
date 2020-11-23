import { css } from "@emotion/core";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

export type PostDateProps = {
  path: string;
};

export const PostDate: React.FCX<PostDateProps> = ({ className, path }) => (
  <div className={clsx("inline ", className)}>
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
