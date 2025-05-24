import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    screens: {
      xs: "450px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      xxl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        dmSans: "var(--font-dmSans)",
        openSans: "var(--font-openSans)",
        bricolage: "var(--font-bricolage)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        warning: "#EED202",
        warning100: "#FAF8E0",
        neutralBase: "#F7F7F7",
        neutrals100: "#EAEAEA",
        neutrals200: "#CCCBCB",
        neutrals300: "#B5B3B3",
        neutrals400: "#CECECE",
        neutrals500: "#898384",
        neutrals600: "#726C6C",
        neutrals700: "#5A5555",
        neutrals800: "#373737",
        neutrals900: "#2B2829",
        primary: "#0E7A99",
        primary100: "#E7F2F5",
        primary200: "#DFF0D7",
        primary600: "#55A132",
        secondary: "#4D76CE",
        secondary200: "#DBE4F5",
        error100: "#FBE8E8",
        error200: "#D00416",
        error900: "#DD0000",
      },
      backgroundImage: {
        home_hero: "url('/1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
