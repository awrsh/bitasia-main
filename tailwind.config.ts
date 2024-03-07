import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark_blue:"#0f2336"
      },
      fontFamily: {
        "bold": "bold",
        "extrabold": "extrabold",
        "extrablack": "extrablack",
        "black": "black",
        "thin": "thin",
        "light": "light",
        "regular": "regular",
        "medium": "medium",
        "num": "num",
      }
    },
  },
  plugins: [],
};
export default config;
