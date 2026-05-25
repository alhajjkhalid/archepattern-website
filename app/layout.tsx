import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://archepattern.com"),
  title: "Archepattern | حلول الذكاء الاصطناعي والأتمتة للشركات",
  description:
    "نساعد الشركات على اختصار العمل المتكرر عبر الأتمتة، وكلاء الذكاء الاصطناعي، مساعدات المحادثة، لوحات المتابعة، وربط الأنظمة.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  openGraph: {
    title: "Archepattern — أنظمة ذكية للعمل المتكرر",
    description:
      "حوّل العمليات المتكررة إلى أتمتة ووكلاء ذكاء اصطناعي ولوحات متابعة واضحة.",
    url: "/",
    siteName: "Archepattern",
    locale: "ar_SA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
