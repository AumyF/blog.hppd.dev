import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: { initialColorMode: "dark" },
  colors: {
    gray: {
      50: "#F9F9FD",
      100: "#F0F1F8",
      200: "#E7E6F1",
      300: "#D2D3E3",
      400: "#ABAAC3",
      500: "#7F7C9A",
      600: "#55516A",
      700: "#37344A",
      800: "#211E2D",
    },
    purple: { 990: "#1a1723" },
  },
  components: {
    Table: {
      variants: {
        simple: () => ({
          th: { color: "gray.400", borderColor: "gray.600" },
          td: { borderColor: "gray.600" },
        }),
      },
    },
    Link: {
      baseStyle: {
        color: "pink.400",
      },
    },
    Container: { baseStyle: { px: ["0", "1rem"] } },
  },
});

export default theme;
