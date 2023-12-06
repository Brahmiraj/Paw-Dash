/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "special": "2150px",
      }
    },
  },
  plugins: [],
}

// const withMT = require("@material-tailwind/react/utils/withMT");
// export default withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {screens: {
//               "special": "2150px",
//             }},
//   },
//   plugins: [],
// });
