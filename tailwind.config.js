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
      transitionDuration: {
        "50": "50ms",
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
      addUtilities(contents, { variants: ["hover", "responsive"] });
    }),
    plugin(({ addUtilities }) => {
      const underlineThickness = {
        ".underline-1": {
          textDecorationThickness: "1px",
        },
        ".underline-2": {
          textDecorationThickness: "2px",
        },
      };
      addUtilities(underlineThickness, {
        variants: ["hover", "responsive"],
      });
    }),
  ],
};
