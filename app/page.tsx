"use client";

import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Languages,
  LayoutDashboard,
  MessageSquareText,
  Network,
  PhoneCall,
  Send,
  Settings2,
  Workflow,
  Zap,
  type LucideIcon
} from "lucide-react";
import { FormEvent, ReactNode, useEffect, useState } from "react";

type Lang = "ar" | "en";

type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type Step = {
  title: string;
  text: string;
};

type Copy = {
  dir: "rtl" | "ltr";
  font: string;
  switchLabel: string;
  nav: Array<[string, string]>;
  cta: string;
  badge: string;
  heroTitle: string;
  heroText: string;
  heroPoint: string;
  secondaryCta: string;
  outcomes: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesText: string;
  services: Service[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowText: string;
  steps: Step[];
  useCasesTitle: string;
  useCases: Array<[string, LucideIcon]>;
  reviewEyebrow: string;
  reviewTitle: string;
  reviewText: string;
  reviewItems: string[];
  formTitle: string;
  formLabels: [string, string];
  problemLabel: string;
  submitLabel: string;
  sendingLabel: string;
  sentMessage: string;
  errorMessage: string;
  footerText: string;
};

const copy: Record<Lang, Copy> = {
  ar: {
    dir: "rtl",
    font: "font-arabic text-right",
    switchLabel: "English",
    nav: [
      ["الحلول", "services"],
      ["الطريقة", "workflow"],
      ["المراجعة", "review"]
    ],
    cta: "اطلب مراجعة مجانية",
    badge: "ذكاء اصطناعي وأتمتة للشركات",
    heroTitle: "حوّل العمل المتكرر إلى نظام ذكي يعمل عنك",
    heroText:
      "نختصر الفوضى التشغيلية في حلول عملية: أتمتة، وكلاء ذكاء اصطناعي، مساعدات واتساب أو موقع، ولوحات متابعة واضحة.",
    heroPoint: "ابدأ بعملية واحدة مزعجة. نحن نحدد أين يمكن للذكاء الاصطناعي أن يوفر وقتًا ومالًا.",
    secondaryCta: "شاهد ما نبنيه",
    outcomes: ["ردود أسرع", "متابعة لا تُنسى", "تقارير تلقائية", "وقت أقل في العمل اليدوي"],
    servicesEyebrow: "ما الذي نبنيه؟",
    servicesTitle: "حلول قليلة، واضحة، ومباشرة",
    servicesText: "نختار الأداة بعد فهم المشكلة، وليس قبلها.",
    services: [
      {
        title: "أتمتة سير العمل",
        text: "ربط الطلبات، الموافقات، الرسائل، المهام، والتقارير بين أدواتك الحالية.",
        icon: Workflow
      },
      {
        title: "وكلاء ومساعدات ذكية",
        text: "مساعد يرد، يجمع البيانات، يؤهل العملاء، أو يساعد الفريق داخليًا.",
        icon: BrainCircuit
      },
      {
        title: "لوحات وتقارير",
        text: "أرقام يومية واضحة بدل ملفات إكسل ورسائل متابعة لا تنتهي.",
        icon: LayoutDashboard
      },
      {
        title: "أنظمة داخلية مخصصة",
        text: "أدوات بسيطة لعملياتك الخاصة عندما لا تكفي الحلول الجاهزة.",
        icon: Settings2
      }
    ],
    workflowEyebrow: "الطريقة",
    workflowTitle: "نبدأ من الواقع، لا من قائمة أدوات",
    workflowText: "نسمع كيف يعمل الفريق اليوم، نحدد التكرار، ثم نبني نظامًا صغيرًا يمكن قياس أثره بسرعة.",
    steps: [
      {
        title: "نراجع عملية واحدة",
        text: "مثل متابعة العملاء، التقارير، الحجز، الردود المتكررة، أو الموافقات."
      },
      {
        title: "نرسم الحل الأسرع",
        text: "نحدد ما يُؤتمت، أين يتدخل الإنسان، وما الأدوات المناسبة."
      },
      {
        title: "نبني ونحسّن",
        text: "نطلق نسخة عملية، نقيس النتائج، ثم نوسعها عند الحاجة."
      }
    ],
    useCasesTitle: "نبدأ عادة من هنا",
    useCases: [
      ["المبيعات", MessageSquareText],
      ["خدمة العملاء", PhoneCall],
      ["العمليات", Settings2],
      ["التقارير", BarChart3],
      ["المساعدات الذكية", Bot],
      ["ربط الأنظمة", Network]
    ],
    reviewEyebrow: "مراجعة مجانية",
    reviewTitle: "أرسل لنا العملية المزعجة",
    reviewText:
      "لا تحتاج تجهيز عرض أو معرفة اسم التقنية. اشرح ما يحدث اليوم، وسنقترح طريقة أبسط لتشغيله.",
    reviewItems: ["نحدد فرص الأتمتة", "نقترح حلًا عمليًا", "نوضح ما يمكن تنفيذه بسرعة"],
    formTitle: "خلّنا نفهم التحدي",
    formLabels: ["الاسم", "رقم الجوال أو واتساب أو البريد الإلكتروني"],
    problemLabel: "ما العملية التي تريد اختصارها أو تحسينها؟",
    submitLabel: "إرسال الطلب",
    sendingLabel: "جاري الإرسال...",
    sentMessage: "وصلنا طلبك. سنراجع التفاصيل ونتواصل معك قريبًا.",
    errorMessage: "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى.",
    footerText: "Archepattern يحوّل العمليات المتكررة إلى أنظمة ذكية قابلة للتوسع."
  },
  en: {
    dir: "ltr",
    font: "font-latin text-left",
    switchLabel: "العربية",
    nav: [
      ["Solutions", "services"],
      ["Method", "workflow"],
      ["Review", "review"]
    ],
    cta: "Request a Free Review",
    badge: "AI and automation for business",
    heroTitle: "Turn repeated work into an intelligent system",
    heroText:
      "We turn operational chaos into practical automation, AI agents, WhatsApp or website assistants, and clear dashboards.",
    heroPoint: "Start with one annoying process. We find where AI can save time and money.",
    secondaryCta: "See what we build",
    outcomes: ["Faster replies", "Follow-ups that happen", "Automatic reports", "Less manual work"],
    servicesEyebrow: "What We Build",
    servicesTitle: "Fewer words. Clearer solutions.",
    servicesText: "We choose the tool after we understand the problem, not before.",
    services: [
      {
        title: "Workflow Automation",
        text: "Connect requests, approvals, messages, tasks, and reports across your current tools.",
        icon: Workflow
      },
      {
        title: "AI Agents and Assistants",
        text: "Assistants that reply, collect data, qualify leads, or support your internal team.",
        icon: BrainCircuit
      },
      {
        title: "Dashboards and Reports",
        text: "Daily numbers in one place instead of endless spreadsheets and follow-up messages.",
        icon: LayoutDashboard
      },
      {
        title: "Custom Internal Systems",
        text: "Simple tools for your own operations when off-the-shelf software is not enough.",
        icon: Settings2
      }
    ],
    workflowEyebrow: "Method",
    workflowTitle: "We start with reality, not a tool list",
    workflowText: "We learn how the team works today, find repetition, then build a small system with measurable impact.",
    steps: [
      {
        title: "Review one process",
        text: "Lead follow-up, reporting, booking, repeated replies, approvals, or internal support."
      },
      {
        title: "Map the fastest fix",
        text: "We define what should be automated, where humans stay involved, and which tools fit."
      },
      {
        title: "Build and improve",
        text: "We launch a practical version, measure results, then expand only when needed."
      }
    ],
    useCasesTitle: "Common starting points",
    useCases: [
      ["Sales", MessageSquareText],
      ["Customer Support", PhoneCall],
      ["Operations", Settings2],
      ["Reporting", BarChart3],
      ["AI Assistants", Bot],
      ["Integrations", Network]
    ],
    reviewEyebrow: "Free Review",
    reviewTitle: "Send us the annoying process",
    reviewText:
      "No deck or technical language needed. Explain what happens today, and we will suggest a simpler way to run it.",
    reviewItems: ["Find automation opportunities", "Suggest a practical solution", "Show what can launch quickly"],
    formTitle: "Let's understand the challenge",
    formLabels: ["Name", "Mobile, WhatsApp, or email"],
    problemLabel: "What process do you want to shorten or improve?",
    submitLabel: "Send Request",
    sendingLabel: "Sending...",
    sentMessage: "We received your request. We will review the details and contact you soon.",
    errorMessage: "We could not send the request. Please try again.",
    footerText: "Archepattern turns repeated operations into intelligent, scalable systems."
  }
};

const visualAlt: Record<Lang, string> = {
  ar: "واجهة تمثل أنظمة الذكاء الاصطناعي والأتمتة لإدارة العمل",
  en: "Interface representing AI and automation systems for business operations"
};

function ButtonLink({
  href,
  children,
  lang,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: ReactNode;
  lang: Lang;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 ${
        variant === "primary"
          ? "bg-teal text-ink shadow-teal hover:bg-white"
          : "border border-white/15 bg-white/[0.045] text-white hover:border-electric/45 hover:bg-electric/10"
      } ${className}`}
    >
      {children}
      <ArrowUpLeft className={`h-4 w-4 ${lang === "en" ? "rotate-90" : ""}`} />
    </a>
  );
}

function Section({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 ${className}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-8 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-bold text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-white/68">{text}</p> : null}
    </div>
  );
}

function ContactForm({ text, lang }: { text: Copy; lang: Lang }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    setError(false);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "");
    formData.append("subject", "New contact request from Archepattern website");
    formData.append("from_name", "Archepattern Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      form.reset();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = `w-full rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 ${
    lang === "ar" ? "text-right" : "text-left"
  } text-white outline-none transition placeholder:text-white/30 focus:border-teal/50 focus:bg-white/[0.07]`;

  return (
    <form onSubmit={onSubmit} className="glass-panel rounded-lg p-5 md:p-7">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <h3 className="text-2xl font-extrabold text-white">{text.formTitle}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {text.formLabels.map((label, index) => (
          <label key={label} className="block">
            <span className="mb-2 block text-sm font-bold text-white/68">{label}</span>
            <input name={index === 0 ? "name" : "contact"} type="text" className={inputClass} required />
          </label>
        ))}
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-white/68">{text.problemLabel}</span>
        <textarea name="message" className={`${inputClass} min-h-36 resize-y`} required />
      </label>
      <button
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-4 text-sm font-extrabold text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? text.sendingLabel : text.submitLabel}
        <Send className="h-4 w-4" />
      </button>
      {sent ? <p className="mt-5 rounded-lg border border-teal/25 bg-teal/10 p-4 font-bold text-teal">{text.sentMessage}</p> : null}
      {error ? <p className="mt-5 rounded-lg border border-red-300/25 bg-red-300/10 p-4 font-bold text-red-200">{text.errorMessage}</p> : null}
    </form>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const savedLang = window.localStorage.getItem("archepattern-lang");
    if (savedLang === "ar" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  function switchLanguage() {
    const nextLang = lang === "ar" ? "en" : "ar";
    setLang(nextLang);
    window.localStorage.setItem("archepattern-lang", nextLang);
  }

  const text = copy[lang];

  return (
    <main className={`page-shell relative min-h-screen overflow-hidden ${text.font}`} dir={text.dir} lang={lang}>
      <div className="noise" />
      <div className="geometric-grid pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-45" />

      <header className="sticky top-0 z-[80] border-b border-white/10 bg-ink/76 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6">
          <a href="#hero" className="flex min-w-0 items-center">
            <span className="relative block h-9 w-32 shrink-0 overflow-hidden sm:h-12 sm:w-56">
              <img src="assets/Logos/Dark-cropped.png" alt="Archepattern" className="h-full w-full object-contain object-center" />
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {text.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-lg px-4 py-2 text-sm font-bold text-white/58 transition hover:bg-white/8 hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={switchLanguage}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.045] px-3 py-2.5 text-xs font-bold text-white/70 transition hover:border-teal/40 hover:text-white sm:px-4 sm:text-sm"
            >
              <Languages className="h-4 w-4" />
              {text.switchLabel}
            </button>
            <ButtonLink href="#review" lang={lang} className="hidden !px-4 !py-2.5 sm:inline-flex">
              {text.cta}
            </ButtonLink>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-4 pb-14 pt-14 md:px-6 md:pb-20 md:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative z-10 min-w-0">
          <div className="inline-flex items-center gap-2 rounded-lg border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-bold text-gold">
            <Zap className="h-4 w-4" />
            {text.badge}
          </div>
          <h1 className="mt-6 max-w-full text-[2.1rem] font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {text.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74 md:text-xl md:leading-9">{text.heroText}</p>
          <div className="mt-5 rounded-lg border border-teal/20 bg-teal/10 p-4 text-base font-bold leading-7 text-white/86">
            {text.heroPoint}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="#review" lang={lang}>
              {text.cta}
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" lang={lang}>
              {text.secondaryCta}
            </ButtonLink>
          </div>
          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {text.outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-white/70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-glow max-sm:min-h-[320px] sm:min-h-[500px]">
          <img src="assets/hero-command-center.png" alt={visualAlt[lang]} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
            {text.outcomes.slice(0, 4).map((item, index) => (
              <motion.div
                key={item}
                className="rounded-lg border border-white/12 bg-ink/76 p-4 font-extrabold text-white shadow-glow backdrop-blur"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.8, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section id="services">
        <SectionHeader eyebrow={text.servicesEyebrow} title={text.servicesTitle} text={text.servicesText} centered />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {text.services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="glass-panel rounded-lg p-5 transition hover:-translate-y-1 hover:border-teal/35">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/66">{service.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="workflow" className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionHeader eyebrow={text.workflowEyebrow} title={text.workflowTitle} text={text.workflowText} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {text.useCases.map(([label, Icon]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <Icon className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm font-extrabold text-white/78">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <p className="text-sm font-bold text-gold">{text.useCasesTitle}</p>
          {text.steps.map((step, index) => (
            <div key={step.title} className="glass-panel rounded-lg p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-sm font-extrabold text-electric">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                  <p className="mt-2 leading-7 text-white/66">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="review">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-lg border border-teal/20 bg-gradient-to-br from-teal/12 via-electric/8 to-violet/12 p-6 shadow-teal md:p-8">
            <div className="arabesque absolute inset-0 opacity-35" />
            <div className="relative">
              <p className="text-sm font-bold text-gold">{text.reviewEyebrow}</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">{text.reviewTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">{text.reviewText}</p>
              <div className="mt-7 grid gap-3">
                {text.reviewItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink/36 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
                    <span className="font-bold text-white/82">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm text={text} lang={lang} />
        </div>
      </Section>

      <footer className="border-t border-white/10 px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <span className="relative block h-12 w-56 overflow-hidden">
            <img src="assets/Logos/Dark-cropped.png" alt="Archepattern" className="h-full w-full object-contain object-center" />
          </span>
          <p className="max-w-2xl text-sm font-semibold text-white/55">{text.footerText}</p>
        </div>
      </footer>
    </main>
  );
}
