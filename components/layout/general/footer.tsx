/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import GitHubIcon from "../../icons/github.tsx";
import ExternalLink from "../../utils/externallink.tsx";
import EmailIcon from "../../icons/email.tsx";
import LinkedinIcon from "../../icons/linkedin.tsx";

export default function Footer() {
    return (
        <footer className={tw`w-[80%] py-20 mx-[10%]`}>
            <hr className={tw`w-full`} />
            <div className={tw`w-full flex flex-col items-center`}>
                <div className={tw`flex justify-evenly py-5 w-[200px]`}>
                    <ExternalLink to="https://github.com/ZackarySantana">
                        <GitHubIcon className={tw`w-[25px] h-[25px]`} />
                    </ExternalLink>
                    <ExternalLink to="mailto: zackzackyack@gmail.com">
                        <EmailIcon className={tw`w-[25px] h-[25px]`} />
                    </ExternalLink>
                    <ExternalLink to="https://www.linkedin.com/in/zackary-santana/">
                        <LinkedinIcon className={tw`w-[25px] h-[25px]`} />
                    </ExternalLink>
                </div>
                Made with ❤️ by Zackary Santana
            </div>
        </footer>
    );
}