/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../../components/layout/general_layout.tsx";

const Head = () => (
  <head>
    <title>Projects - Zackary's Portfolio</title>
    <meta type="description" content="Zackary Santana's custom portfolio!" />
  </head>
);

export default function ProjectMainPage() {
  return (
    <GeneralLayout activePath="/projects" head={<Head />}>
      <main>
        <p>Hey projects</p>
      </main>
    </GeneralLayout>
  );
}
