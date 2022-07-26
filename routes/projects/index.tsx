/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../../components/layout/general_layout.tsx";
import { tw } from "@twind";
import JosefinImport from "../../components/utils/josefin.tsx";

const Head = () => (
  <head>
    <title>Projects - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
    <JosefinImport />
  </head>
);

export default function ProjectMainPage() {
  return (
    <GeneralLayout activePath="/projects" head={<Head />}>
      <main
        className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[85vh]`}
      >
        <h1
          className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
        >
          418
        </h1>
        <p className={tw`my-6 font-josefin tracking-[0.125em]`}>
          This page is under development! Click{" "}
          <a href="/" className={tw`text-blue-400`}>here</a> to go home
        </p>
      </main>
    </GeneralLayout>
  );
}
