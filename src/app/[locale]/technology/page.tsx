import { Hero } from "@/components/Hero"
import { useTranslations } from "next-intl"
import { TekBox } from "./TekBox"

export default function Technology(){
 const t=useTranslations("technology")
     return (
     <div>
       <Hero
         page="technology"
         title={t("title")}
         pra="Let's build together. Contact us to begin."
       />
       <div className=" p-[var(--sectionPadding)] bg-[#0A0A0A] flex flex-col gap-8">
        <TekBox desAr="asdfsda" desEn="afsfdsf" img="asfd" titleAr="asdf" titleEn="agsa"  />
        <TekBox desAr="asdfsda" desEn="afsfdsf" img="asfd" titleAr="asdf" titleEn="agsa"  />
        <TekBox desAr="asdfsda" desEn="afsfdsf" img="asfd" titleAr="asdf" titleEn="agsa"  />
 </div>
 </div>
)}