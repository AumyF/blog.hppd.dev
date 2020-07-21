/**@type import("gatsby").GatsbyConfig */
module.exports = {
  purge: [],
  theme: {
    screens: {
      md: "560px",
      lg: "960px",
      xl: "1024px",
    },
    extend: {
      lineHeight: {
        relaxed: "1.75",
      },
      height: {
        "min-content": "min-content",
      },
      width: {
        "min-content": "min-content",
      },
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  variants: {},
  plugins: [],
};
