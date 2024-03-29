/** @jsx h */
import { ComponentChildren, Fragment, h, VNode } from "preact";
import { tw } from "@twind";
import Footer from "./general/footer.tsx";
import Navbar from "./general/navbar.tsx";

export default function GeneralLayout(
  props: { children: ComponentChildren; activePath: string; head?: VNode },
) {
  return (
    <Fragment>
      {props.head &&
        props.head}
      <div className={tw`pt-14 bg-onyx h-full min-h-screen text-white`}>
        <Navbar activePath={props.activePath} />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
}
