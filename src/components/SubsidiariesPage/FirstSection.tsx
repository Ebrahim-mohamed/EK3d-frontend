import { MostTextPattern } from "../MostTextPattern";

export function FirstSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A]" id="first">
      <MostTextPattern
        blueText="Dedicated Expertise"
        redText="Our Subsidiaries"
        whiteText="Extending Mastery Through "
        pra={
          <span>
             EK3DPrints operates through two dedicated subsidiaries: Corners,
            providing top-notch interior finishing and bespoke furniture design
            services, and Maaden, crafting elegant and durable stainless steel
            kitchenware and home accessories.
          </span>
        }
        horz
      />
      ;
    </div>
  );
}
