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

const IconClassName = () => tw`
max-w-[60px] h-[40px]
sm:max-w-[130px] sm:h-[75px]
absolute right-0
opacity-0 transition-opacity
animate-across-small-screen
md:animate-across-screen
`;

const IconStyle = (c: number) => (`animation-delay: -${c * 2}s`);

export default function TechCarousel() {
    return (
        <div class={tw`flex w-screen relative`}>
            <ReactIcon className={IconClassName()} style={IconStyle(0)} />
            <PreactIcon className={IconClassName()} style={IconStyle(1)} />
            <MongoDBIcon className={IconClassName()} style={IconStyle(2)} />
            <GitIcon className={IconClassName()} style={IconStyle(3)} />
            <RemixIcon className={IconClassName()} style={IconStyle(4)} />
            <DockerIcon className={IconClassName()} style={IconStyle(5)} />
            <PrometheusIcon className={IconClassName()} style={IconStyle(6)} />
            <JavaIcon className={IconClassName()} style={IconStyle(7)} />
            <GrafanaIcon className={IconClassName()} style={IconStyle(8)} />
            <FirebaseIcon className={IconClassName()} style={IconStyle(9)} />
        </div>
    );
}
