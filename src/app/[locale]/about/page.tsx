import { SecondSection } from "@/components/aboutPage/SecondSection";

import { ValuesSection } from "@/components/aboutPage/ValuesSection";
import { VandMSection } from "@/components/aboutPage/VandMSection";
import { ClientsSection } from "@/components/ClientsSection";
import { MilestonesSection } from "@/components/aboutPage/MilestonesSection";
import { MindsSection } from "@/components/aboutPage/MindsSection";
import { Hero } from "@/components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        page="about"
        title="We Build Life"
        pra={
          <span>
            Our dedication is to deliver safe, innovative, and top-quality{" "}
            <br />
            outcomes that ensure both performance and client satisfaction
          </span>
        }
      />
      <SecondSection />
      <ValuesSection />
      <VandMSection />
      <MilestonesSection />
      <MindsSection />
      <ClientsSection />
    </div>
  );
}
