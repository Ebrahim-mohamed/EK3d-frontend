"use client";

import { Hero } from "@/components/Hero";
import { TekBox } from "./TekBox";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type TechnologyItem = {
  _id: string;
  image: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
};

export default function Technology() {
  const t = useTranslations("technology");

  const [technology, setTechnology] = useState<TechnologyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTechnology() {
      try {
        const res = await fetch("https://ek3dprints.com/api/technology");

        if (!res.ok) {
          throw new Error("Failed to fetch technology");
        }

        const data = await res.json();
        setTechnology(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTechnology();
  }, []);

  return (
    <div>
      <Hero
        page="technology"
        title={t("title")}
        pra="Let's build together. Contact us to begin."
      />

      <div className="p-[var(--sectionPadding)] bg-[#0A0A0A] flex flex-col gap-12">
        {loading && (
          <p className="text-white text-center text-xl">
            Loading...
          </p>
        )}

        {!loading &&
          technology.map((item) => (
            <TekBox
              key={item._id}
              img={item.image}
              titleAr={item.titleAr}
              titleEn={item.titleEn}
              desAr={item.descriptionAr}
              desEn={item.descriptionEn}
            />
          ))}

        {!loading && technology.length === 0 && (
          <p className="text-white text-center text-xl">
            No technology found.
          </p>
        )}
      </div>
    </div>
  );
}