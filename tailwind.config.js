/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        main: "#10A5F5",
        dark: "#0073B0",
      },
      yellow: "#F9B712",
      black: "#000000",
      white: "#FDF5E2",
    },
    fontSize: {
      s: "8px",
      m: "12px",
      l: "14px",
      xl: "16px",
      hs: "50px",
      hm: "28px",
      hl: "36px",
    },
    extend: {
      spacing: {
        s: "4px",
        m: "8px",
        l: "16px",
        xl: "32px",
        xl: "48px",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.12)",
        md: "0px 4px 8px 0px rgba(16, 24, 40, 0.10)",
        lg: "1px 2px 2px 0px rgba(16, 24, 40, 0.08) inset",
      },
      fontFamily: {
        poppins: ["var(--font-super-foods)"],
      },
      borderRadius: {
        xs: "4px",
        s: "8px",
        m: "16px",
        l: "18px",
        rounded: "50%",
      },
      backgroundImage: {
        "secondary-gradient":
          "radial-gradient(390.66% 139.34% at 100% 0%, #FE7005 52.5%, #FFA901 100%)",
        "primary-gradient":
          "linear-gradient(196deg, #091567 43.25%, #0321CF 84.35%)",
      },
    },
  },
  plugins: [],
};
