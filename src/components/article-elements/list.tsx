import React from "react";
import { css } from "@emotion/core";

export const UnorderedList = (props: JSX.IntrinsicElements["ul"]) => (
  <ul
    css={css`
      list-style: disc;
    `}
    className="list-disc py-1 px-2 pl-8"
    {...props}
  />
);

export const OrderedList = (props: JSX.IntrinsicElements["ol"]) => (
  <ol className="list-decimal py-1 px-2 pl-8" {...props} />
);
