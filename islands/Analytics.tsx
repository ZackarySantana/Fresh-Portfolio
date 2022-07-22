/** @jsx h */
import { h } from "preact";
import { useEffect } from 'preact/hooks';

export default function Analytics(props: { className?: string; style?: string; }) {

    useEffect(() => {
        const links = document.getElementsByTagName('a');
        for (const link of links) {
            link.addEventListener("click", () => {
                // SEND BEACON
            });
        }
    }, []);

    return (
        <div></div>
    );
}