/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: "hsl(180, 66%, 49%)", // buttons, icons
        200: "hsl(257, 27%, 26%)" // sections
      },
      error: "hsl(0, 87%, 67%)",
      secondary: {
        100: "hsl(230, 25%, 95%)", // sections
        200: "hsl(0, 0%, 75%)", // footer link text
        300: "hsl(257, 7%, 63%)", // paragraph text
        400: "hsl(255, 11%, 22%)", // headers
        500: "hsl(260, 8%, 14%)" // footers
      },
      white: "hsl(0, 0%, 100%)"
    },
    fontSize: {
      heading: {
        100: ["1rem", {
          lineHeight: "1rem",
          letterSpacing: "-0.015em",
          fontWeight: 700
        }], // mobile footer
        200: ["1.375rem", {
          lineHeight: "1.625rem",
          fontWeight: 700
        }], // card
        300: ["1.75rem", {
          lineHeight: "2.25rem",
          letterSpacing: "-0.025em",
          fontWeight: 700
        }], // mobile section
        400: ["2.5rem", {
          lineHeight: "3.25rem",
          letterSpacing: "-0.025em",
          fontWeight: 700
        }], // desktop section
        500: ["2.625rem", {
          lineHeight: "3rem",
          letterSpacing: "-0.025em",
          fontWeight: 700
        }], // mobile title
        600: ["5rem", {
          lineHeight: "5.5rem",
          letterSpacing: "-0.025em",
          fontWeight: 700
        }] // desktop title
      },
      normal: {
        100: ["0.9375rem", {
          lineHeight: "1.6rem",
          letterSpacing: "-0.01em",
          fontWeight: 400
        }], // footer
        200: ["0.9375rem", {
          lineHeight: "1.6rem",
          letterSpacing: "0.005em",
          fontWeight: 400
        }], // card
        300: ["1.125rem", {
          lineHeight: "2rem",
          letterSpacing: "0.01em",
          fontWeight: 400
        }], // section
        400: ["1.375rem", {
          lineHeight: "2.4rem",
          letterSpacing: "0.01em",
          fontWeight: 400
        }] // hero
      },
      error: {
        100: ["0.75rem", {
          lineHeight: "1.125rem",
          fontWeight: 400
        }], // mobile
        200: ["1rem", {
          lineHeight: "1.25rem",
          fontWeight: 400
        }] // desktop
      },
      nav: {
        100: ["1rem", {
          letterSpacing: "-0.025em",
          fontWeight: 700
        }], // mobile
        200: ["1.125rem", {
          letterSpacing: "-0.01em",
          fontWeight: 700
        }] // desktop
      },
      button: {
        100: ["0.9375rem", {
          letterSpacing: "0.015em",
          fontWeight: 700
        }],
        200: ["1.125rem", {
          fontWeight: 700
        }],
        300: ["1.25rem", {
          fontWeight: 700
        }]
      }
    }
  },
  plugins: [],
}
