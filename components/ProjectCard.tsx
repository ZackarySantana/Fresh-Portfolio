/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";
import { css } from "twind/css";

export default function ProjectCard(props: { img: string; title: string; desc: string; techs: string; sub?: (VNode | string)[][]; }) {
    return (
        <div className={tw`rounded-2xl bg-dark text-center shadow-2xl w-[250px] m-5 relative ${RGB()} after:animate-rgb`} style={"transform-style: preserve-3d;"}>
            <img src={props.img} className={tw`rounded-tr-2xl rounded-tl-2xl w-full h-[150px]`} />
            <div className={tw`m-[25px] h-[150px]`} >
                <span className={tw`text-sm-2 text-red-400`}>{props.techs}</span>
                <h2 className={tw`mt-0 text-lg`}>{props.title}</h2>
                <p className={tw`text-sm text-gray-300`}>{props.desc}</p>
            </div>
            {props.sub?.length == 1 &&
                <div className={tw`grid grid-cols-1 grid-rows-1`} >
                    {props.sub?.map(subInfo => (
                        <SubInfo upper={subInfo[0]} lower={subInfo[1]} />
                    ))}
                </div>
            }
            {props.sub?.length == 2 &&
                <div className={tw`grid grid-cols-2 grid-rows-1`} >
                    {props.sub?.map(subInfo => (
                        <SubInfo upper={subInfo[0]} lower={subInfo[1]} />
                    ))}
                </div>
            }
            {props.sub?.length == 3 &&
                <div className={tw`grid grid-cols-3 grid-rows-1`} >
                    {props.sub?.map(subInfo => (
                        <SubInfo upper={subInfo[0]} lower={subInfo[1]} />
                    ))}
                </div>
            }
            {(props.sub?.length ?? 0) == 0 &&
                <div className={tw`h-[64px]`} >
                </div>
            }
        </div>
    );
}

function RGB() {
    return tw(css`
    &:after {
        content:"";
        background: linear-gradient(45deg,
            #ff0000 0%, 
            #ff9a00 10%,
            #d0de21 20%,
            #4fdc4a 30%, 
            #3fdad8 40%,
            #2fc9e2 50%, 
            #1c7fee 60%, 
            #5f15f2 70%, 
            #ba0cf8 80%, 
            #fb07d9 90%, 
            #ff0000 100%);
        position: absolute;
        inset: -3px;       
        border-radius: 16px;
        transform: translateZ(-1px);
        filter: blur(8px);
    }
    `);
}

function SubInfo(props: { upper: VNode | string; lower: VNode | string; }) {
    return (
        <div class={tw`flex justify-center items-center flex-col p-2.5`}>
            <div className={tw`block text-lg`}>
                {props.upper}
            </div>
            <div className={tw`block text-xs`}>
                {props.lower}
            </div>
        </div>
    );
}