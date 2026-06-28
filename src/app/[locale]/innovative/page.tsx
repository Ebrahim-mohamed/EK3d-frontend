import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";
import { NewBox } from "./NewBox";



export default function Innovative(){
    const t=useTranslations("innovation")
    return (
    <div>
      <Hero
        page="contact"
        title={t("title")}
        pra="Let's build together. Contact us to begin."
      />
      <div className="grid grid-cols-3 gap-8  p-[var(--sectionPadding)] bg-[#0A0A0A]">

      <NewBox
      news={{desAR:"fasfsdaf",desEN:"agfdgdfg",link:"example.com",newsImage:"afsdfas",titleAR:"afsdfdasf",titleEN:"jhgjh"}}
      />
      <NewBox
      news={{desAR:"fasfsdaf",desEN:"agfdgdfg",link:"example.com",newsImage:"afsdfas",titleAR:"afsdfdasf",titleEN:"jhgjh"}}
      />
      <NewBox
      news={{desAR:"fasfsdaf",desEN:"agfdgdfg",link:"example.com",newsImage:"afsdfas",titleAR:"afsdfdasf",titleEN:"jhgjh"}}
      />
      </div>
    </div>
  );
}