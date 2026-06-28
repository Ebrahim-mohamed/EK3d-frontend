"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FooterLink } from "./FooterLink";
import CompanyProfileForm from "./CompanyForm";

export function Footer() {
  const t = useTranslations("Footer");

  const firstLinks = [
    { key: "company", title: true, to: "community" },
    { key: "about", to: "about" },
    { key: "collaborations", to: "collaboration" },
    { key: "contact", to: "contact" },
  ];

  const thirdLinks = [
    { key: "connect", title: true, to: "contact" },
  ];

  const social = [
    {
      name: "facebook",
      to: "https://www.facebook.com/share/19jqUgPwUL/",
    },
    {
      name: "instagram",
      to: "https://www.instagram.com/egysmart_es?igsh=bXk5ZzhlYWJsNGIw",
    },
    {
      name: "linkedin",
      to: "https://www.linkedin.com/company/egysmart-4-modern-engineering/",
    },
  ];

  return (
    <div className="p-20 max-[600px]:px-12 flex flex-col gap-12 bg-[#0A0A0A]">
      <div className="flex items-center justify-between gap-6 max-[500px]:flex-col max-[500px]:items-start">
        <Link href="/" className="w-fit">
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={300}
            className="w-[8rem]"
          />
        </Link>

        {/* <CompanyProfileForm /> */}
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-start justify-between w-full max-[800px]:flex-col max-[800px]:gap-4">
          <p className="text-[1rem] font-[325] text-white max-[800px]:mb-6 max-w-[40%]">
            {t("description")}
          </p>

          <div className="flex flex-col gap-6 max-[800px]:gap-4">
            {firstLinks.map((link) => (
              <FooterLink
                key={link.key}
                name={
                  link.title
                    ? t(`groups.${link.key}`)
                    : t(`links.${link.key}`)
                }
                to={link.to}
                title={link.title}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 max-[800px]:gap-4">
            {thirdLinks.map((link) => (
              <FooterLink
                key={link.key}
                name={t(`groups.${link.key}`)}
                to={link.to}
                title
              />
            ))}

            <div className="flex gap-6">
              {social.map((link) => (
                <FooterLink
                  key={link.name}
                  name={link.name}
                  to={link.to}
                  social
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-[1rem] font-[325] text-[#BBC4D1]">
          {t("copyright")}
        </p>
      </div>
    </div>
  );
}