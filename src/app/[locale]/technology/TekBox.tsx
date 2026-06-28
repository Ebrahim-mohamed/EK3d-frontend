import { useLocale } from "next-intl";
import Image from "next/image";

export function TekBox({titleAr,titleEn,desAr,desEn,img}:{titleAr:string,titleEn:string,desAr:string,desEn:string,img:string}){
const locale=useLocale();
return <div className="flex items-start justify-between gap-12">
<div className="w-[50%]">
    <Image alt="tek image" width={500} height={500} src={`/about/mission.webp`} className="w-full" />
</div>
<div className="text-white">
    <h1 className="text-[2.5rem] font-bold mb-4">{locale==="en"?titleEn:titleAr}</h1>
    <p className="text-[1.5rem] font-normal ">{locale==="en"?desEn:desAr}</p>
</div>
</div>
}