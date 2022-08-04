/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { tw } from "@twind";
import JosefinImport from "../components/utils/josefin.tsx";
import GeneralLayout from "../components/layout/general_layout.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import GetProjects from "../components/ProjectInfo.tsx";
import TechCarousel from "../components/TechCarousel.tsx";
import Link from "../components/utils/link.tsx";
import ExternalLink from "../components/utils/externallink.tsx";

const Head = () => (
  <head>
    <title>Home - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
    <JosefinImport />
  </head>
);

export default function Home() {
  return (
    <GeneralLayout activePath="/" head={<Head />}>
      <main className={tw`pt-10 px-10 flex flex-col items-center text-center`}>
        <h1
          className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
        >
          Zackary Santana
        </h1>
        <p
          className={tw`my-6 uppercase font-josefin font-bold tracking-[0.125em]`}
        >
          A creative full-stack web developer
        </p>
        <TechCarousel />
        <div className={tw`sm:w-[30rem] my-8 w-full  before:content-['hi']`}>
          <p>
            Interested in my work? Head over to{" "}
            <Link to="#projects">my projects</Link>{" "}
            to find out more. I am a passionate developer that has worked with
            many different languages and frameworks (the carousel does not
            include everything that makes me great, check out my{" "}
            <ExternalLink
              to="/Zackary_Santana_Resume.pdf"
              className={tw`text-blue-400`}
            >
              resume
            </ExternalLink>)
          </p>
        </div>
        <div id="projects" className={tw`translate-y-[-55px]`}></div>
        <h1 className={tw`text-[2rem]`}>Projects</h1>
        <div className={tw`flex flex-wrap justify-center p-5`}>
          {GetProjects().map((p) => (
            <ProjectCard
              img={"/projects/" + p.img}
              imgAlt={"/projects/" + p.imgAlt}
              title={p.title}
              techs={p.techs}
              desc={p.desc}
              sub={p.sub}
              special={p.special}
            />
          ))}
        </div>
      </main>
    </GeneralLayout>
  );
}
