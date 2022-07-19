/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import LinkedinIcon from "../components/icons/linkedin.tsx";

const IconClassName = () => tw`
w-[40px] h-[40px]
sm:w-[75px] sm:h-[75px]
absolute right-0
opacity-0 transition-opacity
animate-across-small-screen
md:animate-across-screen
hover:cursor-pointer
`;

const IconStyle = (c: number) => (`animation-delay: ${c * 2}s`);

export default function TechCarousel() {
    return (
        <div class={tw`flex w-screen relative`}>
            <LinkedinIcon className={IconClassName()} style={IconStyle(0)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(1)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(2)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(3)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(4)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(5)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(6)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(7)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(8)} />
            <LinkedinIcon className={IconClassName()} style={IconStyle(9)} />
        </div>
    );
}
