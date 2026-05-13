import { useTranslations } from "next-intl";
import { VandMBox } from "./VandMBox";

export function VandMSection() {
  const t=useTranslations("whoWeAre")
  return (
    <div className="flex relative gap-4 max-[1100px]:flex-col bg-[#050606] p-[var(--sectionPadding)]">
      <p className=" text-white text-center [text-shadow:0_4px_4px_rgba(255,56,60,0.5)]  text-[12.5rem] font-[350] leading-[160%] absolute top-1/3 left-1/2 -translate-1/2 z-1000 max-[1100px]:hidden ">
        &
      </p>
      <VandMBox
        img="vision"
        pra={t("visionContent")}
        title={t("vision")}
      />
      <VandMBox
        img="mission"
        pra={t("missionContent")}
        title={t("mission")}
      />
    </div>
  );
}
