import React from "react";

export const Paragraph: React.FC<JSX.IntrinsicElements["p"]> = props => (
  <p className="my-4" {...props} />
);
