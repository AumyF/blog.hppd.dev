import scheme from "./colorScheme";

export const styleValues = {
  global: {
    text: scheme.silver,
    primaryAccent: scheme.blue,
    secondaryAccent: scheme.yellow,
    border: scheme.light,
    scrollbar: scheme.light + scheme.dark,
  },
  ContentHeader: { background: scheme.jet },
  main: {
    background: scheme.dark,
    borderRadius: "16px",
  },
  Card: {
    background: scheme.jet,
  },
} as const;
