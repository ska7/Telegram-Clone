module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      colors: {
        "sidebar-gray": "rgb(33, 33, 33)",
        "dark-grey": "#0f0f0f",
      },
    },
  },
  plugins: [],
};
