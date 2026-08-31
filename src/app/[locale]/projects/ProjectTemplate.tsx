"use client";

import { useLocale } from "next-intl";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
  Pagination,
} from "swiper/modules";

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
  videoUrl,
  num,
}: {
  titleEn: string;

  titleAr: string;

  descriptionEn: string;

  descriptionAr: string;

  serviceKind: string;

  images: string[];

  // Cloudinary video URL
  videoUrl?: string;

  num: number;
}) {
  const baseUrl =
    "https://ek3dprints.com/uploads/";

  const locale =
    useLocale();

  const isArabic =
    locale === "ar";

  const title = isArabic
    ? titleAr
    : titleEn;

  const description =
    isArabic
      ? descriptionAr
      : descriptionEn;

  /*
    ================= MEDIA ARRAY =================

    Video is ALWAYS first.

    Example:

    [
      { type: "video", src: "cloudinary-url" },
      { type: "image", src: "image1.jpg" },
      { type: "image", src: "image2.jpg" }
    ]
  */

  const media = [
    ...(videoUrl
      ? [
          {
            type: "video" as const,
            src: videoUrl,
          },
        ]
      : []),

    ...(images || []).map(
      (image) => ({
        type: "image" as const,
        src: `${baseUrl}${image}`,
      })
    ),
  ];

  return (
    <div
      className={`${
        num % 2 === 0
          ? "flex max-[800px]:flex-col"
          : "flex-row-reverse flex max-[800px]:flex-col"
      } gap-10 py-16 border-b border-[#7A8693]`}
    >
      {/* ================= MEDIA SLIDER ================= */}

      <div className="w-[55%] max-[800px]:w-full rounded-2xl overflow-hidden">
        {media.length > 0 ? (
          <Swiper
            modules={[
              Navigation,
              Pagination,
            ]}
            navigation={
              media.length > 1
            }
            pagination={
              media.length > 1
                ? {
                    clickable:
                      true,
                  }
                : false
            }
            loop={
              media.length > 1
            }
            className="w-full h-full rounded-2xl"
          >
            {media.map(
              (
                item,
                index
              ) => (
                <SwiperSlide
                  key={`${item.type}-${index}`}
                >
                  {/* VIDEO */}

                  {item.type ===
                  "video" ? (
                    <video
                      src={
                        item.src
                      }
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* IMAGE */

                    <img
                      src={
                        item.src
                      }
                      alt={`${title} image ${
                        index + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          /* NO MEDIA */

          <div className="w-full min-h-[300px] flex items-center justify-center bg-[#111] text-gray-400">
            No media available
          </div>
        )}
      </div>

      {/* ================= INFO ================= */}

      <div
        dir={
          isArabic
            ? "rtl"
            : "ltr"
        }
        className="flex-1 flex flex-col gap-6 text-white"
      >
        <span className="text-[0.9rem] font-medium text-[#277FCD] uppercase tracking-wide">
          {serviceKind}
        </span>

        <h1 className="text-[3rem] font-bold">
          {title}
        </h1>

        <p className="text-[1rem] leading-[160%] font-normal text-[#D9D9D9]">
          {description}
        </p>
      </div>
    </div>
  );
}