/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";

export default function Image(
  props: {
    src: string;
    srcAlt: string;
    alt: string;
    id?: string;
    className?: string;
    loading?: "eager" | "lazy" | undefined;
  },
) {
  return (
    <picture>
      <source srcSet={asset(props.src)} type="image/webp" />
      <source srcSet={asset(props.srcAlt)} type="image/jpeg" />
      <img
        loading={props.loading}
        src={props.srcAlt}
        alt={props.alt}
        id={props.id}
        className={props.className}
      />
    </picture>
  );
}
