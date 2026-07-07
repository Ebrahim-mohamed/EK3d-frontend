"use client";

import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProjectTemplate({
  titleEn,
  titleAr,
  descriptionEn,
  descriptionAr,
  serviceKind,
  images,
  num,
}: {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  serviceKind: string;
  images: string[];
  num: number;
}) {
  const baseUrl = "https://ek3dprints.com/uploads/";
  const locale = useLocale();
  const isArabic = locale === "ar";

  const title = isArabic ? titleAr : titleEn;
  const description = isArabic ? descriptionAr : descriptionEn;

  return (
    <div
      className={`${
        num % 2 === 0
          ? "flex max-[800px]:flex-col"
          : "flex-row-reverse flex max-[800px]:flex-col"
      } gap-10 py-16 border-b border-[#7A8693]`}
    >
      {/* ── IMAGE SLIDER ── */}
      <div className="w-[55%] max-[800px]:w-full rounded-2xl overflow-hidden">
        {images && images.length > 1 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-full rounded-2xl"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${baseUrl}${img}`}
                  alt={`${title} image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Single image — no slider needed
          <img
            src={`${baseUrl}${images?.[0]}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* ── INFO ── */}
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="flex-1 flex flex-col gap-6 text-white"
      >
        <span className="text-[0.9rem] font-medium text-[#277FCD] uppercase tracking-wide">
          {serviceKind}
        </span>

        <h1 className="text-[3rem] font-bold">{title}</h1>

        <p className="text-[1rem] leading-[160%] font-normal text-[#D9D9D9]">
          {description}
        </p>
      </div>
    </div>
  );
}