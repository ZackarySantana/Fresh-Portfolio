/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ExternalLink from "../../utils/externallink.tsx";

export default function Footer() {
  return (
    <footer className={tw`w-[80%] py-20 mx-[10%]`}>
      <hr className={tw`w-full`} />
      <div className={tw`w-full flex flex-col items-center`}>
        <div className={tw`flex justify-evenly py-5 w-[200px]`}>
          <ExternalLink to="https://github.com/ZackarySantana">
            <img
              src="/icons/github.svg"
              className={tw`w-[25px] h-[25px] hover:animate-shake`}
            />
          </ExternalLink>
          <ExternalLink to="mailto: zackzackyack@gmail.com">
            <img
              src="/icons/email.svg"
              className={tw`w-[25px] h-[25px] hover:animate-shake`}
            />
          </ExternalLink>
          <ExternalLink to="https://www.linkedin.com/in/zackary-santana/">
            <img
              src="/icons/linkedin.svg"
              className={tw`w-[25px] h-[25px] hover:animate-shake`}
            />
          </ExternalLink>
        </div>
        Made with ❤️ by Zackary Santana
      </div>
    </footer>
  );
}
