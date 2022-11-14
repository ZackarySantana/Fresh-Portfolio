/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, VNode } from "preact";
import { tw } from "@twind";
import ExternalLink from "./utils/externallink.tsx";

type Project = {
  img: string;
  imgAlt: string;
  title: string;
  titleNode?: VNode;
  techs: string; // 250 x 150
  desc: VNode | string;
  extended_desc: string;
  sub?: (VNode | string)[][];
  special?: boolean;
};

let projects = [] as Project[];

const makeProjects = () => {
  if (projects.length !== 0) {
    return;
  }
  projects = [
    {
      img: "UPE.webp",
      imgAlt: "UPE.png",
      title: "UPE",
      techs: "Remix, React, Express",
      desc:
        "A site with a multi-user authentication system, metrics with Prometheus, visualization with Grafana, Prisma ORM for posts/comments, and more!",
      extended_desc: "",
      sub: [
        [
          <ExternalLink to="https://upefiu.io/" className={tw`text-blue-400`}>
            Production
          </ExternalLink>,
        ],
        ["9500+", "lines"],
      ],
      special: true,
    },
    {
      img: "Attach.webp",
      imgAlt: "Attach.png",
      title: "|attach|",
      titleNode: <span className={tw`font-mono`}>|attach|</span>,
      techs: "Solid.js, Vite, Express.js",
      desc:
        "A contact sharing website that anyone can fork and customize for their own. Fork this project and set up your own! View my demo below",
      extended_desc: "",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/Attach"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <ExternalLink
            to="https://attach.fly.dev/?theme=Light%20Fire"
            className={tw`text-blue-400`}
          >
            Demo
          </ExternalLink>,
        ],
      ],
      special: true,
    },
    {
      img: "CodeConstants.png",
      imgAlt: "CodeConstants.png",
      title: "CodeConstants",
      techs: "Remix, React, Tailwind",
      desc:
        "A fast site that allows you to connect with your team members, event attendees, or anyone you want!",
      extended_desc: "",
      sub: [
        [
          <ExternalLink
            to="https://codeconstants.com/"
            className={tw`text-blue-400`}
          >
            Production
          </ExternalLink>,
        ],
        ["3+", "sub-apps"],
      ],
      special: true,
    },
    {
      img: "RPG.webp",
      imgAlt: "RPG.png",
      title: "RPG",
      techs: "Godot",
      desc:
        "A exciting and fun RPG game with collisions, enemies (and their AI's), animations, and more!",
      extended_desc:
        "An RPG game with different attacks, different enemies, different AI's, many animations, innovative worlds, and some store telling elements!",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/RPG"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <ExternalLink
            to="https://zackaryjamessantana.com/hosted_projects/rpg.html"
            className={tw`text-blue-400`}
          >
            Demo
          </ExternalLink>,
        ],
      ],
      special: true,
    },
    {
      img: "MiscProps.webp",
      imgAlt: "MiscProps.png",
      title: "Misc Props",
      techs: "TypeScript, React",
      desc:
        "A collection of hooks, utility classes, and components that are usually targetted towards a React environment.",
      extended_desc:
        "useWindowSize, useElementSize, useEvent, minify css script, generate default env script, and more are all utilities in this repository!",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/MiscProps"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <>
            6<sup>+</sup>
          </>,
          "hooks",
        ],
      ],
    },
    {
      img: "Todo.png",
      imgAlt: "Todo.png",
      title: "Todo",
      techs: "Svelte, Firebase, Workbox",
      desc: (
        <>
          This todo app is a PWA (Progressive Web App) made in{" "}
          <span className={tw`text-orange`}>Svelte</span> using{" "}
          <span className={tw`text-orange`}>Firebase</span> for authentication.
        </>
      ),
      extended_desc:
        "A 'beginner' todo application that focuses on providing a smooth user interface and experience for both Mobile and Desktop. It's a PWA (Progressive Web Application) that can be installed like a native app on any device. It has authentication tied with Google's Firebase and built using Svelte.",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/To-do"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <ExternalLink
            to="https://todo.zackaryjamessantana.com/"
            className={tw`text-blue-400`}
          >
            Demo
          </ExternalLink>,
        ],
      ],
      special: true,
    },
    {
      img: "Twitter.webp",
      imgAlt: "Twitter.png",
      title: "Twitter Filter",
      techs: "Python, Streamlit, Data Science",
      desc:
        "A Python web app that reads from the twitter API and displays data about your search.",
      extended_desc:
        "The main focus of this Python web app is to provide a simple and elegant user interface for users to perform simple filter options on their search.",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/TwitterFilter"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <ExternalLink
            to="https://twitterst.fly.dev/"
            className={tw`text-blue-400`}
          >
            Demo
          </ExternalLink>,
        ],
      ],
    },
    {
      img: "Selector.webp",
      imgAlt: "Selector.png",
      title: "Selector",
      techs: "Java, JavaFX, FXML",
      desc:
        "A MVC custom system written with JavaFX. Using it, I made a To Do application as an example usage!",
      extended_desc:
        "A simple to use MVC system written custom made in JavaFX. This application is the core structure of the MVC and an example with a selector program, that has a basic todo application with links, custom icons, state, and more to show off what the MVC system can do.",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/Selector_java"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        ["1700+", "lines"],
      ],
    },
    {
      img: "TileGame.webp",
      imgAlt: "TileGame.png",
      title: "Tile Game and Animal Collector",
      techs: "React, Redux, SASS",
      desc:
        "The childhood classic tile matching game and a cookie clicker clone, Animal collector, made with Redux and React.",
      extended_desc:
        "Tile matching is a childhood game that most people have played. This is a simple web app using Redux and React that brings it to online. It keeps track of local data in the local storage and is one of my oldest web apps (made in the time of classical components for React!).",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/TileGame"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
          "Tile Game",
        ],
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/AnimalCollector"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
          "Animal Collector",
        ],
      ],
    },
    {
      img: "LinkedHub.webp",
      imgAlt: "LinkedHub.png",
      title: "LinkedHub",
      techs: "JavaScript, Chrome Extension",
      desc: (
        <>
          1<sup>st</sup>{" "}
          place hackathon winner for Miami Hack Week @ Campus, adds GitHub
          section to LinkedIn!
        </>
      ),
      extended_desc:
        "This hack brings GitHub to Linkedin. Recruiters are always looking for exceptional talent, but some talent show their skills best via their GitHub.",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ItsLaro/LinkedHub"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <ExternalLink
            to="https://devpost.com/software/linkedhub"
            className={tw`text-blue-400`}
          >
            Devpost
          </ExternalLink>,
        ],
        ["3000+", "lines"],
      ],
      special: true,
    },
    {
      img: "SpaceFrontier.webp",
      imgAlt: "SpaceFrontier.png",
      title: "Space Frontier",
      techs: "Java, JavaFX, FXML",
      desc:
        "Space Frontier is a side scrolling Java game I made in 10th grade. It has multiple worlds and progession for enemies and players.",
      extended_desc:
        "Space Frontier is the first large Game I ever made (back in 10th grade). It has multiple worlds, custom enemies, custom items, cheat codes, different variations of players, and more!",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/SpaceFrontier"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        [
          <ExternalLink
            to="https://videos.zackaryjamessantana.com/spacefrontier/"
            className={tw`text-blue-400`}
          >
            Demo
          </ExternalLink>,
        ],
        ["2400+", "lines"],
      ],
    },
    {
      img: "UniBeat.webp",
      imgAlt: "UniBeat.png",
      title: "UniBeat",
      techs: "Android, Firebase",
      desc:
        "Unibeat allows users to select a music genre and explore new songs, with a tinder-like system for music preference.",
      extended_desc:
        "Songs are a critical aspect of everyone's life. Finding a new 'best' song can light up anyone's day, Unibeat is a music finder depending on your preferences, genre's, and playlists!",
      sub: [
        [
          <ExternalLink
            to="https://github.com/qasp-Inc/uniBeat"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
      ],
    },
    {
      img: "Portfolio.webp",
      imgAlt: "Portfolio.png",
      title: "Portfolio",
      techs: "Fresh, Preact, Twind, Fly",
      desc:
        "This site is a responsive open-source web application made using Preact, Twind, and Fresh (A Deno framework).",
      extended_desc:
        "This site was made using Fresh, Deno's new web framework. It uses Preact and Twind as the UI libraries and features a very semantic/wellbuilt codebase.",
      sub: [
        [
          <ExternalLink
            to="https://github.com/ZackarySantana/Portfolio"
            className={tw`text-blue-400`}
          >
            Source
          </ExternalLink>,
        ],
        ["1400+", "lines"],
      ],
    },
  ];
};

export function GetProject(projcetName: string) {
  makeProjects();
  return projects.find((p) => {
    return p.title.toLowerCase() == projcetName.toLowerCase();
  });
}

export default function GetProjects() {
  makeProjects();
  return projects;
}
