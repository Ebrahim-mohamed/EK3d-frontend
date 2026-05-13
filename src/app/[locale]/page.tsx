import { WhoSection } from "@/components/homePage/WhoSection";
import { Hero } from "@/components/Hero";
import { NumbersSection } from "@/components/homePage/NumbersSection";
import { ServicesSection } from "@/components/homePage/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeedbacksSection } from "@/components/homePage/FeedbacksSection";
import { NewsSection } from "@/components/homePage/News";
import { ProjectsSection } from "@/components/homePage/ProjectsSection";
import { useTranslations } from "next-intl";
import { FieldsSection } from "@/components/homePage/FieldsSection";

export default function Home() {
  const t=useTranslations('HomePage')
  return (
    <div className="bg-[#0A0A0A]">
      <Hero
        page="home"
        title={
          <span>
            {t("title")}
          </span>
        }
        pra={<span>EGYSMART where vision meets exactness</span>}
      />
      <WhoSection />
      {/* <NumbersSection /> */}
      <ServicesSection />
      <FieldsSection />
      {/* <ClientsSection /> */}
      {/* <ProjectsSection /> */}
      {/* <NewsSection /> */}
      {/* <FeedbacksSection /> */}
    </div>
  );
}
