/** @jsx h */
import { h, VNode } from "preact";
import GeneralLayout from "./general_layout.tsx";
import { tw } from "@twind";
import JosefinImport from "../utils/josefin.tsx";

const Head = (props: { code: string | number; }) => (
    <head>
        <title>{props.code} - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
        <JosefinImport />
    </head>
);

export default function Code(props: { code: number; title?: string; children: VNode; }) {
    return (
        <GeneralLayout activePath={`/${props.title || props.code}`} head={<Head code={props.title || props.code} />}>
            <main
                className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[85vh]`}
            >
                <h1
                    className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
                >
                    {props.code}
                </h1>
                <p className={tw`my-6 font-josefin tracking-[0.125em]`}>
                    {props.children}
                </p>
            </main>
        </GeneralLayout>
    );
}
