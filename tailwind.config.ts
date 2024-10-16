import type { Config } from 'tailwindcss';
import { colors, white, black, currentColor, transparent } from './src/tokens/colors'; //here we are importing the custom colors from the colors.css file

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'], //Can use a data attribute if dark is already being used

  theme: { //This is how we can contract the styles available for your design
    colors: {
      ...colors,
      white, 
      black,
      transparent,
      currentColor,
    },
    extend: {
      fontFamily: {
        sans: [ 'Inter Variable', 'sans-serif'],
      }
    }
  },
  plugins: [],
} satisfies Config;
