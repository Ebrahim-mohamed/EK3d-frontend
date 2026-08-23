import { useTranslations } from "next-intl";
import Link from "next/link";

export function InternshipBox({
  title,
  des,
  points,
  img
}: {
  title: string;
  des: string;
  points?: string[];
  img: string;
}) {
  const t = useTranslations("CollaborationPage")
  return (
    <div
      className="p-6 flex flex-col gap-4 border border-white/10 bg-white/8 backdrop-blur-0 text-white flex-1 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/collaboration/${img}.png)`
      }}
    >
      <h1 className="text-[2rem] font-[350]">{title}</h1>
      <p className="text-[1rem] font-[325]">{des}</p>
      {points && <p className="text-[0.8rem] font-[325]">{t("programOptions")}</p>}
      <ul className="list-disc pl-6">
        {points && points.map((point) => (
          <li key={point}>{t(point)}</li>
        ))}
      </ul>
      {/* <Link
        href="join-form"
        className="text-[1rem] font-[350] border border-white/10 bg-white/12 backdrop-blur-0 px-6 py-4 w-fit"
      >
        Apply for internship &rarr;
      </Link> */}
    </div>
  );
}