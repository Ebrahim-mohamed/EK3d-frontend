"use client";

import { useRef, useState, useEffect } from "react";
import { MostTextPattern } from "../MostTextPattern";
import { NumberComponent } from "../NumberComponent";
import { FutureImage } from "./FutureImage";

const numbers = [
  { number: 10, icon: "+", title: "YEARS OF EXPERIENCE" },
  { number: 100, icon: "+", title: "COMPLETED PROJECTS" },
  { number: 775, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 500, icon: "M", title: "REVENUE" },
];

export function FutureSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="p-[var(--sectionPadding)] flex max-[900px]:flex-col gap-14 items-start justify-between bg-[#0A0A0A]"
      id="first"
    >
      <div>
        <MostTextPattern
          moreWidth
          blueText="Layer by Layer."
          redText="OUR SERVICES"
          whiteText="Building the future,"
          pra="EK3DPrints provides comprehensive construction and renovation solutions, combining expert project management with specialized custom works and premium flooring systems. From protective coatings to full turnkey projects, we deliver end-to-end services that ensure structural excellence, innovative design, and flawless execution. Dedicated to safety, sustainability, and exceptional craftsmanship, we consistently achieve high-performance results that inspire confidence and guarantee complete client satisfaction."
        />

        <div className="w-full flex items-center justify-between gap-4 mt-8">
          {numbers.map((item) => (
            <NumberComponent
              key={item.title}
              number={item.number}
              icon={item.icon}
              title={item.title}
              isSmall
              start={startCounting}
              duration={1500}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center max-[900px]:flex-col max-[900px]:w-full">
        <FutureImage img="protectiveCoating" title="Protective Coating" />
        <div className="flex flex-col gap-4 max-[900px]:w-full">
          <FutureImage img="turnkeyProjects" title="Turnkey Projects" />
          <FutureImage img="concreteFlooring" title="Concrete Flooring" />
        </div>
      </div>
    </div>
  );
}
