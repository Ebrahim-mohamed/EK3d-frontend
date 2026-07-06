import Image from "next/image";
import { MostTextPattern } from "../MostTextPattern";
import { useTranslations } from "next-intl";

export function WhoSection() {
const t=useTranslations("HomePage")
  return (
    <div
      className="flex items-start justify-between gap-10 p-[var(--sectionPadding)] max-[650px]:flex-col"
      id="first"
    >
      <div className="w-[60%] max-[650px]:w-full">
        <p
            className={`text-white text-[2.5rem] max-[1000px]:text-[2rem] max-[800px]:text-[1.5rem] font-medium `}
          >
            {t("about")}
          </p>
      </div>
      <div className="w-[30%]">
        <Image width={500} height={500} src="/home/about.png" className="w-full" alt="about image"/>
      </div>
    </div>
  );
}
