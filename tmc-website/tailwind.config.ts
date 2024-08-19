import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '4K': '2560px',
        'Laptop-L': '1440px',
        'Laptop': '1024px',
        'Tablet': '768px',
        'Mobile-L': '425px',
        'Mobile-M': '375px',
        'Mobile-S': '320px',
      },
    },
  },
  plugins: [],
};
export default config;
