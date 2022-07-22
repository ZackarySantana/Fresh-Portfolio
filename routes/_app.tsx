/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import Analytics from "../islands/Analytics.tsx";

export default function App(props: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="New Grad, Portfolio, Projects, Web Development, Node.js, React.js, Remix.js, CSS, Developer, Coder, Programmer, Programming, Languages, Software, Zackary Santana"
                />

                {/* Other Meta Tags */}
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Images */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />

                <link
                    rel="stylesheet"
                    href="styles.css"
                />
            </Head>
            <props.Component />
            {/* <Analytics /> */}
        </>
    );
}