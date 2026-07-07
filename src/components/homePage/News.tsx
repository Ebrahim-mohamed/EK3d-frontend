"use client";

import { useEffect, useState } from "react";

import { SecondTextPattern } from "../SecondTextPattern";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { NewsBox } from "./NewsBox";

export function NewsSection() {
  const [news, setNews] = useState<
    {
      _id: string;
      title: string;
      pra: string;
      his: string;
      image: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://ek3dprints.com/api/technologys", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();

        const mappedNews = data.map((item: any) => ({
          _id: item._id,
          title: item.headline,
          pra: item.details,
          image: item.image,
          his: new Date(item.date).toLocaleDateString("en-GB"),
        }));

        setNews(mappedNews);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return null;

  return (
    <div
      className="p-[var(--sectionPadding)] bg-[#0A0A0A] overflow-hidden"
      id="news"
    >
      {/* Title */}
      <div className="mb-14">
        <SecondTextPattern
          redText="News"
          title={
            <p className="text-[4rem] font-[350] text-white">
              Here is <span className="text-[#277FCD]">our latest</span> news on
              <br />
              EgySamrt
            </p>
          }
        />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        centeredSlides
        slidesPerView={window.innerWidth <= 800 ? 1 : 1.5}
        spaceBetween={40}
        speed={700}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".feedback-prev",
          nextEl: ".feedback-next",
        }}
        className="overflow-visible"
      >
        {news.map((item) => (
          <SwiperSlide
            key={item._id}
            className="flex justify-center items-center  "
          >
            <NewsBox
              title={item.title}
              pra={item.pra}
              his={item.his}
              img={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-6 mt-14">
        <button className="feedback-prev text-[#9EA8B7] text-[1.5rem] w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:text-white cursor-pointer">
          &#x21D0;
        </button>
        <button className="feedback-next text-[#9EA8B7] text-[1.5rem] w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:text-white cursor-pointer">
          &#x21D2;
        </button>
      </div>
    </div>
  );
}
