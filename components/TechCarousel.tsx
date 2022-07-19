/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ReactIcon from "./icons/tech/react.tsx";
import PreactIcon from "./icons/tech/preact.tsx";
import MongoDBIcon from "./icons/tech/mongodb.tsx";
import GitIcon from "./icons/tech/git.tsx";
import RemixIcon from "./icons/tech/remix.tsx";
import DockerIcon from "./icons/tech/docker.tsx";
import PrometheusIcon from "./icons/tech/prometheus.tsx";
import JavaIcon from "./icons/tech/java.tsx";
import GrafanaIcon from "./icons/tech/grafana.tsx";
import FirebaseIcon from "./icons/tech/firebase.tsx";
import ExternalLink from "./utils/externallink.tsx";

const AnchorClassName = () => tw`
w-[40px] h-[40px]
sm:w-[75px] sm:h-[75px]
absolute right-0
opacity-0 transition-opacity
animate-across-small-screen
md:animate-across-screen
`;

const IconClassName = () => tw`
w-full h-full
`;

const AnchorStyle = (c: number) => (`animation-delay: -${c * 2}s`);

export default function TechCarousel() {
    return (
        <div class={tw`flex w-screen relative`}>
            <ExternalLink to="https://reactjs.org/" className={AnchorClassName()} style={AnchorStyle(0)}>
                <ReactIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://preactjs.com/" className={AnchorClassName()} style={AnchorStyle(1)}>
                <PreactIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://www.mongodb.com/" className={AnchorClassName()} style={AnchorStyle(2)}>
                <MongoDBIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://git-scm.com/" className={AnchorClassName()} style={AnchorStyle(3)}>
                <GitIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://remix.run/" className={AnchorClassName()} style={AnchorStyle(4)}>
                <RemixIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://www.docker.com/" className={AnchorClassName()} style={AnchorStyle(5)}>
                <DockerIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://prometheus.io/" className={AnchorClassName()} style={AnchorStyle(6)}>
                <PrometheusIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://www.java.com/" className={AnchorClassName()} style={AnchorStyle(7)}>
                <JavaIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://grafana.com/" className={AnchorClassName()} style={AnchorStyle(8)}>
                <GrafanaIcon className={IconClassName()} />
            </ExternalLink>
            <ExternalLink to="https://firebase.google.com/" className={AnchorClassName()} style={AnchorStyle(9)}>
                <FirebaseIcon className={IconClassName()} />
            </ExternalLink>
        </div>
    );
}
