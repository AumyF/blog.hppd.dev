import homura from "./colorScheme"

export const styleValues = {
  global: {
    text: homura.gray,
    primaryAccent: homura.blue,
    secondaryAccent: homura.yellow,
    border: homura.stone,
  },
  main: {
    background: homura.dark,
    borderRadius: "16px",
  },
  Card: {
    background: homura.shadow,
  },
} as const
