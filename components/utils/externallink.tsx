/** @jsx h */
import { h, VNode } from "preact";

export default function ExternalLink(props: { to: string; children: VNode; className?: string; }) {
    return (
        <a href={props.to} target="_blank" rel="noreferrer" className={props.className}>
            {props.children}
        </a>
    );
}