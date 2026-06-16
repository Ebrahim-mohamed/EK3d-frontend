import Link from "next/link";
import { MostTextPattern } from "../MostTextPattern";
import { useTranslations } from "next-intl";
import { FieldBox } from "./FieldBox";
export function FieldsSection() {
  const t=useTranslations("HomePage.fields")
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A] ">
      
        <MostTextPattern
        isCenter
        moreWidth
        redText={t("smallHead")}
        whiteText={t("head")}
      />
      
      <div className="flex flex-col gap-4 w-full mt-10">
        <div className="flex flex-col  gap-4 ">
          {Array.from({ length: 8 }).map((_, i) => (
  <FieldBox
  head={t(`fHead${i}`)}
    img={`field${i}`}
    des={t(`field${i}`)}
    key={i}
    num={i}
  />
))}
        </div>
      </div>
    </div>
  );
}
