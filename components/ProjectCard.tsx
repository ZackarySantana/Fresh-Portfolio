/** @jsx h */
import { Fragment, h, VNode } from "preact";
import { tw } from "@twind";

export default function ProjectCard(props: { img: string; title: string; desc: string; techs: string; sub?: (VNode | string)[][]; }) {
    return (
        <div class={tw`rounded-2xl bg-dark text-center shadow-2xl w-[250px] m-5`}>
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