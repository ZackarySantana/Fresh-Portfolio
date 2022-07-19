/** @jsx h */
import { h, VNode } from "preact";
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
        <div class={tw`flex w-screen relative h-[40px] sm:h-[75px]`}>
            <CarouselImage to="https://reactjs.org/" num={0} icon={<ReactIcon className={IconClassName()} />} />
            <CarouselImage to="https://preactjs.com/" num={1} icon={<PreactIcon className={IconClassName()} />} />
            <CarouselImage to="https://www.mongodb.com/" num={2} icon={<MongoDBIcon className={IconClassName()} />} />
            <CarouselImage to="https://git-scm.com/" num={3} icon={<GitIcon className={IconClassName()} />} />
            <CarouselImage to="https://remix.run/" num={4} icon={<RemixIcon className={IconClassName()} />} />
            <CarouselImage to="https://www.docker.com/" num={5} icon={<DockerIcon className={IconClassName()} />} />
            <CarouselImage to="https://prometheus.io/" num={6} icon={<PrometheusIcon className={IconClassName()} />} />
            <CarouselImage to="https://www.java.com/" num={7} icon={<JavaIcon className={IconClassName()} />} />
            <CarouselImage to="https://grafana.com/" num={8} icon={<GrafanaIcon className={IconClassName()} />} />
            <CarouselImage to="https://firebase.google.com/" num={9} icon={<FirebaseIcon className={IconClassName()} />} />
            {/* TO ADD: Tailwind Twind Fly */}
        </div>
    );
}

function CarouselImage(props: { to: string; icon: VNode; num: number; }) {
    return (
        <ExternalLink to={props.to} className={AnchorClassName()} style={AnchorStyle(props.num)}>
            {props.icon}
        </ExternalLink>
    );
}