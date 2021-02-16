const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        dark: {
          blue: "#577399"
        },
        blue: {
          light: "#ddfff7",
          DEFAULT: "#93E1d8"
        },
        pink: {
          DEFAULT: "#ffA69e",
        },
        red: {
          DEFAULT: "#aa4465",
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
    },
  },
};