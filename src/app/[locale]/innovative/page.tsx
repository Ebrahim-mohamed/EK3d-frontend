import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function Innovative(){
    const t=useTranslations("innovation")
    return (
    <div>
      <Hero
        page="contact"
        title={t("title")}
        pra="Let's build together. Contact us to begin."
      />
      
    </div>
  );
}