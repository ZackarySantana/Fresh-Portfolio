import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
    darkMode: "class",
    mode: "silent",

    theme: {
        extend: {
            colors: {
                celeste: "#BAF2E9",
                cadet: "#5D737E",
                onyx: "#3F4045",
            },
            fontFamily: {
                josefin: '"Josefin Sans",sans-serif',
            },
            animation: {
                "across-screen": "across-screen 20s linear infinite",
                "across-small-screen":
                    "across-small-screen 20s linear infinite",
            },
            keyframes: {
                "across-screen": {
                    "0%": { opacity: "0" },
                    "40%": { opacity: "1" },
                    "80%": {
                        opacity: "0",
                        transform: "translate(calc(-100vw + 75px), 0)",
                    },
                },
                "across-small-screen": {
                    "0%": { opacity: "0" },
                    "25%": { opacity: "1" },
                    "50%": {
                        opacity: "0",
                        transform: "translate(calc(-100vw + 40px), 0)",
                    },
                },
            },
        },
    },
};

if (IS_BROWSER) setup(config);
