/** @jsx h */
import { h } from "preact";
import { useEffect } from 'preact/hooks';

export default function Analytics(props: { className?: string; style?: string; }) {

    useEffect(() => {
        const links = document.getElementsByTagName('a');
        for (let i = 0; i < links.length; ++i) {
            const link = links.item(i);
            if (!link) {
                continue;
            }
            link.addEventListener("click", () => {
                // SEND BEACON
                console.log("METRICS TIME");
            });
        }
    }, []);

    return (
        <div></div>
    );
}