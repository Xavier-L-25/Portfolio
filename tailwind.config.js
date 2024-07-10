/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nasalization: ["Nasalization", "sans-serif"],
        zekton: ["Zekton", "sans-serif"],
        effortless: ["Effortless", "sans-serif"],
        vezla: ["Vezla", "sans-serif"],
        neuropol: ["Neuropol", "sans-serif"],
        helmet: ["Helmet", "sans-serif"],
        forgotten: ["Forgotten", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
