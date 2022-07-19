/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../components/layout/general_layout.tsx";

const Head = () => (
    <head>
        <title>Projects - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
    </head>
);

export default function AboutPage() {
    return (
        <GeneralLayout activePath="/projects" head={<Head />}>
            <h1>Projects</h1>
            <p>This is the projects page.</p>
        </GeneralLayout>
    );
}