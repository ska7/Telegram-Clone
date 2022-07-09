module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      "2xxl": "22px",
    },
    extend: {
      flex: {
        2: "2",
        3: "3",
        4: "4",
        6: "6",
        8: "8",
      },
      colors: {
        "sidebar-gray": "rgb(33, 33, 33)",
        gray: "rgb(170,170,170);",
        "light-grey": "rgb(48, 48, 48)",
        "dark-grey": "#0f0f0f",
      },
    },
  },
  plugins: [],
};