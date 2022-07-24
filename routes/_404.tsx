/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../components/layout/general_layout.tsx";
import { tw } from "@twind";

const Head = () => (
  <head>
    <title>404 - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Josefin+Sans%3A700%2C400%2C100%7CTitillium+Web%3A400%2C700%2C400italic%2C700italic"
      type="text/css"
      media="all"
    />
  </head>
);

export default function AboutPage() {
  return (
    <GeneralLayout activePath="/404" head={<Head />}>
      <main
        className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[60vh]`}
      >
        <h1
          className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
        >
          404
        </h1>
        <p className={tw`my-6 font-josefin tracking-[0.125em]`}>
          There was no page found! Click{" "}
          <a href="/" className={tw`text-blue-400`}>here</a> to go home
        </p>
      </main>
    </GeneralLayout>
  );
}
