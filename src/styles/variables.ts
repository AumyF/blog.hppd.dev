import { css, SerializedStyles } from "@emotion/core";

export const colors = {};

export const generateVariables = (
  o: object,
  parents: string = ""
): string[] => {
  return Object.entries(o).flatMap(([k, v]) => {
    if (typeof v === "string") {
      return `-${parents}-${k}: ${v};`;
    } else {
      return generateVariables(v, `${parents}-${k}`);
    }
  });
};

export const _Variables = css`
  --dark: #1e1e21;
  --white: #d0d0d0;
  --color-text: var(--white);
  --color-accent-primary: #63b3ed;
  --color-sidebar-background: transparent;
`;

/**
 *
 * @example callVar("color") => "var(--color)"
 */
export const callVar = (name: string) => `var(--${name})`;

export const useScheme = (colorName: keyof Variables["scheme"]) =>
  `var(--scheme-${colorName})`;

type Variables = {
  scheme: {
    dark: string;
    white: string;
  };
};

export const Variables = generateVariables({
  scheme: {
    dark: "#1e1e21",
    lightgray: "#d0d0d0",
  },
  global: {
    text: callVar("scheme-lightgray"),
  },
  color: {
    accent: {
      primary: "#63b3ed",
    },
    sidebar: {
      background: "transparent",
    },
  },
});
