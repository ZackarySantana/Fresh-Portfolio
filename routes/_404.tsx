/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../components/layout/general_layout.tsx";

const Head = () => (
    <head>
        <title>404 - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
    </head>
);

export default function AboutPage() {
    return (
        <GeneralLayout activePath="/404" head={<Head />}>
            <p>404</p>
        </GeneralLayout>
    );
}