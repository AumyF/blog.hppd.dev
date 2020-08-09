/** @type {import("./src/@types/tailwindcss").TailwindPlugin.CreatePlugin}  */
const plugin = require("tailwindcss/plugin");

/** @type import("gatsby").GatsbyConfig */
module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "560px",
      md: "768px",
      lg: "960px",
      xl: "1024px",
    },
    extend: {
      lineHeight: {
        relaxed: "1.75",
      },
      transitionProperty: {
        "text-decoration": "text-decoration",
      },
      height: {
        "min-content": "min-content",
      },
      width: {
        "min-content": "min-content",
      },
      minWidth: {
        "0": "0",
      },
      colors: {
        white: "var(--white)",
        foreground: {
          dark: "var(--foreground-dark)",
          neutral: "var(--foreground-neutral)",
          light: "var(--foreground-weak)",
        },
        background: "var(--background)",
        primary: "var(--primary-neutral)",
        secondary: "var(--secondary-neutral)",
        border: "var(--border)",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      const contents = {
        ".contents": {
          display: "contents",
        },
      };
      addUtilities(contents, ["responsive"]);
    }),
  ],
};
