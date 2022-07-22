/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { css } from "twind/css";
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
                <div className={tw`sm:w-[30rem] my-8 w-full  before:content-['hi']`}>
                    <p>
                        Interested in my work? Head over to my <Link to="/projects">my projects</Link> to find out more. I am a passionate developer that has worked with many different languages and frameworks (the carousel does not include everything that makes me great, check out my <ExternalLink to="/Zackary_Santana_Resume.pdf" className={tw`text-blue-400`}>resume</ExternalLink>)
                    </p>
                </div>
                <h1 className={tw`text-[2rem]`}>Projects</h1>

                {/* <label for="red-toggle" class={tw`inline-flex relative items-center mr-5 cursor-pointer`}>
                    <input type="checkbox" value="" id="red-toggle" class={tw`sr-only peer`} checked />
                    <div class={tw`w-11 h-6 bg-gray-600 rounded-full after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${css({
                        '&::after': { content: '""' },
                    })}`}></div>
                    <span class={tw`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300`}>Red</span>
                </label> */}

                <div className={tw`flex flex-wrap justify-center p-5`}>
                    {getProjects().map(p => (
                        <ProjectCard img={"projects/" + p.img} imgAlt={"projects/" + p.imgAlt} title={p.title} techs={p.techs} desc={p.desc} sub={p.sub} special={p.special} />
                    ))}
                </div>
                {/* <h1 className={tw`text-[2rem]`}>Plugins</h1>
                <div className={tw`flex flex-wrap justify-center p-5`}>
                    {getProjects().map(p => (
                        <ProjectCard img={"projects/" + p.img} imgAlt={"projects/" + p.imgAlt} title={p.title} techs={p.techs} desc={p.desc} sub={p.sub} special={p.special} />
                    ))}
                </div> */}
            </main>
        </GeneralLayout >
    );
}

function getProjects() {
    return [
        {
            img: "UPE.webp",
            imgAlt: "UPE.png",
            title: "UPE",
            techs: "Remix, React, Express",
            desc: "A site with a multi-user authentication system, metrics with Prometheus, visualization with Grafana, Prisma ORM for posts/comments, and more! Link TBA",
            sub: [
                [<ExternalLink to="/" className={tw`text-blue-400`}>Production</ExternalLink>],
                ["9500+", "lines"],
            ],
            special: true
        },
        {
            img: "SpaceFrontier.webp",
            imgAlt: "SpaceFrontier.png",
            title: "Space Frontier",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/SpaceFrontier" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<ExternalLink to="https://videos.zackaryjamessantana.com/spacefrontier/" className={tw`text-blue-400`}>Demo</ExternalLink>],
                ["2400+", "lines"],
            ],
            special: true,
        },
        {
            img: "MiscProps.webp",
            imgAlt: "MiscProps.png",
            title: "Misc Props",
            techs: "TypeScript, React",
            desc: "A collection of hooks, utility classes, and components that are usually targetted towards a React environment.",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/MiscProps" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<>6<sup>+</sup></>, "hooks"],
            ],
        },
        {
            img: "Todo.png",
            imgAlt: "Todo.png",
            title: "Todo",
            techs: "Svelte, Firebase, Workbox",
            desc: <>This todo app is a PWA (Progressive Web App) made in <span className={tw`text-orange`}>Svelte</span> using <span className={tw`text-orange`}>Firebase</span> for authentication. </>,
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/To-do" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<ExternalLink to="https://todo.zackaryjamessantana.com/" className={tw`text-blue-400`}>Demo</ExternalLink>],
            ],
            special: true,
        },
        {
            img: "Selector.webp",
            imgAlt: "Selector.png",
            title: "Selector",
            techs: "Java, JavaFX, FXML",
            desc: "A MVC custom system written with JavaFX. Using it, I made a To Do application as an example usage!",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/Selector_java" className={tw`text-blue-400`}>Source</ExternalLink>],
                ["1700+", "lines"],
            ],
        },
        {
            img: "TileGame.webp",
            imgAlt: "TileGame.png",
            title: "Tile Game and Animal Collector",
            techs: "React, Redux, SASS",
            desc: "The childhood classic tile matching game and a cookie clicker clone, Animal collector, made with Redux and React.",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/TileGame" className={tw`text-blue-400`}>Source</ExternalLink>, "Tile Game"],
                [<ExternalLink to="https://github.com/ZackarySantana/AnimalCollector" className={tw`text-blue-400`}>Source</ExternalLink>, "Animal Collector"],

            ],
        },
        {
            img: "LinkedHub.webp",
            imgAlt: "LinkedHub.png",
            title: "LinkedHub",
            techs: "JavaScript, Chrome Extension",
            desc: <>1<sup>st</sup> place hackathon winner for Miami Hack Week @ Campus, adds GitHub section to LinkedIn!</>,
            sub: [
                [<ExternalLink to="https://github.com/ItsLaro/LinkedHub" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<ExternalLink to="https://devpost.com/software/linkedhub" className={tw`text-blue-400`}>Devpost</ExternalLink>],
                ["3000+", "lines"],
            ],
            special: true,
        },
        {
            img: "UniBeat.webp",
            imgAlt: "UniBeat.png",
            title: "UniBeat",
            techs: "Android, Firebase",
            desc: "Unibeat allows users to select a music genre and explore new songs, with a tinder-like system for music preference.",
            sub: [
                [<ExternalLink to="https://github.com/qasp-Inc/uniBeat" className={tw`text-blue-400`}>Source</ExternalLink>],
            ],
        },
        {
            img: "Portfolio.webp",
            imgAlt: "Portfolio.png",
            title: "Portfolio",
            techs: "Fresh, Preact, Twind, Fly",
            desc: "This site is a responsive open-source web application made using Preact, Twind, and Fresh. ",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/Portfolio" className={tw`text-blue-400`}>Source</ExternalLink>],
                ["1400+", "lines"],
            ],
        },
    ];
}