import { BlackSection } from "@/components/communityPage/BlackSection";
import { InternshipsSection } from "@/components/communityPage/InternshipsSection";
import { JobsSection } from "@/components/communityPage/JobSection";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function Collaboration() {
  const t=useTranslations("CollaborationPage")
  return (
    <div>
      <Hero
        page="collaboration"
        title={t("title")}
        pra="Build Your Future with EGY Smart"
      />
      {/* <JobsSection /> */}
      {/* <BlackSection /> */}
      <InternshipsSection />
    </div>
  );
}
