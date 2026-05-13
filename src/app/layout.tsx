// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "./RootLayout";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "EK3dPrints",
  description: "3d prints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
       {children}
      </body>
    </html>
  );
}
