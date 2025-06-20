import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        code: ["CodeSaver", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
