import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#422833",
        "brand-navy": "#1E3A8A",
        "brand-teal": "#61C9A8",
        "brand-maroon": "#5A3E49",
      },
    },
  },
  plugins: [],
};
export default config;
