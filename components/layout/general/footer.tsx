/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import GitHubIcon from "../../icons/github.tsx";
import ExternalLink from "../../utils/externallink.tsx";

export default function Footer() {
    return (
        <footer className={tw`w-screen flex flex-col items-center pt-20`}>
            <hr className={tw`w-[90%]`} />
            <div>
                <div className={tw`w-full flex justify-evenly py-5`}>
                    <ExternalLink to="https://github.com/ZackarySantana">
                        <GitHubIcon className={tw`w-[25px] h-[25px]`} />
                    </ExternalLink>
                </div>
                Made with ❤️ by Zackary Santana
            </div>
        </footer>
    );
}