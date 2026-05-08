import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archepattern | حلول الذكاء الاصطناعي والأتمتة للشركات",
  description:
    "نساعد الشركات في السعودية والمنطقة على تقليل العمل اليدوي وبناء أنظمة ذكية باستخدام الأتمتة، الوكلاء الذكيين، مساعدات المحادثة، الوكلاء الصوتيين، لوحات التحكم، وربط الأنظمة.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  openGraph: {
    title: "Archepattern — من الفوضى التشغيلية إلى الأنظمة الذكية",
    description:
      "حلول أتمتة وذكاء اصطناعي مصممة على واقع عملك، من الردود والمتابعة والتقارير إلى الوكلاء الذكيين والأنظمة المخصصة.",
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
