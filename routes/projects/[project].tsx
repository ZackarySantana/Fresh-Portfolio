/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import GeneralLayout from "../../components/layout/general_layout.tsx";
import { tw } from "@twind";
import JosefinImport from "../../components/utils/josefin.tsx";
import { GetProject } from "../../components/ProjectInfo.tsx";

const Head = (props: { projectName: string }) => (
  <head>
    <title>{props.projectName} - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
    <JosefinImport />
  </head>
);

export default function ProjectPage(props: PageProps) {
  const project = GetProject(decodeURI(props.params.project));
  return (
    <GeneralLayout
      activePath={"/projects/" + props.params.project}
      head={<Head projectName={project?.title || "404"} />}
    >
      {project &&
        (
          <main
            className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[85vh]`}
          >
            <h1
              className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
            >
              418
            </h1>
            <p className={tw`my-6 font-josefin tracking-[0.125em]`}>
              <span className={tw`text-green`}>{project}</span>{" "}
              page is under development! Click{" "}
              <a href="/" className={tw`text-blue-400`}>here</a> to go home
            </p>
          </main>
        )}
      {!project &&
        (
          <main
            className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[85vh]`}
          >
            <h1
              className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
            >
              404
            </h1>
            <p className={tw`my-6 font-josefin tracking-[0.125em]`}>
              {project} page is under development! Click{" "}
              <a href="/" className={tw`text-blue-400`}>here</a> to go home
            </p>
          </main>
        )}
    </GeneralLayout>
  );
}
