import { WhoSection } from "@/components/homePage/WhoSection";
import { Hero } from "@/components/Hero";
import { NumbersSection } from "@/components/homePage/NumbersSection";
import { ServicesSection } from "@/components/homePage/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeedbacksSection } from "@/components/homePage/FeedbacksSection";
import { NewsSection } from "@/components/homePage/News";
import { ProjectsSection } from "@/components/homePage/ProjectsSection";
import { getTranslations } from "next-intl/server";
import { FieldsSection } from "@/components/homePage/FieldsSection";
import { InternshipsSection } from "@/components/communityPage/InternshipsSection";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="bg-[#0A0A0A]">
      <Hero
        page="home"
        title={
            t("title")
        }
        pra={<span>EGYSMART where vision meets exactness</span>}
      />
      <WhoSection />
      {/* <NumbersSection /> */}
      <ServicesSection />
      <InternshipsSection/>
      {/* <ClientsSection /> */}
      {/* <ProjectsSection /> */}
      {/* <NewsSection /> */}
      {/* <FeedbacksSection /> */}
    </div>
  );
}