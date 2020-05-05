import scheme from "./colorScheme";

export const styleValues = {
  global: {
    text: scheme.gray,
    primaryAccent: scheme.blue,
    secondaryAccent: scheme.yellow,
    border: scheme.stone,
    scrollbar: scheme.stone + scheme.dark,
  },
  main: {
    background: scheme.dark,
    borderRadius: "16px",
  },
  Card: {
    background: scheme.shadow,
  },
} as const;
