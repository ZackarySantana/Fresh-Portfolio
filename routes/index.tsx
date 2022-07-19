/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import GeneralLayout from "../components/layout/general_layout.tsx";

const Head = () => (
    <head>
        <title>Home - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
        <link rel="stylesheet" id="google-fonts-css" href="//fonts.googleapis.com/css?family=Josefin+Sans%3A700%2C400%2C100%7CTitillium+Web%3A400%2C700%2C400italic%2C700italic" type="text/css" media="all"></link>
    </head>
);

export default function Home() {
    return (
        <GeneralLayout activePath="/" head={<Head />}>
            <div className={tw`pt-10 px-10 flex flex-col items-center`}>
                <h1 className={tw`text-[5rem] font-thin uppercase font-josefin`}>Zackary Santana</h1>
                <p class={tw`my-6 uppercase font-josefin font-bold tracking-[0.125em]`}>A creative full-stack web developer</p>
                <Counter start={3} />
            </div>
        </GeneralLayout>
    );
}