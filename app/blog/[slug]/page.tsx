import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Tags } from "lucide-react";
import { blogArticles, getArticleBySlug } from "../articles";

const siteUrl = "https://archepattern.com";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "المقال غير موجود"
    };
  }

  return {
    title: `${article.title} | مدونة أركيباترن`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      siteName: "Archepattern",
      locale: "ar_SA",
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.title
        }
      ]
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "ar-SA",
    image: new URL(article.image, siteUrl).toString(),
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
    keywords: article.keywords.join(", "),
    publisher: {
      "@type": "Organization",
      name: "أركيباترن"
    }
  };

  return (
    <main className="page-shell relative min-h-screen overflow-hidden font-arabic text-right" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.045] px-4 py-2.5 text-sm font-bold text-white/70 transition hover:border-teal/40 hover:text-white"
            >
              المدونة
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </a>
            <a
              href="/#review"
              className="hidden rounded-lg bg-teal px-4 py-2.5 text-sm font-extrabold text-ink transition hover:bg-white sm:inline-flex"
            >
              اطلب تقييمًا مجانيًا
            </a>
          </div>
        </nav>
      </header>

      <article className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <div className="mb-8">
          <a href="/blog" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.045] px-4 py-2.5 text-sm font-bold text-white/70 transition hover:border-teal/40 hover:text-white">
            <ArrowLeft className="h-4 w-4 rotate-180" />
            العودة إلى المدونة
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[460px]">
            <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
            <div className="absolute bottom-0 right-0 max-w-4xl p-5 md:p-8">
              <span className="inline-flex rounded-lg border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-extrabold text-gold">
                {article.category}
              </span>
              <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.35] text-white md:text-5xl">
                {article.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-white/62">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-teal" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
          <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.035] p-5 md:p-8">
            <div className="space-y-5 text-lg leading-9 text-white/76">
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {article.sections.map((section) => (
              <section key={section.heading} className="mt-10 border-t border-white/10 pt-8">
                <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-lg leading-9 text-white/72">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 grid gap-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="rounded-lg border border-teal/15 bg-teal/10 px-4 py-3 font-bold leading-7 text-white/82">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">الخلاصة</h2>
              <div className="mt-5 space-y-5 text-lg leading-9 text-white/76">
                {article.conclusion.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>

          <aside className="glass-panel rounded-lg p-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-gold">
              <Tags className="h-4 w-4" />
              كلمات مفتاحية
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.keywords.map((keyword) => (
                <span key={keyword} className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-sm font-bold text-white/68">
                  {keyword}
                </span>
              ))}
            </div>
            <div className="mt-7 rounded-lg border border-teal/20 bg-teal/10 p-4">
              <h2 className="text-xl font-extrabold text-white">تريد تطبيق الفكرة على منشأتك؟</h2>
              <p className="mt-3 leading-7 text-white/68">
                أرسل العملية التي تريد اختصارها، وسنحدد أين يمكن للأتمتة أو الذكاء الاصطناعي أن يعطي نتيجة سريعة.
              </p>
              <a href="/#review" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-white">
                اطلب تقييمًا مجانيًا
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
