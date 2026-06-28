"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  function handleSwitch(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleSwitch(locale)}
          disabled={locale === currentLocale}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === currentLocale
              ? "bg-white text-black cursor-default"
              : "bg-transparent text-white border border-white/30 hover:bg-white/10"
          }`}
        >
          {locale === "en" ? "EN" : "AR"}
        </button>
      ))}
    </div>
  );
}