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
md:animate-across-screen
`;

const IconClassName = () =>
  tw`
w-full h-full
`;

const AnchorStyle = (c: number) => (`animation-delay: -${c * 2}s`);

export default function TechCarousel() {
  tw`animate-twind`;
  return (
    <div className={tw`flex w-full relative h-[40px] sm:h-[75px]`}>
      <CarouselImage
        to="https://reactjs.org/"
        num={0}
        icon="react"
      />
      <CarouselImage
        to="https://preactjs.com/"
        num={1}
        icon="preact"
      />
      <CarouselImage
        to="https://www.mongodb.com/"
        num={2}
        icon="mongodb"
      />
      <CarouselImage
        to="https://twind.dev/"
        num={3}
        icon="twind"
      />
      <CarouselImage
        to="https://remix.run/"
        num={4}
        icon="remix"
      />
      <CarouselImage
        to="https://www.docker.com/"
        num={5}
        icon="docker"
      />
      <CarouselImage
        to="https://prometheus.io/"
        num={6}
        icon="prometheus"
      />
      <CarouselImage
        to="https://www.java.com/"
        num={7}
        icon="java"
      />
      <CarouselImage
        to="https://grafana.com/"
        num={8}
        icon="grafana"
      />
      <CarouselImage
        to="https://firebase.google.com/"
        num={9}
        icon="firebase"
      />
      <CarouselImage
        to="https://svelte.dev/"
        num={10}
        icon="svelte"
      />
      <CarouselImage
        to="https://tailwindcss.com/"
        num={11}
        icon="tailwind"
      />
      <CarouselImage
        to="https://git-scm.com/"
        num={12}
        icon="git"
      />
      <CarouselImage
        to="https://fly.io/"
        num={13}
        icon="fly"
      />
      <CarouselImage
        to="https://nodejs.org/en/"
        num={14}
        icon="nodejs"
      />
      {/* PWA, Strapi, Golang, Splunk, Python, Streamlit */}
    </div>
  );
}

function CarouselImage(props: { to: string; icon: string; num: number }) {
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
