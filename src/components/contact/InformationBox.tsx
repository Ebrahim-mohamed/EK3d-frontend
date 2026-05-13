import { useTranslations } from "next-intl";
import { ContactInfoBox } from "./ContactInfoBox";

export function InformationBox() {
  const t=useTranslations("ContactPage")
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-white text-[1.75rem] font-[350] ">
          {t("infoTitle")}
        </h1>
        <p className="text-[1rem] leading-[160%] max-w-[45rem] font-normal text-[#C9C9C9]">
          {t("infoDes")}
        </p>
      </div>
      <div className="flex items-start">
        <ContactInfoBox
          icon="phone"
          title={t("phone")}
          info={t("phoneData")}
        />
        <ContactInfoBox
          icon="whatsapp"
          title={t("whatsapp")}
          info={t("whatsappData")}
        />
        <ContactInfoBox
          icon="email"
          title={t("mail")}
          info={t("mailData")}
        />
      </div>
      {/* <div className="flex ">
        <ContactInfoBox
          icon="location"
          title="Location"
          info={
            <span>
              15D/5 Sayed Dawood Street, <br /> El Laselky District, New Maadi,
              Cair
            </span>
          }
        />
      </div> */}
    </div>
  );
}
