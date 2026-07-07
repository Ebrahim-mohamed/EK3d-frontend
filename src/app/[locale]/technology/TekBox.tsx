"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

type TekBoxProps = {
  titleAr: string;
  titleEn: string;
  desAr: string;
  desEn: string;
  img: string;
};

const API_URL = "https://ek3dprints.com";

export function TekBox({
  titleAr,
  titleEn,
  desAr,
  desEn,
  img,
}: TekBoxProps) {
  const locale = useLocale();

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2">
        <Image
          src={`${API_URL}/uploads/${img}`}
          alt={locale === "en" ? titleEn : titleAr}
          width={700}
          height={500}
          className="w-full h-auto rounded-lg object-cover"
          unoptimized
        />
      </div>

      <div className="w-full lg:w-1/2 text-white">
        <h2 className="text-[2.5rem] font-bold mb-6">
          {locale === "en" ? titleEn : titleAr}
        </h2>

        <p className="text-[1.5rem] leading-relaxed whitespace-pre-line">
          {locale === "en" ? desEn : desAr}
        </p>
      </div>
    </div>
  );
}