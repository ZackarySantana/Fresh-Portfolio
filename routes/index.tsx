/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import GeneralLayout from "../components/layout/general_layout.tsx";

export default function Home() {
    return (
        <GeneralLayout activePath="/">
            <div class={tw`p-4 mx-auto max-w-screen-md`}>
                <img
                    src="/logo.svg"
                    className={tw`min-w-[1px] min-h-[100px]`}
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <p class={tw`my-6`}>
                    Welcome to `fresh`. Try update this message in the ./routes/index.tsx
                    file, and refresh.
                </p>
                <Counter start={3} />
            </div>
        </GeneralLayout>
    );
}