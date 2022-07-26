/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import GeneralLayout from "../../components/layout/general_layout.tsx";
import { tw } from "@twind";

const Head = (props: { projectName: string }) => (
  <head>
    <title>{props.projectName} - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
  </head>
);

export default function ProjectPage(props: PageProps) {
  const project = decodeURI(props.params.project);
  return (
    <GeneralLayout
      activePath={"/projects/" + props.params.project}
      head={<Head projectName={project} />}
    >
      <main className={tw`h-screen`}>
        <p>Greetings to you, {project}!</p>
      </main>
    </GeneralLayout>
  );
}
