module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      //mobile
      xs: "319px",
      // => @media (min-width: 320px) { ... }
      //=> يعني أقل حاجة باش تخدم علاهي هي 320 بيكسل اقل من اكاكة متخدمش

      md: "575px",
      // => @media (min-width: 570px) { ... }
      //tablet:


      lg: "682px",
      // => @media (min-width: 670px) { ... }

      //laptop
      xl: "769px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1025px",
      // => @media (min-width: 1536px) { ... }
      //4k
      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
    },
    extend: {
      backgroundImage: {
        js: "url('/my-app/src/images/bg-js.jpeg')",
      },

      width: {
        // => technologie in the screen XS 320px
        "2xw": "24rem",
        // => About Me in the screen XS 320px
        axw: "310px",
        // => home page in the screen MD 571px
        mdw: "101vw",
        // => home page in the screen xl 320px
        xlw: "150vw",
        // => about me in the screen md 
        mdw: "39rem",
      },

      margin:{
        xlm:"40rem",
      },

      height: {
        xh: "450px",
        // => home page in the screen XS 320px
        hpxs: "50.25rem",
        // => technologie in the screen XS 320px
        txs: "1050px",
        // => Home page in the screen SM 375px
        hpsm: "46.8rem",
      },
      gridRowStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        16: "16",
        18: "18",
        20: "20",
      },
      gridRowEnd: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        16: "16",
        18: "18",
        20: "20",
      },
      gridColStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        16: "16",
        18: "18",
        20: "20",
      },
      gridColEnd: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        16: "16",
        18: "18",
        20: "20",
      },
      gridTemplateColumns: {
        // Simple 20 column grid
        7: "repeat(7, minmax(0, 200px))",
        8: "repeat(8, minmax(0, 200px))",
        9: "repeat(9, minmax(0, 200px))",
        10: "repeat(10, minmax(0, 200px))",
        12: "repeat(12, minmax(0, 200px))",
        14: "repeat(14, minmax(0, 200px))",
        16: "repeat(16, minmax(0, 200px))",
        18: "repeat(18, minmax(0, 200px))",
        20: "repeat(20, minmax(0, 200px))",
      },
      gridTemplateRows: {
        // Simple 20 row grid
        7: "repeat(7, minmax(0, 150px))",
        8: "repeat(8, minmax(0, 150px))",
        9: "repeat(9, minmax(0, 150px))",
        10: "repeat(10, minmax(0, 150px))",
        12: "repeat(12, minmax(0, 150px))",
        14: "repeat(14, minmax(0, 150px))",
        16: "repeat(16, minmax(0, 150px))",
        18: "repeat(18, minmax(0, 150px))",
        20: "repeat(20, minmax(0, 150px))",
      },
      animation: {
        steps: "type 2s steps(40,end) forwards",
        shring:
          "shring-animation 2.2s steps(40,end) 2s forwards, blink .5s step-end infinite alternate",
      },
      keyframes: {
        shring: {
          "0%": {
            backgroundPosition: "0 0",
            opacity: "0",
            width: "0",
          },
          "1%": {
            backgroundPosition: " 0 0",
            opacity: "1",
            borderRight: "1px solid orange",
          },
          "50%": {
            backgroundPosition: "150px 0",
            opacity: "1",
            borderRight: "1px solid orange",
          },
          "100%": {
            backgroundPosition: "400px 0",
            opacity: "1",
            borderRight: "1px solid orange",
          },
        },

        steps: {
          "0%": {
            width: "0",
          },
          "1%, 99%": {
            borderRight: "1px solid orange",
          },
          "100%": {
            borderRight: "none",
          },
        },

        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-img": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-90deg)" },
          "50%": { transform: "rotate(-180deg)" },
          "75%": { transform: "rotate(-270 deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1.1)",
          },
        },
        spin: {
          "100%": { "-webkit-transform": "rotate(360deg)" },
        },
      },
      // eslint-disable-next-line no-dupe-keys
      animation: {
        "spin-slow": "spin-slow 13s linear infinite",
        "rotate-img": "rotate-img 13s linear infinite",
        blob: "blob 1.5s infinite",
        spin: "spin 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
