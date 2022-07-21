/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import TechCarousel from "../components/TechCarousel.tsx";
import GeneralLayout from "../components/layout/general_layout.tsx";
import Link from "../components/utils/link.tsx";
import ExternalLink from "../components/utils/externallink.tsx";
import ProjectCard from "../components/ProjectCard.tsx";

const Head = () => (
    <head>
        <title>Home - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Josefin+Sans%3A700%2C400%2C100%7CTitillium+Web%3A400%2C700%2C400italic%2C700italic" type="text/css" media="all" />
    </head>
);

export default function Home() {
    return (
        <GeneralLayout activePath="/" head={<Head />}>
            <main className={tw`pt-10 px-10 flex flex-col items-center text-center`}>
                <h1 className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}>Zackary Santana</h1>
                <p className={tw`my-6 uppercase font-josefin font-bold tracking-[0.125em]`}>A creative full-stack web developer</p>
                <TechCarousel />
                <div className={tw`sm:w-[30rem] my-8 w-full`}>
                    <p>
                        Interested in my work? Head over to my <Link to="/projects">my projects</Link> to find out more. I am a passionate developer that has worked with many different languages and frameworks (the carousel does not include everything that makes me great, check out my <ExternalLink to="/Zackary_Santana_Resume.pdf" className={tw`text-blue-400`}>resume</ExternalLink>)
                    </p>
                </div>
                <div className={tw`flex flex-wrap justify-center p-5`}>
                    {getProjects().map(p => (
                        <ProjectCard img={p.img} title={p.title} techs={p.techs} desc={p.desc} sub={p.sub} />
                    ))}
                </div>
            </main>
        </GeneralLayout>
    );
}

function getProjects() {
    return [
        {
            img: "logo.svg",
            title: "Space Frontier",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
            sub: [
                [<>4<sup>m</sup></>, "read"],
                ["32", "comments"],
                ["5213", "views"],
            ],
        },
        {
            img: "logo.svg",
            title: "Space Frontier",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
            sub: [
                [<>4<sup>m</sup></>, "read"],
                ["32", "comments"],
            ],
        },
        {
            img: "logo.svg",
            title: "Space Frontier",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
            sub: [
                [<>4<sup>m</sup></>, "read"],
            ],
        },
        {
            img: "logo.svg",
            title: "Space Frontier",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
        }
    ];
}