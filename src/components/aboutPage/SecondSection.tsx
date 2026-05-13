import { useTranslations } from "next-intl";

export function SecondSection() {
  const t=useTranslations("whoWeAre")
  return (
    <div
      className="px-[var(--sectionPadding)] py-48 text-center text-[2rem] font-[350] text-[#8E8E93] bg-[#050606] w-full"
      id="first"
    >
      {t("aboutPra")}
    </div>
  );
}
