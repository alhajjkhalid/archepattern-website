import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock, SearchCheck, Tags } from "lucide-react";
import { blogArticles } from "./articles";

export const metadata: Metadata = {
  title: "المدونة | الذكاء الاصطناعي والأتمتة للمنشآت السعودية",
  description:
    "مقالات عربية عن أتمتة الأعمال، وكلاء الذكاء الاصطناعي، أتمتة واتساب، لوحات البيانات، وتحسين عمليات المنشآت الصغيرة والمتوسطة في السعودية.",
  keywords: [
    "الذكاء الاصطناعي في السعودية",
    "أتمتة الأعمال",
    "الشركات الصغيرة والمتوسطة",
    "أتمتة واتساب",
    "أتمتة المبيعات",
    "لوحات بيانات",
    "حلول ذكاء اصطناعي للشركات"
  ],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "مدونة أركيباترن | أتمتة وذكاء اصطناعي للمنشآت الصغيرة والمتوسطة",
    description:
      "محتوى عربي عملي للمنشآت السعودية التي تريد اختصار العمل المتكرر وتحسين المبيعات وخدمة العملاء.",
    url: "/blog",
    siteName: "Archepattern",
    locale: "ar_SA",
    type: "website"
  }
};

const featuredKeywords = [
  "أتمتة الأعمال في السعودية",
  "حلول الذكاء الاصطناعي للشركات",
  "أتمتة خدمة العملاء",
  "أتمتة المبيعات",
  "ربط الأنظمة",
  "الشركات الصغيرة والمتوسطة"
];

export default function BlogPage() {
  return (
    <main className="page-shell relative min-h-screen overflow-hidden font-arabic text-right" dir="rtl" lang="ar">
      <div className="noise" />
      <div className="geometric-grid pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-45" />

      <header className="sticky top-0 z-[80] border-b border-white/10 bg-ink/76 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6">
          <a href="/" className="flex min-w-0 items-center">
            <span className="relative block h-9 w-32 shrink-0 overflow-hidden sm:h-12 sm:w-56">
              <img src="/assets/Logos/Dark-cropped.png" alt="أركيباترن" className="h-full w-full object-contain object-center" />
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/#review"
              className="hidden rounded-lg bg-teal px-4 py-2.5 text-sm font-extrabold text-ink transition hover:bg-white sm:inline-flex"
            >
              اطلب تقييمًا مجانيًا
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.045] px-4 py-2.5 text-sm font-bold text-white/70 transition hover:border-teal/40 hover:text-white"
            >
              الرئيسية
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 md:px-6 md:pb-14 md:pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-bold text-gold">
            <SearchCheck className="h-4 w-4" />
            محتوى عربي للظهور في نتائج البحث
          </div>
          <h1 className="mt-6 text-[2.2rem] font-extrabold leading-[1.3] text-white sm:text-5xl md:text-6xl">
            مقالات عن الذكاء الاصطناعي والأتمتة للمنشآت الصغيرة والمتوسطة في السعودية
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
            أدلة عملية لأصحاب المنشآت والمديرين في الرياض وجدة والدمام وباقي السعودية: كيف تبدأ بالأتمتة، كيف تستخدم مساعدات واتساب، وكيف تحول العمليات المتكررة إلى أنظمة قابلة للقياس.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {featuredKeywords.map((keyword) => (
            <span key={keyword} className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-sm font-bold text-white/68">
              {keyword}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 md:px-6 lg:grid-cols-2">
        {blogArticles.map((article, index) => (
          <article
            key={article.slug}
            className={`glass-panel overflow-hidden rounded-lg transition hover:-translate-y-1 hover:border-teal/35 ${
              index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.1fr]" : ""
            }`}
          >
            <a href={`/blog/${article.slug}`} className="relative block min-h-64 overflow-hidden bg-white/[0.035]">
              <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/12 to-transparent" />
              <span className="absolute right-4 top-4 rounded-lg border border-white/15 bg-ink/72 px-3 py-2 text-sm font-extrabold text-gold backdrop-blur">
                {article.category}
              </span>
            </a>
            <div className="p-5 md:p-7">
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-white/50">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-teal" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal" />
                  {article.readTime}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-extrabold leading-snug text-white md:text-3xl">
                <a href={`/blog/${article.slug}`} className="transition hover:text-teal">
                  {article.title}
                </a>
              </h2>
              <p className="mt-4 text-base leading-8 text-white/66">{article.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {article.keywords.slice(0, 4).map((keyword) => (
                  <span key={keyword} className="rounded-lg border border-teal/15 bg-teal/10 px-3 py-1.5 text-xs font-bold text-teal">
                    {keyword}
                  </span>
                ))}
              </div>
              <a
                href={`/blog/${article.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-white"
              >
                قراءة المقال
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="relative overflow-hidden rounded-lg border border-teal/20 bg-gradient-to-br from-teal/12 via-electric/8 to-violet/12 p-6 md:p-8">
          <div className="arabesque absolute inset-0 opacity-30" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold text-gold">
                <Tags className="h-4 w-4" />
                تقييم مجاني
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                هل لديك عملية متكررة تريد اختصارها؟
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-white/70">
                أرسل لنا طريقة عملك الحالية، وسنقترح أين يمكن استخدام الأتمتة أو الذكاء الاصطناعي لتوفير وقت واضح لفريقك.
              </p>
            </div>
            <a href="/#review" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-4 text-sm font-extrabold text-ink transition hover:bg-white">
              اطلب التقييم
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
