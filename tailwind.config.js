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

// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}