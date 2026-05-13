import { useTranslations } from "next-intl";
import { SecondTextPattern } from "../SecondTextPattern";
import { ValueBox } from "./ValueBox";

const values = [
  {
    title: "Quality",
    pra: "Uncompromising excellence in every detail, delivered consistently",
  },
  {
    title: "Teamwork",
    pra: "Uniting skills and ideas to achieve a common goal",
  },
  {
    title: "Safety",
    pra: "An unwavering priority protecting every life on every site",
  },
  {
    title: "Commitment",
    pra: "A steadfast promise to our clients and our purpose",
  },
];
export function ValuesSection() {
  const t=useTranslations("whoWeAre")
  return (
    <div className="p-[var(--sectionPadding)] bg-[url('/about/valuesBg.webp')] bg-cover bg-no-repeat ">
      <SecondTextPattern
        redText="&#x2014; our values"
        title={
          <p className={`text-[4rem] font-[350] text-white `}>
            What We <span className="text-[#277FCD]">Value</span> <br /> Most
          </p>
        }
      />
      <div className="flex items-center py-12 justify-center text-center text-[2rem] font-[350] text-white gap-4 max-[800px]:flex-col max-[800px]:w-full">
        
          <ValueBox pra={t("value")} title={"value"}  />
        
      </div>
    </div>
  );
}
