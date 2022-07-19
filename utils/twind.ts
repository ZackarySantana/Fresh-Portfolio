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
        },
    },
};
if (IS_BROWSER) setup(config);
