/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";
import Footer from "./general/footer.tsx";
import Navbar from "./general/navbar.tsx";

export default function GeneralLayout(props: { children: ComponentChildren; activePath: string; }) {
    return (
        <div className={tw`pt-14 bg-onyx h-full min-h-screen text-celeste`}>
            <Navbar activePath={props.activePath} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}