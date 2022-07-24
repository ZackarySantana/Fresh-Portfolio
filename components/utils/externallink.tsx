/** @jsx h */
import { h, VNode } from "preact";

export default function ExternalLink(
  props: {
    to: string;
    children: VNode | string;
    className?: string;
    style?: string;
  },
) {
  return (
    <a
      href={props.to}
      target="_blank"
      rel="noreferrer"
      className={props.className}
      style={props.style}
    >
      {props.children}
    </a>
  );
}
