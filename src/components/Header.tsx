import Image from "next/image";
import { HeaderLink } from "./HeaderLink";
import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "./LangButton";

const links = [
  { name: "home", to: "" },
  // { name: "Services", to: "services" },
  { name: "about", to: "about" },
  { name: "collaborations", to: "collaboration" },
  // { name: "Subsidiary", to: "subsidiary" },
  // { name: "products", to: "innovative" },
  { name: "technology", to: "technology" },
  
  { name: "contact", to: "contact" },
];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((pre) => !pre);
  }
  return (
    <div className="py-6 px-14 max-[600px]:px-6 flex items-center justify-between absolute top-0 left-0 w-full z-50">
      <Link href={"/"}>
        <Image
          className="w-[8rem]"
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>
      <div className="flex gap-8 items-center max-[800px]:hidden">
        {links.map((l) => (
          <HeaderLink link={l.to} name={l.name} key={l.name} />
        ))}
        <LanguageSwitcher />
      </div>
      <button
        className="hidden gap-8 items-center max-[800px]:flex  cursor-pointer"
        onClick={() => toggle()}
      >
        <img src="/menu.png" alt="menu icon" className="w-12 aspect-square" />
      </button>
      <div
        className={` ${isOpen ? " fixed top-0 left-0 w-full h-full bg-black z-50 items-center justify-center flex" : " hidden "}`}
      >
        <button onClick={() => toggle()}>
          <img
            src="/close.svg"
            alt="close icon"
            className="w-12 aspect-square absolute top-10 right-10"
          />
        </button>

        <div className={`flex flex-col justify-center gap-8 items-center `}>
          {links.map((l) => (
            <HeaderLink link={l.to} name={l.name} key={l.name} fun={toggle} />
          ))}
        </div>
      </div>
    </div>
  );
}
