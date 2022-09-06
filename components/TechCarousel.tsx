/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ExternalLink from "./utils/externallink.tsx";

const AnchorClassName = () =>
    tw`
w-[40px] h-[40px]
sm:w-[70px] sm:h-[75px]
absolute right-0
opacity-0 transition-opacity
animate-across-small-screen
sm:animate-across-screen
md:animate-md-screen
`;

const IconClassName = () =>
    tw`
w-full h-full
`;

const AnchorStyle = (c: number) => (`animation-delay: -${c * 2}s`);

export default function TechCarousel() {
    return (
        <div className={tw`flex w-full relative h-[40px] sm:h-[75px]`}>
            {GetLogos().map((p, i) => (
                <CarouselImage
                    to={p.link}
                    icon={p.icon}
                    num={i}
                />
            ))}
        </div>
    );
}

function CarouselImage(props: { to: string; icon: string; num: number; }) {
    return (
        <ExternalLink
            to={props.to}
            className={AnchorClassName()}
            style={AnchorStyle(props.num)}
        >
            <img
                src={`/icons/tech/${props.icon}.svg`}
                loading="eager"
                className={IconClassName()}
            />
        </ExternalLink>
    );
}

function GetLogos() {
    return [
        {
            link: "https://reactjs.org/",
            icon: "react",
        },
        {
            link: "https://preactjs.com/",
            icon: "preact",
        },
        {
            link: "https://www.mongodb.com/",
            icon: "mongodb",
        },
        {
            link: "https://twind.dev/",
            icon: "twind",
        },
        {
            link: "https://remix.run/",
            icon: "remix",
        },
        {
            link: "https://www.docker.com/",
            icon: "docker",
        },
        {
            link: "https://prometheus.io/",
            icon: "prometheus",
        },
        {
            link: "https://www.java.com/",
            icon: "java",
        },
        {
            link: "https://grafana.com/",
            icon: "grafana",
        },
        {
            link: "https://firebase.google.com/",
            icon: "firebase",
        },
        {
            link: "https://svelte.dev/",
            icon: "svelte",
        },
        {
            link: "https://tailwindcss.com/",
            icon: "tailwind",
        },
        {
            link: "https://git-scm.com/",
            icon: "git",
        },
        {
            link: "https://fly.io/",
            icon: "fly",
        },
        {
            link: "https://nodejs.org/en/",
            icon: "nodejs",
        },
        {
            link: "https://web.dev/progressive-web-apps/",
            icon: "pwa",
        },
        {
            link: "https://strapi.io/",
            icon: "strapi",
        },
        {
            link: "https://go.dev/",
            icon: "golang",
        },
        {
            link: "https://www.splunk.com/",
            icon: "splunk",
        },
        {
            link: "https://www.python.org/",
            icon: "python",
        },
        {
            link: "https://streamlit.io/",
            icon: "streamlit",
        },
        {
            link: "https://www.solidjs.com/",
            icon: "solid",
        },
        {
            link: "https://vitejs.dev/",
            icon: "vite",
        }
    ].sort(() => Math.random() < 0.5 ? -1 : 1);
}
