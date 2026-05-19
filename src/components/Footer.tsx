import Image from "next/image";
import { FooterLink } from "./FooterLink";
import Link from "next/link";
import CompanyProfileForm from "./CompanyForm";

const firstLinks = [
  { link: "Company", to: "community" },
  { link: "About Us", to: "about" },
  { link: "Collaboration Programs", to: "collaboration" },
  // { link: "Subsidiary", to: "subsidiary" },
  { link: "Contact us", to: "contact" },
  // { link: "News", to: "home/#news" },
];
const secondLinks = [
  { link: "Services", to: "services" },
  { link: "Turnkey Projects", to: "services/#turnkeyProjects" },
  { link: "Flooring Projects", to: "services/#flooringProjects" },
  { link: "Concrete Flooring", to: "services/#concreteFlooring" },
];
const thirdLinks = [{ link: "Connect", to: "contact" }];
const social = [
  { link: "facebook", to: "https://www.facebook.com/share/19jqUgPwUL/" },
  {
    link: "instagram",
    to: "https://www.instagram.com/egysmart_es?igsh=bXk5ZzhlYWJsNGIw",
  },
  {
    link: "linkedin",
    to: "https://www.linkedin.com/company/egysmart-4-modern-engineering/",
  },
];
export function Footer() {
  return (
    <div className="p-20 max-[600px]:px-12 flex flex-col gap-12 bg-[#0A0A0A]">
      <div className="flex items-center justify-between gap-6 max-[500px]:flex-col max-[500px]:items-start">
        <Link href="/" className="w-fit">
          <Image
            className="w-[8rem] "
            src="/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </Link>
        <CompanyProfileForm />
      </div>
      <div>
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-between  w-full max-[800px]:flex-col max-[800px]:gap-4 ">
            <p className="text-[1rem] font-[325] text-white max-[800px]:mb-6">
              EK3DPrints is specialized in modern engineering that focus <br />{" "}
              on analysis, design, and innovation of contemporary <br />{" "}
              construction, founded in 2015. <br /> Our team is committed to
              consistently deliver high-quality, <br /> innovative, safe
              projects on time.
            </p>
            <div className="flex flex-col items-start justify-center gap-6 max-[800px]:gap-4">
              {firstLinks.map((link) => (
                <FooterLink name={link.link} to={link.to} key={link.to} />
              ))}
            </div>
            {/* <div className="flex flex-col items-start justify-center gap-6 max-[800px]:gap-4">
              {secondLinks.map((link) => (
                <FooterLink name={link.link} to={link.to} key={link.to} />
              ))}
            </div> */}
            <div className="flex flex-col items-start justify-center gap-6 max-[800px]:gap-4">
              {thirdLinks.map((link) => (
                <FooterLink name={link.link} to={link.to} key={link.to} />
              ))}
              <div className="flex items-center justify-center gap-6">
                {social.map((link) => (
                  <FooterLink name={link.link} to={link.to} key={link.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-[1rem] font-[325] text-[#BBC4D1]">
          ©2026 EK3DPrints. All rights reserved.
        </p>
      </div>
    </div>
  );
}
