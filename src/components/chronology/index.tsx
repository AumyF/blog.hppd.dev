import styled from "@emotion/styled";
import React from "react";
type Props = {};

export const Chronology: React.FC<Props> = styled.div`
  section {
    position: relative;
    padding-left: 4rem;
    padding-bottom: 1rem;
    ::before {
      /* ${tw`border-l-2 border-gray-200 absolute`} */
      height: 100%;
      left: 31px;
      content: "";
    }
    &:first-of-type::before {
      --top: 2rem;
      top: 2rem;
      height: calc(100% - var(--top));
    }
    &:last-of-type {
      padding-bottom: 4rem;
      &::before {
        --bottom: 2rem;
        bottom: var(--bottom);
        height: calc(100% - var(--bottom));
      }
    }
  }
`;

export const ChronologyTime = styled.div`
  /* ${tw`relative font-bold text-3xl`} */
  ::before {
    --circle-radius: 8.5px;
    --circle-diameter: calc(var(--circle-radius) * 2);
    /* ${tw`absolute bg-gray-300 my-auto border-white border-2`}; */
    width: var(--circle-diameter);
    height: var(--circle-diameter);
    top: calc(50% - var(--circle-radius));
    left: calc(-2rem - var(--circle-radius));
    content: "";
    border-radius: 50%;
  }
`;
export const ChronologyTitle: React.FC<{}> = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
export const ChronologyNote = styled.div``;
