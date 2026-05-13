import Link from "next/link";
import { MostTextPattern } from "../MostTextPattern";
import { useTranslations } from "next-intl";
import { FieldBox } from "./FieldBox";
export function FieldsSection() {
  const t=useTranslations("HomePage.fields")
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A] ">
      <div className="flex items-center justify-between gap-14 mb-14 max-[700px]:flex-col max-[700px]:items-start">
        <MostTextPattern
          blueText="Layer by Layer."
          redText="OUR EXPERTISE"
          whiteText="Building the future,"
        />
        <div>
          <p className="text-white text-[1rem] leading-[160%] font-normal mb-14">
            We prioritize integrity and innovation in all aspects <br /> of our
            work, ranging from design phase to full <br /> project execution
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col  gap-4 ">
          {Array.from({ length: 8 }).map((_, i) => (
  <FieldBox
    img={`field${i}`}
    name={t(`field${i}`)}
    key={i}
    num={i}
  />
))}
        </div>
      </div>
    </div>
  );
}
