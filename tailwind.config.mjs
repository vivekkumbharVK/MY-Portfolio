"use client"
import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       lighthover:'#fcf4ff',
       darkhover: '#2a004a',
       darktheme:'#11001f'
      },
      fontFamily:{
        Outfit :["Outfit", "sans-serif"],
        Ovo :["Ovo", "serif"]
      },
      boxShadow:{
        'black':"4px 4px 0px #000", 
        'white':"4px 4px 0px #fff", 
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px,1fr))'
      }
    },
  },

  darkMode:'selector',

  plugins: [],
};
