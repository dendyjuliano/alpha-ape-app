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
      primary: "#0102FA",
      secondary: "#10A5F5",
      black: "#0D0A00",
      white: "#FFFFFF",
    },
    fontSize: {
      s: "8px",
      m: "12px",
      l: "14px",
      xl: "16px",
      "4hl": "80px",
      "3hl": "42px",
      "2hl": "39px",
      hm: "29px",
      hs: "24px",
      hp: "20px",
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
        poppins: ["var(--font-rammetto-one)"],
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
