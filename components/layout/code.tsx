/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import GeneralLayout from "./general_layout.tsx";
import JosefinImport from "../utils/josefin.tsx";

const HeadWrap = (props: { code: string | number; }) => (
    <Head>
        <title>{props.code} - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
        <JosefinImport />
    </Head>
);

export default function Code(props: { code: number; title?: string; children: VNode; }) {
    return (
        <GeneralLayout activePath={`/${props.title || props.code}`} head={<HeadWrap code={props.title || props.code} />}>
            <main
                className={tw`pt-10 px-10 flex flex-col items-center justify-center text-center h-[85vh]`}
            >
                <h1
                    className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}
                >
                    {props.code}
                </h1>
                <p className={tw`my-6 tracking-[0.125em] font-thin`}>
                    {props.children}
                </p>
            </main>
        </GeneralLayout>
    );
}
