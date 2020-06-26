import React from "react";
import styled from "@emotion/styled";

export const Heading1 = styled.h2`
  border-bottom: 1px solid var(--border);
  font-weight: 600;
  font-size: 2.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-feature-settings: "palt";
`;

export const Heading2 = Heading1;

export const Heading3 = styled.h3`
  font-size: 1.8rem;
`;

export const Heading4 = styled.h3`
  font-size: 1.5rem;
`;
