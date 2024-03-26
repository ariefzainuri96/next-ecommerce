import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fa00ff",
          secondary: "#00a300",
          accent: "#00c0ff",
          neutral: "#2b2b2b",
          "base-100": "#ffffff",
          info: "#00c2ff",
          success: "#739500",
          warning: "#ffaf00",
          error: "#ff708e",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
