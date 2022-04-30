module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^from-/,
    },
    {
      pattern: /^to-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
