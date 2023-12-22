// const withMT = require("@material-tailwind/react/utils/withMT");

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          "100": "rgba(255, 255, 255, 0.77)",
          "200": "rgba(255, 255, 255, 0.47)",
          "300": "rgba(255, 255, 255, 0.7)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.1)",
          // "100": "#888",
          // "200": "#2e2237",
          // "300": "rgba(255, 255, 255, 0.8)",
          "1400": "rgba(255, 255, 255, 0.2)",
          "1500": "rgba(255, 255, 255, 0.69)",
          "600": "rgba(255, 255, 255, 0.64)",
          "700": "rgba(255, 255, 255, 0.1)",
          "800": "rgba(255, 255, 255, 0.77)",
          "900": "rgba(255, 255, 255, 0.47)",
          "1000": "rgba(255, 255, 255, 0.7)",
        },
        white: "#fff",
        "half-white": "rgba(255, 255, 255, 0.5)",
        red: "#ff2525",  
        tomato: "#ff3535",
        
        lightgray: {
          "100": "#cfcfcf",
          "200": "rgba(204, 204, 204, 0.36)",
          "300": "rgba(214, 214, 214, 0.28)",
          "400": "rgba(215, 215, 215, 0.1)",
          "500": "rgba(209, 205, 205, 0.47)",
          "600": "rgba(217, 212, 212, 0.42)",
        },
        gainsboro: {
          "100": "rgba(230, 230, 230, 0.75)",
          "200": "rgba(222, 222, 222, 0.76)",
          // "100": "rgba(219, 219, 219, 0.19)",
          // "200": "rgba(227, 227, 227, 0.27)",
          "300": "rgba(230, 230, 230, 0.1)",
          "400": "rgba(219, 219, 219, 0.3)",
          "500": "rgba(219, 219, 219, 0.44)",
          "600": "rgba(230, 230, 230, 0.39)",
          "700": "rgba(222, 222, 222, 0.53)",
          "800": "rgba(222, 222, 222, 0.46)",
          "900": "rgba(226, 225, 225, 0.6)",
          "1000": "rgba(230, 230, 230, 0.75)",
          "1100": "rgba(222, 222, 222, 0.76)",
          "1200": "rgba(227, 227, 227, 0.18)",
        },
        orangered: {
          "100": "#ff3d02",
          "200": "#ff3d00",
          "300": "#ff3c01",
          "400": "#ff3c00",
          "500": "#f03800",
          "600": "#ef3800",
          "700": "#ea3700",
          "800": "#e83600",
          "900": "#e43500",
          "1000": "#db3300",
          "1100": "#d93300",
          "1200": "#d73200",
          "1300": "#d53200",
          "1400": "#d23100",
          "1500": "#c92f00",
        },
        buttom: "#ff5b29",
        orange: "#f94c10",
        firebrick: {
          "100": "#c72e00",
          "200": "#c12d00",
          "300": "#be2c00",
        },
        dimgray: {
          "100": "#6c5965",
          "200": "#493e52",
        },
        darkslategray: {
          "100": "#313554",
          "200": "rgba(47, 52, 84, 0.4)",
        },
        
      },
    },
  },
  plugins: [],
}

// module.exports = withMT({
//   content: ["./pages/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

export default config
