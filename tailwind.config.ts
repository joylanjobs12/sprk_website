import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // Custom breakpoints to match Responsive Design Rules exactly
      'xs': '0px',      // Extra Small (Mobile Phones, 0px – 575px)
      'sm': '576px',    // Small (Large Phones / Small Tablets, 576px – 767px)
      'md': '768px',    // Medium (Tablets Portrait, 768px – 991px)
      'lg': '992px',    // Large (Tablets Landscape / Small Laptops, 992px – 1199px)
      'xl': '1200px',   // Extra Large (Desktops / Wide Screens, 1200px – 1399px)
      '2xl': '1400px',  // Extra Extra Large (Large Desktops / TVs, 1400px and above)
    },
    extend: {
      // Add any other custom theme extensions here
    },
  },
  plugins: [],
}

export default config
