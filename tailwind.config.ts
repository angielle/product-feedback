import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      violet: '#AD1FEA',
      'royal-blue': '#4661E6',
      black: '#4661E6',
      white: '#FFFFFF',
      'med-gray': '#F2F4FF',
      'light-gray': '#F7F8FD',
      'med-blue': '#3A4374',
      'dark-gray': '#647196',
      orange: '#F49F85',
      'sky-blue': '#62BCFA'
    },
    extend: {
      backgroundImage: {
        // 'desktop-bg': "url('./public/assets/shared/desktop/background-header.png')"
      },

    },
  },
  plugins: [],
};
export default config;
