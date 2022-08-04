/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import Code from "../../components/layout/code.tsx";

export default function ProjectMainPage() {
  return (
    <Code code={418} title="Projects">
      <>
        This page is under development! Click{" "}
        <a href="/" className={tw`text-blue-400`}>here</a> to go home
      </>
    </Code>
  );
}
