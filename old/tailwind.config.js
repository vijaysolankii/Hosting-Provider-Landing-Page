/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "5.5rem",
        h2: "4.5rem",
        h3: "3.28rem",
        h4: "2.46rem",
        h5: "1.84rem",
        p: "1rem",
      },
      colors: {
        cyan: {
          DEFAULT: "#0c8bfd",
          light: "#0c8bfdb3",
        },
        black: {
          DEFAULT: "#111010",
          dark: "#1d1c1c",
          light: "#292828",
          semi: "#3e3d3d",
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
