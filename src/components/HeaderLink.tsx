import { useLocale } from "next-intl";
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
  if (link === "contact")
    return (
      <Link
        href={`/en/contact`}
        onClick={fun}
        className="px-6 py-4 border text-[1rem] font-medium text-white border-white max-[750px]:text-[1.5rem]"
      >
        {name} &rarr;
      </Link>
    );

  return (
    <Link
      href={`/en/${link}`}
      onClick={fun}
      className={`text-[1rem] max-[750px]:text-[1.5rem] text-white hover:scale-110 duration-75 ${
        path.includes(link) && name !== "Home" ? "font-bold" : "font-light"
      }`}
    >
      {name}
    </Link>
  );
}
