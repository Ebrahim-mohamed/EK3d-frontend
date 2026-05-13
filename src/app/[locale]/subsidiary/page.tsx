import { Hero } from "@/components/Hero";
import { FirstSection } from "@/components/SubsidiariesPage/FirstSection";
import { SubsidiarySection } from "@/components/SubsidiariesPage/SubsidiarySection";

export default function Subsidiary() {
  return (
    <div>
      <Hero
        page="subsidiary"
        title="Subsidiaries"
        pra="Building Excellence Through Specialized Companies"
      />
      <FirstSection />
      <SubsidiarySection
        icon="cornersIcon"
        img="cornersBg"
        title={
          <p>
            <span className="text-[#277FCD]"> Building the future,</span>
            <br /> Interior Finishing & Bespoke Furniture
          </p>
        }
        pra="Corners specializes in high-end interior finishing and custom furniture design, transforming spaces into functional and visually captivating environments. "
        list={[
          "Interior finishing works (residential & commercial)",
          "Bespoke furniture design and production",
          "Space planning and material selection",
          "Turnkey interior solutions",
        ]}
      />
      <SubsidiarySection
        icon="maadenIcon"
        img="maadenBg"
        title={
          <p>
            Premium<span className="text-[#277FCD]">Stainless-Steel</span>
            Manufacturing
          </p>
        }
        pra="Maaden is a specialized manufacturing company focused on producing high-quality stainless-steel products. From refined home accessories to functional industrial-grade items, Maaden combines durability, precision, and modern aesthetics."
        list={[
          "Stainless-steel home accessories",
          "Custom tables and furniture elements",
          "Grills and outdoor steel products",
          "Tailor-made metal solutions",
          "Precision fabrication and finishing",
        ]}
        isTow
      />
    </div>
  );
}
