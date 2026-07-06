import { useLocale } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

export function ServiceBox({
  img,
  title,
  cat
}: {
  img: string;
  title: string;
  cat: string;
}) {
  const locale=useLocale()
  return (
    <Link
        href={`${locale}/projects/${cat}`}
      className={`  bg-cover bg-no-repeat text-white bg-center min-h-[30rem] rounded-2xl  items-center justify-center  p-6 flex flex-col  relative`}
      style={{ backgroundImage: `url(/home/${img}.png)` }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full  
         bg-[rgba(0,0,0,0.55)]
         bg-cover bg-center bg-no-repeat"
      ></div>
      {/* <div className="z-50 absolute top-2 right-4 text-[1.5rem]">&#x2197;</div> */}
      <h1 className="z-50 text-[2.5rem] font-medium">{title}</h1>
    </Link>
  );
}
