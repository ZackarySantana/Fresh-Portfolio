/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";

export default function Link(props: { to: string; children: VNode | string; className?: string; style?: string; }) {
    return (
        <a href={props.to} className={tw`text-blue-400 ${props.className ? props.className : ""}`} style={props.style}>
            {props.children}
        </a>
    );
}