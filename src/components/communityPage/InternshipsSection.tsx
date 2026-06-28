import { useTranslations } from "next-intl";
import { MostTextPattern } from "../MostTextPattern";
import { InternshipBox } from "./InternshipBox";
const internships = [
  {
    title: "programTwoTitle",
    des: "programTwoPra",
    point: [
      "programTwoOption1",
      "programTwoOption2",
      "programTwoOption3",
      "programTwoOption4",
      "programTwoOption5",
    ],
  },
  {
    title: "programThreeTitle",
    des: "programThreePra",
    point: [
      "programThreeOption1",
      "programThreeOption2",
      "programThreeOption3",
      "programThreeOption4",
 
    ],
  },
  {
    title: "programFourTitle",
    des: "programFourPra",
    
  },
  
];
export function InternshipsSection() {
  const t=useTranslations("CollaborationPage")
  return (
    <div className="p-[var(--sectionPadding)]  bg-black flex flex-col items-center justify-center gap-8">
      <MostTextPattern
        isCenter
        moreWidth
        redText={t("SmallTitle")}
        whiteText={t("title")}
      />
      <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
        {internships.map((internship) => (
          <InternshipBox
            points={internship.point}
            des={t(internship.des)}
            title={t(internship.title)}
            key={internship.des}
          />
        ))}
      </div>
    </div>
  );
}
