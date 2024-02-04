import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': {
        100: '#C75AF6',
        DEFAULT: '#AD1FEA'
      },
      'secondary': {
        100: '#7C91F9',
        DEFAULT: '#4661E6', 
      },
      'tertiary': {
        100: '#656EA3',
        DEFAULT: '#3A4374', 
      },
      'violet': {
        100: '#C75AF6',
        200: '#AD1FEA',
      },
      'royal-blue': {
        100: '#F2F4FE',
        200: '#CFD7FF',
        300: '#8397F8',
        400: '#4661E6'
      },
      'slate-blue': {
        100: '#656EA3', 
        200: '#373F68',
        300: '#3A4374'
      },
      'red': {
        100: '#E98888 ',
        200: '#D73737'
      },
      'black': '#4661E6',
      'white': '#FFFFFF',
      'gray': {
        100: '#F7F8FD',
        200: '#F2F4FF',
        300: '#647196',
        400: '#979797',
      },
      'orange': '#F49F85',
      'sky-blue': '#62BCFA',
    },
    borderWidth: {
      '7': '7px'
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
