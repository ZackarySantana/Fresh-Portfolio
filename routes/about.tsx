/** @jsx h */
import { h } from "preact";
import GeneralLayout from "../components/layout/general_layout.tsx";

export default function AboutPage() {
    return (
        <GeneralLayout activePath="/about">
            <h1>About</h1>
            <p>This is the about page.</p>
        </GeneralLayout>
    );
}