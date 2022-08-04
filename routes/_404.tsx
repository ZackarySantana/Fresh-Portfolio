/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import Code from "../components/layout/code.tsx";

export default function NotFound() {
  return (
    <Code code={404}>
      <>
        There was no page found! Click{" "}
        <a href="/" className={tw`text-blue-400`}>here</a> to go home
      </>
    </Code>
  );
}