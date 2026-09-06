/** @type {import('tailwindcss').Config} */
const withAlpha = (name) =>
  `color-mix(in oklab, var(${name}) calc(<alpha-value> * 100%), transparent)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withAlpha("--background"),
        foreground: withAlpha("--foreground"),
        card: withAlpha("--card"),
        primary: {
          DEFAULT: withAlpha("--primary"),
          foreground: withAlpha("--primary-foreground"),
        },
        secondary: {
          DEFAULT: withAlpha("--secondary"),
          foreground: withAlpha("--secondary-foreground"),
        },
        muted: {
          DEFAULT: withAlpha("--muted"),
          foreground: withAlpha("--muted-foreground"),
        },
        destructive: withAlpha("--destructive"),
        border: withAlpha("--border"),
        ring: withAlpha("--ring"),
        amber: withAlpha("--amber"),
        good: withAlpha("--good"),
        easy: withAlpha("--easy"),
      },
      fontFamily: {
        heading: ["Georgia", "Yu Mincho", "serif"],
      },
    },
  },
  plugins: [],
};

