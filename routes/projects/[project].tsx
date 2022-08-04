/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { PageProps } from "$fresh/server.ts";
import GeneralLayout from "../../components/layout/general_layout.tsx";
import { tw } from "@twind";
import JosefinImport from "../../components/utils/josefin.tsx";
import { GetProject } from "../../components/ProjectInfo.tsx";
import Code from "../../components/layout/code.tsx";

const Head = (props: { projectName: string; }) => (
  <head>
    <title>{props.projectName} - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
    <JosefinImport />
  </head>
);

export default function ProjectPage(props: PageProps) {
  const project = GetProject(decodeURI(props.params.project));
  return (
    <>
      {project &&
        <GeneralLayout
          activePath={`/projects/${project.title}`}
          head={<Head projectName={project.title} />}
        >
          <main
            className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[85vh]`}
          >
            <h1
              className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
            >
              418
            </h1>
            <p className={tw`my-6 tracking-[0.125em] font-thin`}>
              <span className={tw`text-red-500 font-medium`}>{project.title}'s</span>{" "}
              page is under development! Click{" "}
              <a href="/" className={tw`text-blue-400`}>here</a> to go home
            </p>
          </main>
        </GeneralLayout>
      }
      {!project &&
        <Code code={404}>
          <>
            There was no project found! Click{" "}
            <a href="/" className={tw`text-blue-400`}>here</a> to go home
          </>
        </Code>
      }
    </>
  );
}
