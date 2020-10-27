/** @type {import("./src/@types/tailwindcss").TailwindPlugin.CreatePlugin}  */
const plugin = require("tailwindcss/plugin");

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
      borderRadius: {
        xl: ".75rem",
      },
      transitionProperty: {
        "text-decoration": "text-decoration",
      },
      transitionDuration: {
        50: "50ms",
      },
      height: {
        "min-content": "min-content",
      },
      width: {
        "min-content": "min-content",
        "max-content": "max-content",
      },
      minWidth: {
        0: "0",
      },
      colors: {
        mono: {
          100: "hsl(0, 0%, 10%)",
          200: "hsl(0, 0%, 17.5%)",
          250: "hsl(0, 0%, 25%)",
          400: "hsl(0, 0%, 40%)",
          500: "hsl(0, 0%, 50%)",
          700: "hsl(0, 0%, 70%)",
          800: "hsl(0, 0%, 75%)",
          900: "hsl(0, 0%, 90%)",
          950: "hsl(0, 0%, 95%)",
        },
        gray: {
          100: "hsl(260, 7.5%, 98%)",
          200: "hsl(260, 30%, 94%)",
          300: "hsl(260, 25%, 80%)",
          400: "hsl(260, 20%, 70%)",
          500: "hsl(260, 20%, 60%)",
          600: "hsl(260, 20%, 50%)",
          700: "hsl(260, 20%, 40%)",
          800: "hsl(260, 25%, 35%)",
          900: "hsl(260, 10%, 15%)",
        },
        fuchsia: {
          white: "hsl(343, 94%, 63%)",
          black: "hsl(343, 94%, 75%)",
        },
        error: "#db3008",
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
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
