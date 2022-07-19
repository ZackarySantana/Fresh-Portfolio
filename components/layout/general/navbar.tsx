/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Navbar(props: { activePath: string; }) {
    return (
        <nav className={tw`fixed w-full flex flex-col items-center pt-2 text-gray-200 bg-gray-800 top-0`}>
            <ul className={tw`m-0 list-none`}>
                <Link to="/" active={props.activePath === "/"}>Home</Link>
                <Link to="/about" active={props.activePath === "/about"}>About</Link>
                <Link to="/websites" active={props.activePath === "/websites"}>Webites</Link>
                <Link to="https://www.linkedin.com/in/zackary-santana/" active={false}>Linkedin</Link>
                <Link to="/Zackary_Santana_Resume.pdf" active={false}>Resume</Link>
            </ul>
        </nav>
    );
}

function Link(props: { children: string; to: string; active: boolean; target?: boolean; }) {
    return (
        <li className={tw`inline-block align-baseline`}>
            <a href={props.to} target={props.target ? "_blank" : ""} rel="noreferrer" className={tw`h-12 px-4 block leading-10 ${props.active ? "text-red-500 border-b-4 border-current" : ""}`}>
                {props.children}
            </a>
        </li>
    );
}