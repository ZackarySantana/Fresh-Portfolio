/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../components/layout/general_layout.tsx";

const Head = () => (
    <head>
        <title>About - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
    </head>
);

export default function AboutPage() {
    return (
        <GeneralLayout activePath="/about" head={<Head />}>
            <h1>About</h1>
            <p>This is the about page.</p>
        </GeneralLayout>
    );
}