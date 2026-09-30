import Image from "next/image";
import { useTranslations } from "next-intl";

export function InternshipBox({
  title,
  des,
  points,
  img,
  num,
}: {
  title: string;
  des: string;
  points?: string[];
  img: string;
  num: number;
}) {
  const t = useTranslations("CollaborationPage");

  const isReversed = num % 2 !== 0;

  return (
    <div className="w-full grid grid-cols-2 max-[700px]:grid-cols-1 overflow-hidden rounded-2xl bg-[#111111] text-white min-h-[28rem]">
      
      {/* IMAGE */}
      <div
        className={`
          relative
          min-h-[28rem]
          max-[700px]:min-h-[20rem]
          ${isReversed ? "order-2 max-[700px]:order-1" : "order-1"}
        `}
      >
        <Image
          src={`/collaboration/${img}.png`}
          alt={title}
          fill
          className="object-cover object-right "
        />
      </div>

      {/* CONTENT */}
      <div
        className={`
          flex
          flex-col
          justify-center
          p-[4rem]
          max-[1000px]:p-[2.5rem]
          max-[700px]:p-[2rem]
          ${isReversed ? "order-1 max-[700px]:order-2" : "order-2"}
        `}
        dir="auto"
      >
        <h2 className="text-[2.5rem] max-[1000px]:text-[2rem] max-[500px]:text-[1.7rem] font-semibold leading-tight mb-6">
          {title}
        </h2>

        <p className="text-[1.05rem] max-[1000px]:text-[1rem] leading-[1.8] text-white/70">
          {des}
        </p>

        {points && (
          <div className="mt-6">
            <p className="text-[0.9rem] font-medium mb-3">
              {t("programOptions")}
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[0.9rem] text-white/70">
              {points.map((point) => (
                <li key={point}>{t(point)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}