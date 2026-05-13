import Link from "next/link";
import { MostTextPattern } from "../MostTextPattern";
import { ServiceBox } from "./ServiceBox";
import { useTranslations } from "next-intl";
export function ServicesSection() {
  const ts=useTranslations("HomePage.services")
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
          <Link
            href="/services"
            className="text-[1rem] font-medium text-[#277FCD]"
          >
            See All Projects &rarr;
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="grid grid-cols-2 gap-4 ">
          {Array.from({ length: 5 }).map((_, i) => (
  <ServiceBox
    img={`serv${i}`}
    title={ts(`serv${i}`)}
    key={i}
  />
))}
        </div>
      </div>
    </div>
  );
}
