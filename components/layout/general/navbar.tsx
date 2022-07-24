/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Navbar(props: { activePath: string }) {
  return (
    <nav
      className={tw`fixed z-50 w-full flex flex-col items-center pt-2 text-gray-200 bg-gray-800 top-0`}
    >
      <ul className={tw`m-0 list-none`}>
        {GetLinks().map((l) => (
          <NavLink
            to={l[0]}
            active={props.activePath.toLowerCase() === l[0]}
            target={NewTab().includes(l[1])}
          >
            {l[1]}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

function GetLinks() {
  return [
    ["/", "Home"],
    ["https://www.linkedin.com/in/zackary-santana/", "Linkedin"],
    ["/Zackary_Santana_Resume.pdf", "Resume"],
  ];
}

function NewTab() {
  return ["Linkedin", "Resume"];
}

function NavLink(
  props: { children: string; to: string; active: boolean; target?: boolean },
) {
  return (
    <li className={tw`inline-block align-baseline`}>
      <a
        href={props.to}
        target={props.target ? "_blank" : ""}
        rel="noreferrer"
        className={tw`h-12 block leading-10 !sm:px-4 px-2 sm:text-[100%] text-[85%] ${
          props.active ? "text-red-500 border-b-4 border-current" : ""
        }`}
      >
        {props.children}
      </a>
    </li>
  );
}
