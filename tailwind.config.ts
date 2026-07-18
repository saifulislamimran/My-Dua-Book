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
        "background": "#f7f9ff",
        "foreground": "var(--foreground)",
        "primary": "#422833",
        "primary-container": "#5a3e49",
        "secondary": "#006b54",
        "on-primary": "#ffffff",
        "on-primary-container": "#cfaab7",
        "surface": "#f7f9ff",
        "surface-container": "#ebeef3",
        "surface-container-high": "#e5e8ee",
        "surface-container-highest": "#e0e3e8",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#f7f9ff",
        "surface-tint": "#745661",
        "secondary-fixed": "#8ef6d3",
        "secondary-fixed-dim": "#72d9b7",
        "inverse-on-surface": "#eef1f6",
        "tertiary-container": "#5a3f3a",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "outline": "#807477",
        "outline-variant": "#d2c3c6",
        "on-surface-variant": "#4e4447",
        "inverse-surface": "#2d3135",
        "on-surface": "#181c20",
        "brand-navy": "#1E3A8A",
        "brand-teal": "#61C9A8",
        "brand-maroon": "#5A3E49",
      },
      spacing: {
        "lg": "24px",
        "xs": "4px",
        "container-padding": "20px",
        "xl": "32px",
        "md": "16px",
        "base": "8px",
        "sm": "12px",
        "grid-gutter": "16px"
      },
      fontFamily: {
        "title-md": ["var(--font-inter)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "label-lg": ["var(--font-inter)", "sans-serif"],
        "display-sm": ["var(--font-inter)", "sans-serif"],
        "headline-lg": ["var(--font-inter)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-inter)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "label-md": ["var(--font-inter)", "sans-serif"],
        "arabic": ["var(--font-amiri)", "serif"],
        "sans": ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "title-md": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "headline-lg-mobile": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "label-lg": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "label-md": ["11px", {"lineHeight": "14px", "fontWeight": "500"}],
        "display-sm": ["30px", {"lineHeight": "38px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      }
    },
  },
  plugins: [],
};
export default config;
