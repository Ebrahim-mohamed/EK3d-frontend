import { Inter, Tajawal } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import RootLayoutClient from "../RootLayout";

// English font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Arabic font
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// Optional decorative title font

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={locale === "ar" ? tajawal.className : inter.className}
    >
      <body className="relative overflow-x-hidden">
        <NextIntlClientProvider locale={locale}>
          {/* <div className="fixed bg-white top-[9rem] left-0 w-[20rem] h-[43rem]"></div> */}
          
           <RootLayoutClient> <NextIntlClientProvider>{children}</NextIntlClientProvider></RootLayoutClient>
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
