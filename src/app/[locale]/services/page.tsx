import { Hero } from "@/components/Hero";
import { FutureSection } from "@/components/servicesPage/FutureSection";
import { ServiceBox } from "@/components/servicesPage/ServiceBox";

export default function Services() {
  return (
    <div>
      <Hero
        page="services"
        title="Our Services"
        pra={
          <span>
            We guarantee satisfaction by supplying secure, novel, and premium
            solutions <br /> engineered for outstanding performance and quality
          </span>
        }
      />
      <FutureSection />
      <ServiceBox
        id="turnkeyProjects"
        title="Turnkey Projects"
        img="turnkeyProjects"
        secTitle="END TO END"
        des={[
          "End-to-end project delivery from concept to handover",
          "Full responsibility for planning, execution, and coordination",
          "Cost, quality, and timeline control under one contract",
          "Seamless collaboration across all disciplines",
        ]}
        cat="turnkey-projects"
      />
      <ServiceBox
        id="protectiveCoating"
        title="Protective Coating"
        img="protectiveCoating"
        secTitle="EPOXY COATING"
        des={[
          "Advanced epoxy and chemical-resistant coating systems",
          "Protection against corrosion, abrasion, and harsh conditions",
          "Engineered solutions for industrial and commercial facilities",
          "Extended lifespan and enhanced surface performance",
        ]}
        cat="protective-coating"
      />
      <ServiceBox
        id="concreteFlooring"
        title="Concrete Flooring"
        img="concreteFlooring"
        secTitle="HEAVY-DUTY FLOORING"
        des={[
          "High-performance concrete and heavy-duty flooring systems",
          "Solutions designed for industrial and high-traffic environments",
          "Precision execution for durability and long service life",
          "Low-maintenance, load-resistant flooring solutions",
        ]}
        cat="concrete-flooring"
      />
    </div>
  );
}
