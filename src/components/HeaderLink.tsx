import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLink({
  name,
  link,
  fun,
}: {
  name: string;
  link: string;
  fun?: () => void;
}) {
  const path = usePathname();
const locale=useLocale()
  const t=useTranslations("tabs")
  return (
    <Link
      href={`/${locale}/${link}`}
      onClick={fun}
      className={`text-[1rem] max-[750px]:text-[1.5rem] text-white hover:scale-110 duration-75 ${
        path.includes(link) && name !== "Home" ? "font-bold" : "font-light"
      }`}
    >
      {t(name)}
    </Link>
  );
}
