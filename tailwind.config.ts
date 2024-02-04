import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'violet': {
        100: '#C75AF6',
        200: '#AD1FEA',
      },
      'royal-blue': {
        100: '#F2F4FE',
        200: '#CFD7FF',
        300: '#4661E6'
      },
      'slate-blue': {
        100: '#656EA3', 
        200: '#373F68'
      },
      'red': {
        100: '#E98888 ',
        200: '#D73737'
      },
      'black': '#4661E6',
      'white': '#FFFFFF',
      'med-gray': '#F2F4FF', 
      'light-gray': '#F7F8FD',
      'med-blue': '#3A4374',
      'dark-gray': '#647196',
      'orange': '#F49F85',
      'sky-blue': '#62BCFA',
      
    },
    extend: {
      fontSize: {
        'lg': '16px',
        'base': '15px',
        'sm': '13px'
      }

    },
  },
  plugins: [],
};
export default config;
