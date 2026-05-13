import { CommunicationSection } from "@/components/contact/CommunicationSection";
import { EndSection } from "@/components/contact/EndSection";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t=useTranslations("ContactPage")
  return (
    <div>
      <Hero
        page="contact"
        title={t("title")}
        pra="Let's build together. Contact us to begin."
      />
      <CommunicationSection />
      {/* <EndSection /> */}
    </div>
  );
}
