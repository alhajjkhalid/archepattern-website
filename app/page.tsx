"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpLeft,
  AudioLines,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronLeft,
  CircuitBoard,
  FileText,
  GitBranch,
  LayoutDashboard,
  Link2,
  MessageSquareText,
  Network,
  Orbit,
  PanelsTopLeft,
  PhoneCall,
  Radar,
  Send,
  Settings2,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";
import { FormEvent, ReactNode, useEffect, useState } from "react";

type Lang = "ar" | "en";

const navItems = [
  ["البداية", "hero"],
  ["ما الذي نحلّه؟", "problem"],
  ["الحلول", "solutions"],
  ["طريقة العمل", "method"],
  ["أمثلة", "examples"],
  ["اطلب مراجعة مجانية", "diagnostic"]
];

const trustBadges = [
  "أتمتة العمليات المتكررة",
  "وكلاء ومساعدات ذكية",
  "ربط الأنظمة و n8n",
  "لوحات متابعة وتقارير",
  "حلول مخصصة حسب احتياجك"
];

const chaosItems = [
  "عميل ينتظر الرد",
  "تقرير يدوي",
  "متابعة منسية",
  "بيانات مشتتة",
  "موافقة متأخرة",
  "موظف يسأل نفس السؤال كل يوم"
];

const methodSteps = [
  {
    title: "نقرأ الواقع",
    text: "نفهم كيف يعمل فريقك اليوم، لا كيف يفترض أن يعمل على الورق.",
    icon: Radar
  },
  {
    title: "نكشف التكرار",
    text: "نحدد المهام المتكررة، والقرارات المتأخرة، والنقاط التي تستهلك وقت الفريق.",
    icon: Orbit
  },
  {
    title: "نرسم النظام",
    text: "نحوّل العملية إلى خريطة واضحة: من يبدأ المهمة؟ أين تذهب البيانات؟ من يوافق؟ متى يتدخل الإنسان؟",
    icon: GitBranch
  },
  {
    title: "نبني الطبقة الذكية",
    text: "نستخدم الأدوات المناسبة: n8n، ووكلاء الذكاء الاصطناعي، ومساعدات المحادثة، والوكلاء الصوتيين، ولوحات المتابعة، وأنظمة إدارة علاقات العملاء، وواجهات برمجة التطبيقات، أو أدوات مخصصة.",
    icon: CircuitBoard
  },
  {
    title: "نطلق ونحسّن",
    text: "نختبر الحل على حالات واقعية، ثم نحسّنه بناءً على الاستخدام الفعلي.",
    icon: Zap
  }
];

const solutions = [
  {
    title: "أتمتة سير العمل",
    text: "نربط الخطوات المتكررة بين الفرق والأدوات: تنبيهات، موافقات، مهام، رسائل، تحديثات لأنظمة إدارة علاقات العملاء، وتقارير تلقائية.",
    icon: Workflow,
    examples: ["أدوات الربط مثل n8n وMake وZapier", "ربط جداول جوجل وإيرتيبل ونوشن", "إشعارات واتساب أو بريد إلكتروني", "موافقات داخلية", "تحويل الطلبات إلى مهام"]
  },
  {
    title: "وكلاء ذكاء اصطناعي",
    text: "وكلاء يفهمون التعليمات، ينفذون خطوات، يلخصون، يبحثون، يفرزون الطلبات، ويقترحون الإجراء التالي.",
    icon: BrainCircuit,
    examples: ["وكيل للمبيعات", "وكيل لخدمة العملاء", "وكيل للعمليات", "وكيل داخلي للموظفين", "وكيل لتحليل التقارير"]
  },
  {
    title: "مساعدات محادثة ذكية",
    text: "مساعدات على الموقع أو واتساب أو داخل أنظمتك، ترد على الأسئلة، تجمع البيانات، تؤهل العملاء، وتحول الحالات للفريق.",
    icon: Bot,
    examples: ["مساعد للردود المتكررة", "مساعد لحجز المواعيد", "مساعد لتأهيل العملاء", "مساعد داخلي للسياسات والإجراءات"]
  },
  {
    title: "وكلاء صوتيون",
    text: "وكلاء صوتيون للتعامل مع المكالمات، الاستفسارات، الحجز، المتابعة، أو جمع المعلومات الأولية.",
    icon: AudioLines,
    examples: ["استقبال مكالمات", "تأكيد مواعيد", "متابعة عملاء", "جمع بيانات", "تحويل الحالات للموظف المناسب"]
  },
  {
    title: "لوحات تحكم وتقارير",
    text: "بدل التقارير اليدوية، نبني لوحات واضحة وتحديثات تلقائية تساعدك على معرفة ما يحدث دون مطاردة الفريق.",
    icon: LayoutDashboard,
    examples: ["تقارير يومية", "مؤشرات أداء", "متابعة مبيعات", "متابعة عمليات", "تقارير للإدارة"]
  },
  {
    title: "أنظمة داخلية مخصصة",
    text: "عندما لا تكفي الأدوات الجاهزة، نبني لك نظامًا بسيطًا ومخصصًا لطريقة عملك.",
    icon: PanelsTopLeft,
    examples: ["بوابات داخلية", "نظام متابعة شركاء أو موردين", "نظام معالجة مستندات", "نظام معرفة داخلي", "أدوات إدارية مخصصة"]
  }
];

const messInputs = [
  "محادثات واتساب طويلة",
  "ملف إكسل معقد",
  "تقرير يتكرر يوميًا",
  "نموذج يدوي",
  "عملية موافقات بطيئة",
  "فريق يكرر نفس الأسئلة",
  "عملاء لا تتم متابعتهم",
  "مكالمات لا يتم توثيقها"
];

const outputs = [
  "سير عمل واضح",
  "أتمتة تعمل تلقائيًا",
  "وكيل ذكي يساعد الفريق",
  "لوحة متابعة توضّح الصورة",
  "نظام قابل للتطوير"
];

const heroWorkflowNodes = [
  { label: "طلب عميل", meta: "واتساب", icon: MessageSquareText, className: "right-8 top-10", tone: "text-teal border-teal/30 bg-teal/10" },
  { label: "تصنيف ذكي", meta: "وكيل ذكي", icon: BrainCircuit, className: "left-8 top-16", tone: "text-electric border-electric/30 bg-electric/10" },
  { label: "تنفيذ تلقائي", meta: "سير عمل", icon: Workflow, className: "right-10 bottom-16", tone: "text-gold border-gold/30 bg-gold/10" },
  { label: "تقرير مباشر", meta: "لوحة متابعة", icon: LayoutDashboard, className: "left-10 bottom-10", tone: "text-violet border-violet/30 bg-violet/10" }
];

const methodNodePositions = [
  "right-[9%] top-[15%]",
  "left-[12%] top-[18%]",
  "left-[8%] bottom-[19%]",
  "right-[11%] bottom-[14%]",
  "right-[42%] top-[6%]"
];

const useCases = [
  ["المبيعات", "تأهيل العملاء، المتابعة، تحديث نظام إدارة علاقات العملاء، تنبيهات الفرص، ورسائل ما بعد التواصل.", MessageSquareText],
  ["خدمة العملاء", "ردود متكررة، تصنيف الشكاوى، تحويل الحالات، تلخيص المحادثات، متابعة رضا العميل.", PhoneCall],
  ["العمليات", "تقارير يومية، متابعة الفرق، تتبع الشركاء، قياس الالتزام، التصعيد التلقائي، ومؤشرات الأداء.", Settings2],
  ["الموارد البشرية والإدارة", "تهيئة الموظفين، جمع المستندات، الرد على الأسئلة الداخلية، طلبات الإجازة، الموافقات.", FileText],
  ["المالية", "تذكير بالفواتير، تتبع المدفوعات، اعتماد المصاريف، تقارير مالية مبسطة.", BarChart3],
  ["التسويق", "إعادة تنشيط العملاء، تصنيف الجمهور، متابعة الحملات، توليد أفكار محتوى، تحليل التفاعل.", Sparkles]
];

const examples = [
  ["مساعد واتساب للمبيعات", "يرد على الاستفسارات، يجمع بيانات العميل، يؤهل الطلب، ثم يرسله للفريق بشكل منظم."],
  ["تقرير عمليات يومي تلقائي", "يجمع البيانات من مصادر مختلفة ويرسل ملخصًا واضحًا للإدارة كل يوم."],
  ["وكيل داخلي للموظفين", "يجيب على أسئلة الفريق من ملفات الشركة وسياساتها وإجراءاتها."],
  ["نظام متابعة العملاء", "يتابع العملاء المحتملين، يرسل تذكيرات، ويقلل ضياع الفرص."],
  ["لوحة أداء للإدارة", "تعرض المؤشرات المهمة في مكان واحد بدل البحث في عشرات الملفات."],
  ["نظام متابعة شركاء أو موردين", "يراقب الأداء، المستندات، الالتزام، والتنبيهات التصعيدية."]
];

const whyPoints = [
  ["لا نبدأ بالأداة", "نبدأ بفهم المشكلة، ثم نختار التقنية المناسبة."],
  ["مرونة كاملة", "نستخدم ما يخدم الحل: n8n، وواجهات برمجة التطبيقات، والذكاء الاصطناعي، والوكلاء، ومساعدات المحادثة، والوكلاء الصوتيين، ولوحات المتابعة، أو نظام مخصص."],
  ["نفهم واقع السوق", "نعرف أن كثيرًا من الأعمال في المنطقة تعتمد على واتساب، إكسل، المتابعة اليدوية، والقرارات السريعة."],
  ["حلول عملية وليست استعراضية", "الهدف ليس أن يبدو النظام ذكيًا، بل أن يوفر وقتًا، يقلل أخطاء، ويرفع وضوح العمل."],
  ["قابلية للتوسع", "نبني حلولًا يمكن تطويرها مع نمو العمل، بدل حلول مؤقتة تنهار بعد شهر."]
];

const assetAlts: Record<string, string> = {
  "assets/hero-command-center.png": "واجهة مستقبلية تمثل أنظمة الأتمتة والذكاء الاصطناعي لإدارة الأعمال",
  "assets/chaos-to-system.png": "تحويل فوضى العمليات اليدوية إلى نظام عمل ذكي ومنظم",
  "assets/solutions-overview.png": "نظرة عامة على حلول الأتمتة والوكلاء الذكيين ولوحات التحكم",
  "assets/use-cases-map.png": "خريطة استخدامات الأتمتة والذكاء الاصطناعي داخل أقسام العمل المختلفة",
  "assets/system-mockup.png": "نموذج لوحة تحكم لنظام أعمال ذكي ومخصص",
  "assets/audit-cta.png": "مراجعة أولية لاكتشاف فرص الأتمتة داخل العمل",
  "assets/contact-booking.png": "نموذج تواصل وحجز استشارة مع Archepattern"
};

const navItemsEn = [
  ["Home", "hero"],
  ["Problem", "problem"],
  ["Solutions", "solutions"],
  ["Method", "method"],
  ["Examples", "examples"],
  ["Request a Review", "diagnostic"]
];

const trustBadgesEn = [
  "Automating repetitive work",
  "AI agents and assistants",
  "System integrations and n8n",
  "Dashboards and reporting",
  "Custom solutions for your workflow"
];

const chaosItemsEn = [
  "A customer waiting for a reply",
  "Manual reporting",
  "Forgotten follow-ups",
  "Scattered data",
  "Delayed approvals",
  "A team answering the same question every day"
];

const methodStepsEn = [
  {
    title: "Read the Reality",
    text: "We understand how your team actually works today, not how the process is supposed to look on paper.",
    icon: Radar
  },
  {
    title: "Find the Pattern",
    text: "We identify repeated tasks, delayed decisions, and the points that drain your team’s time.",
    icon: Orbit
  },
  {
    title: "Map the System",
    text: "We turn the process into a clear map: who starts it, where the data goes, who approves, and when humans step in.",
    icon: GitBranch
  },
  {
    title: "Build the Intelligent Layer",
    text: "We use the right tools: n8n, AI agents, chat assistants, voice agents, dashboards, CRMs, APIs, or custom tools.",
    icon: CircuitBoard
  },
  {
    title: "Launch and Improve",
    text: "We test against real cases, then improve the system based on actual use.",
    icon: Zap
  }
];

const solutionsEn = [
  {
    title: "Workflow Automation",
    text: "We connect repeated steps across teams and tools: alerts, approvals, tasks, messages, CRM updates, and automated reports.",
    icon: Workflow,
    examples: ["Integration tools like n8n, Make, and Zapier", "Google Sheets, Airtable, and Notion", "WhatsApp or email notifications", "Internal approvals", "Turning requests into tasks"]
  },
  {
    title: "AI Agents",
    text: "Agents that understand instructions, execute steps, summarize, search, classify requests, and suggest the next action.",
    icon: BrainCircuit,
    examples: ["Sales agent", "Customer support agent", "Operations agent", "Internal employee agent", "Reporting analysis agent"]
  },
  {
    title: "Chat Assistants",
    text: "Assistants for your website, WhatsApp, or internal systems that answer questions, collect data, qualify leads, and route cases.",
    icon: Bot,
    examples: ["Assistant for repeated replies", "Booking assistant", "Lead qualification assistant", "Internal policy assistant"]
  },
  {
    title: "Voice Agents",
    text: "Voice agents for handling calls, inquiries, bookings, follow-ups, or initial information collection.",
    icon: AudioLines,
    examples: ["Call reception", "Appointment confirmation", "Customer follow-up", "Data collection", "Routing cases to the right person"]
  },
  {
    title: "Dashboards and Reports",
    text: "Instead of manual reports, we build clear dashboards and automatic updates that show what is happening without chasing the team.",
    icon: LayoutDashboard,
    examples: ["Daily reports", "Performance indicators", "Sales tracking", "Operations tracking", "Management reports"]
  },
  {
    title: "Custom Internal Systems",
    text: "When off-the-shelf tools are not enough, we build a simple system tailored to how your business works.",
    icon: PanelsTopLeft,
    examples: ["Internal portals", "Partner or vendor tracking", "Document processing systems", "Internal knowledge systems", "Custom admin tools"]
  }
];

const messInputsEn = [
  "Long WhatsApp conversations",
  "Complex Excel files",
  "A report repeated every day",
  "Manual forms",
  "Slow approval process",
  "A team repeating the same answers",
  "Leads that are not followed up",
  "Calls that are not documented"
];

const outputsEn = [
  "Clear workflow",
  "Automation that runs automatically",
  "AI agent that supports the team",
  "Dashboard that clarifies the picture",
  "Scalable system"
];

const heroWorkflowNodesEn = [
  { label: "Customer Request", meta: "WhatsApp", icon: MessageSquareText, className: "right-8 top-10", tone: "text-teal border-teal/30 bg-teal/10" },
  { label: "Smart Routing", meta: "AI Agent", icon: BrainCircuit, className: "left-8 top-16", tone: "text-electric border-electric/30 bg-electric/10" },
  { label: "Auto Execution", meta: "Workflow", icon: Workflow, className: "right-10 bottom-16", tone: "text-gold border-gold/30 bg-gold/10" },
  { label: "Live Report", meta: "Dashboard", icon: LayoutDashboard, className: "left-10 bottom-10", tone: "text-violet border-violet/30 bg-violet/10" }
];

const useCasesEn = [
  ["Sales", "Lead qualification, follow-up, CRM updates, opportunity alerts, and post-contact messages.", MessageSquareText],
  ["Customer Support", "Repeated replies, complaint classification, case routing, conversation summaries, and satisfaction follow-up.", PhoneCall],
  ["Operations", "Daily reports, team follow-up, partner tracking, compliance checks, automatic escalation, and KPIs.", Settings2],
  ["HR and Administration", "Employee onboarding, document collection, internal questions, leave requests, and approvals.", FileText],
  ["Finance", "Invoice reminders, payment tracking, expense approvals, and simplified financial reports.", BarChart3],
  ["Marketing", "Customer reactivation, audience classification, campaign follow-up, content ideas, and engagement analysis.", Sparkles]
];

const examplesEn = [
  ["WhatsApp Sales Assistant", "Answers inquiries, collects customer data, qualifies the request, then sends it to the team in a structured way."],
  ["Automated Daily Operations Report", "Collects data from multiple sources and sends management a clear daily summary."],
  ["Internal Employee Agent", "Answers team questions from company files, policies, and procedures."],
  ["Customer Follow-up System", "Tracks leads, sends reminders, and reduces missed opportunities."],
  ["Management Performance Dashboard", "Shows key indicators in one place instead of searching across many files."],
  ["Partner or Vendor Tracking System", "Monitors performance, documents, compliance, and escalation alerts."]
];

const whyPointsEn = [
  ["We do not start with the tool", "We start by understanding the problem, then choose the right technology."],
  ["Flexible by design", "We use what serves the solution: n8n, APIs, AI, agents, chat assistants, voice agents, dashboards, or a custom system."],
  ["We understand the regional reality", "Many teams in the region rely on WhatsApp, Excel, manual follow-up, and fast decisions."],
  ["Practical, not performative", "The goal is not to look smart. The goal is to save time, reduce errors, and improve clarity."],
  ["Built to scale", "We build systems that can grow with the business instead of temporary fixes that break after a month."]
];

const assetAltsEn: Record<string, string> = {
  "assets/hero-command-center.png": "Futuristic interface representing automation and AI systems for business operations",
  "assets/chaos-to-system.png": "Turning manual operational chaos into a smart and organized work system",
  "assets/solutions-overview.png": "Overview of automation, AI agents, and dashboard solutions",
  "assets/use-cases-map.png": "Map of automation and AI use cases across business departments",
  "assets/system-mockup.png": "Dashboard mockup for a custom intelligent business system",
  "assets/audit-cta.png": "Initial review for discovering automation opportunities inside the business",
  "assets/contact-booking.png": "Contact and consultation booking form for Archepattern"
};

const ui = {
  ar: {
    switchLabel: "English",
    navCta: "اطلب مراجعة",
    badge: "من الفوضى إلى النظام",
    heroTitle: "حوّل فوضى التشغيل إلى أنظمة ذكية تعمل عنك",
    heroText: "نبني للشركات في السعودية والمنطقة حلول أتمتة وذكاء اصطناعي مصممة على واقعها الحقيقي: من المتابعة والردود والتقارير إلى الوكلاء الذكيين، وربط الأنظمة، وبناء أدوات داخلية مخصصة.",
    heroNote: "لا نبيعك تقنية جاهزة. نفهم مشكلتك، ثم نبني النظام المناسب لها.",
    primaryCta: "اطلب مراجعة مجانية",
    secondaryCta: "استكشف الحلول",
    heroCenter: "نظام موحّد",
    problemEyebrow: "ما الذي نحلّه؟",
    problemTitle: "المشكلة ليست في فريقك. المشكلة غالبًا في النظام حولهم.",
    problemText: "كثير من الشركات لا تخسر الوقت بسبب ضعف الموظفين، بل بسبب طريقة عمل مرهقة: رسائل واتساب متفرقة، ملفات إكسل لا تنتهي، متابعة يدوية، تقارير تتأخر، عملاء لا يتم الرد عليهم، ومهام تتكرر يوميًا بدون سبب واضح.",
    chaosTitle: "نحن لا نضيف طبقة تقنية فوق الفوضى.",
    chaosText: "نحن نعيد تصميم طريقة العمل نفسها، ثم نبني عليها أدوات تتحمل ضغط الواقع اليومي.",
    methodEyebrow: "طريقة العمل",
    methodTitle: "منهجية Archepattern: نكتشف النمط، ثم نبني النظام",
    methodText: "كل عمل لديه أنماط تتكرر: نفس الأسئلة، نفس التأخيرات، نفس التقارير اليدوية، نفس المتابعات، نفس نقاط الاختناق. نحدد هذه الأنماط ونحوّلها إلى أنظمة.",
    methodCenter: "Archepattern",
    solutionsEyebrow: "الحلول",
    solutionsTitle: "نبني ما يحتاجه عملك فعلًا",
    solutionsText: "أحيانًا يكون الحل مساعد محادثة. أحيانًا أتمتة. أحيانًا لوحة متابعة. وأحيانًا نظام داخلي كامل. نحن لا نبدأ بالأداة، بل نبدأ بالمشكلة.",
    messEyebrow: "ارسل لنا الفوضى كما هي",
    messTitle: "لا تحتاج أن تعرف اسم الأداة أو نوع التقنية المطلوبة.",
    messText: "فقط أرنا كيف تعمل اليوم. من واتساب وإكسل وفوضى المتابعة إلى تشغيل ذكي ومترابط.",
    outputsLabel: "نحوّلها إلى:",
    messQuestion: "عندك عملية مزعجة؟ خلّنا نفككها.",
    useCasesEyebrow: "نقاط البداية",
    useCasesTitle: "أين يمكن أن نبدأ؟",
    useCasesText: "تقريبًا أي عملية متكررة أو قابلة للتتبع يمكن تحسينها. هذه أمثلة فقط، وليست حدود خدماتنا.",
    examplesEyebrow: "أمثلة",
    examplesTitle: "أمثلة على أنظمة يمكن بناؤها",
    whyEyebrow: "لماذا نحن؟",
    whyTitle: "لماذا Archepattern؟",
    diagnosticEyebrow: "مراجعة أولية مجانية",
    diagnosticTitle: "لنبدأ من عملية واحدة مزعجة",
    diagnosticText: "في مراجعة أولية مجانية، نفهم طريقة عملك الحالية ونحدد أين يمكن للأتمتة أو الذكاء الاصطناعي أن يصنع فرقًا حقيقيًا.",
    diagnosticItems: ["فهم العملية الحالية", "تحديد نقاط الهدر والتكرار", "اقتراح حلول عملية", "تحديد ما يمكن تنفيذه بسرعة", "تصور أولي للتكلفة والجدوى"],
    diagnosticNote: "لا تحتاج لتحضير عرض أو مستندات. فقط اشرح لنا كيف تعمل الأمور اليوم.",
    contactEyebrow: "تواصل",
    contactTitle: "خلّنا نفهم التحدي",
    formLabels: ["الاسم", "رقم الجوال أو واتساب أو البريد الإلكتروني"],
    problemLabel: "ما التحدي أو العملية التي تريد تحسينها؟",
    submitLabel: "إرسال الطلب",
    sentMessage: "وصلنا طلبك. سنراجع التفاصيل ونتواصل معك قريبًا.",
    footerText: "نحوّل العمليات المتكررة إلى أنظمة ذكية قابلة للتوسع.",
    footerLinks: ["البداية", "الحلول", "طريقة العمل", "أمثلة", "اطلب مراجعة", "لينكدإن", "منصة إكس", "البريد"]
  },
  en: {
    switchLabel: "العربية",
    navCta: "Request Review",
    badge: "From chaos to system",
    heroTitle: "Turn operational chaos into intelligent systems that work for you",
    heroText: "We build automation and AI solutions for companies in Saudi Arabia and the region, designed around how work actually happens: follow-ups, replies, reports, AI agents, system integrations, and custom internal tools.",
    heroNote: "We do not sell a ready-made tool. We understand the problem, then build the right system for it.",
    primaryCta: "Request a Free Review",
    secondaryCta: "Explore Solutions",
    heroCenter: "Unified System",
    problemEyebrow: "What We Solve",
    problemTitle: "The problem is rarely your team. It is usually the system around them.",
    problemText: "Many companies lose time because work happens through scattered WhatsApp messages, endless spreadsheets, manual follow-up, delayed reports, unanswered customers, and repeated tasks with no clear system.",
    chaosTitle: "We do not add technology on top of chaos.",
    chaosText: "We redesign the way the work happens, then build tools that can handle the pressure of daily operations.",
    methodEyebrow: "Method",
    methodTitle: "The Archepattern Method: find the pattern, then build the system",
    methodText: "Every business has repeated patterns: the same questions, delays, reports, follow-ups, and bottlenecks. We identify those patterns and turn them into systems.",
    methodCenter: "Archepattern",
    solutionsEyebrow: "Solutions",
    solutionsTitle: "We build what your business actually needs",
    solutionsText: "Sometimes the solution is a chat assistant. Sometimes automation. Sometimes a dashboard. Sometimes a full internal system. We start with the problem, not the tool.",
    messEyebrow: "Send us the mess as it is",
    messTitle: "You do not need to know the tool or the technology required.",
    messText: "Just show us how the work happens today. From WhatsApp, Excel, and follow-up chaos to connected intelligent operations.",
    outputsLabel: "We turn it into:",
    messQuestion: "Have an annoying process? Let’s break it down.",
    useCasesEyebrow: "Starting Points",
    useCasesTitle: "Where can we start?",
    useCasesText: "Almost any repeated or trackable process can be improved. These are examples, not the limits of what we can build.",
    examplesEyebrow: "Examples",
    examplesTitle: "Examples of systems we can build",
    whyEyebrow: "Why Us?",
    whyTitle: "Why Archepattern?",
    diagnosticEyebrow: "Free Initial Review",
    diagnosticTitle: "Let’s start with one annoying process",
    diagnosticText: "In a free initial review, we understand your current workflow and identify where automation or AI can create a practical difference.",
    diagnosticItems: ["Understand the current process", "Identify waste and repetition", "Suggest practical solutions", "Define what can be implemented quickly", "Create an initial view of cost and feasibility"],
    diagnosticNote: "You do not need to prepare a deck or documents. Just explain how things work today.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s understand the challenge",
    formLabels: ["Name", "Mobile, WhatsApp, or email"],
    problemLabel: "What challenge or process do you want to improve?",
    submitLabel: "Send Request",
    sentMessage: "We received your request. We will review the details and contact you soon.",
    footerText: "We turn repeated operations into intelligent, scalable systems.",
    footerLinks: ["Home", "Solutions", "Method", "Examples", "Request Review", "LinkedIn", "X", "Email"]
  }
};

function SectionReveal({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  lang = "ar"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  lang?: Lang;
}) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "group inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink shadow-teal transition hover:-translate-y-0.5 hover:bg-white"
          : "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10"
      }
    >
      {children}
      <ArrowUpLeft className={`h-4 w-4 transition ${lang === "ar" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"} group-hover:translate-y-0.5`} />
    </a>
  );
}

function AssetVisual({ src, className = "", priority = false, lang = "ar" }: { src: string; className?: string; priority?: boolean; lang?: Lang }) {
  const [failed, setFailed] = useState(false);
  const alts = lang === "ar" ? assetAlts : assetAltsEn;

  return (
    <div className={`asset-frame rounded-[28px] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alts[src] ?? (lang === "ar" ? "تصميم بصري مجرد لأنظمة الأعمال الذكية" : "Abstract visual for intelligent business systems")}
          loading={priority ? "eager" : "lazy"}
          className="asset-image"
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink/38 via-transparent to-transparent" />
    </div>
  );
}

function FloatingWorkflowHero({ nodes, centerLabel }: { nodes: typeof heroWorkflowNodes; centerLabel: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4 shadow-glow">
      <div className="absolute inset-4 overflow-hidden rounded-[26px] border border-white/10 bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(55,245,208,0.16),transparent_18rem),radial-gradient(circle_at_22%_16%,rgba(77,184,255,0.14),transparent_13rem),linear-gradient(135deg,rgba(12,24,43,0.98),rgba(5,7,13,0.96))]" />
        <div className="absolute inset-0 geometric-grid opacity-[0.18]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/10" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/10" />
      </div>

      <svg className="pointer-events-none absolute inset-0 z-40 h-full w-full" viewBox="0 0 640 520" preserveAspectRatio="none" aria-hidden="true">
        <path d="M480 96 C424 132 372 190 320 260" stroke="rgba(55,245,208,0.34)" strokeWidth="1.5" fill="none" />
        <path d="M164 118 C218 150 270 198 320 260" stroke="rgba(77,184,255,0.32)" strokeWidth="1.5" fill="none" />
        <path d="M482 406 C426 376 372 324 320 260" stroke="rgba(214,181,109,0.30)" strokeWidth="1.5" fill="none" />
        <path d="M160 426 C218 382 270 326 320 260" stroke="rgba(167,139,250,0.28)" strokeWidth="1.5" fill="none" />
        {[0, 1, 2, 3].map((index) => {
          const paths = [
            { cx: [480, 424, 372, 320], cy: [96, 132, 190, 260], color: "#37f5d0" },
            { cx: [164, 218, 270, 320], cy: [118, 150, 198, 260], color: "#4db8ff" },
            { cx: [482, 426, 372, 320], cy: [406, 376, 324, 260], color: "#d6b56d" },
            { cx: [160, 218, 270, 320], cy: [426, 382, 326, 260], color: "#a78bfa" }
          ];

          return reduceMotion ? null : (
            <motion.circle
              key={index}
              r="4"
              fill={paths[index].color}
              animate={{ cx: paths[index].cx, cy: paths[index].cy, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 5.6, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-50 h-28 w-28 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center rounded-full border border-teal/35 bg-ink/82 text-center shadow-teal backdrop-blur"
          animate={reduceMotion ? undefined : { scale: [1, 1.035, 1], boxShadow: ["0 0 24px rgba(55,245,208,0.10)", "0 0 44px rgba(55,245,208,0.24)", "0 0 24px rgba(55,245,208,0.10)"] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Network className="h-7 w-7 text-teal" />
          <span className="mt-2 text-xs font-extrabold text-white">{centerLabel}</span>
        </motion.div>
      </div>

      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`absolute z-50 min-w-36 rounded-2xl border bg-ink/76 p-3 shadow-glow backdrop-blur ${node.className} ${node.tone}`}
            animate={reduceMotion ? undefined : { y: [0, -5, 0], opacity: [0.86, 1, 0.86] }}
            transition={{ duration: 5.6, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-white">{node.label}</span>
                <span className="block text-xs font-bold text-white/46">{node.meta}</span>
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function ChaosToSystemPanel({
  items,
  title,
  text,
  lang
}: {
  items: string[];
  title: string;
  text: string;
  lang: Lang;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
      <div className="glass-panel flex flex-col justify-center rounded-[28px] p-6 md:p-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold text-white/82"
              initial={reduceMotion ? false : { opacity: 0.72 }}
              whileInView={reduceMotion ? undefined : { opacity: [0.72, 1, 0.88] }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1.6, delay: index * 0.08, repeat: Infinity, repeatDelay: 4.2, ease: "easeInOut" }}
            >
              <span className="mb-3 block h-2 w-2 rounded-full bg-gold" />
              {item}
            </motion.div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-teal/20 bg-teal/10 p-5">
          <p className="text-lg font-bold text-teal">{title}</p>
          <p className="mt-2 text-white/72">{text}</p>
        </div>
      </div>
      <AssetVisual src="assets/chaos-to-system.png" className="min-h-[360px] lg:h-full" lang={lang} />
    </div>
  );
}

function ArchepatternMethodOrbit({ steps, centerLabel }: { steps: typeof methodSteps; centerLabel: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
      <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 lg:h-full">
        <div className="absolute inset-6 rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(55,245,208,0.14),transparent_13rem),radial-gradient(circle_at_24%_22%,rgba(77,184,255,0.13),transparent_10rem),linear-gradient(145deg,rgba(12,24,43,0.82),rgba(5,7,13,0.84))]" />
        <div className="geometric-grid absolute inset-6 opacity-[0.14]" />
        <motion.div
          className="absolute inset-14 z-20 rounded-full border border-electric/25"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-24 z-20 rounded-full border border-teal/20"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-ink/75 text-center text-lg font-extrabold text-white shadow-glow">
          {centerLabel}
        </div>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              className={`absolute z-40 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-ink/80 text-teal backdrop-blur ${methodNodePositions[index]}`}
              animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], borderColor: ["rgba(255,255,255,0.12)", "rgba(55,245,208,0.42)", "rgba(255,255,255,0.12)"] }}
              transition={{ duration: 5.8, delay: index * 0.32, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="h-7 w-7" />
            </motion.div>
          );
        })}
      </div>
      <div className="grid content-center gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="glass-panel rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gold">0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold text-white">{step.title}</h3>
                  <p className="mt-2 leading-8 text-white/68">{step.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SolutionCardsGrid({ items, lang }: { items: typeof solutions; lang: Lang }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((solution) => {
        const Icon = solution.icon;
        return (
          <article key={solution.title} className="glass-panel group rounded-[24px] p-6 transition hover:-translate-y-1 hover:border-teal/35">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <Icon className="h-6 w-6" />
              </div>
              <ChevronLeft className={`h-5 w-5 text-white/30 transition group-hover:text-teal ${lang === "ar" ? "group-hover:-translate-x-1" : "rotate-180 group-hover:translate-x-1"}`} />
            </div>
            <h3 className="mt-6 text-2xl font-extrabold text-white">{solution.title}</h3>
            <p className="mt-3 min-h-[96px] leading-8 text-white/68">{solution.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {solution.examples.map((example) => (
                <span key={example} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold text-white/62">
                  {example}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function BringUsTheMessPanel({
  inputs,
  outputs,
  label,
  question,
  cta,
  lang
}: {
  inputs: string[];
  outputs: string[];
  label: string;
  question: string;
  cta: string;
  lang: Lang;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="glass-panel overflow-hidden rounded-[32px]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="flex p-6 md:p-10">
          <div className="grid w-full grid-cols-2 gap-3">
            {inputs.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-2xl border border-red-300/10 bg-red-300/[0.045] p-4 text-sm font-bold text-white/75"
                animate={reduceMotion ? undefined : { borderColor: ["rgba(252,165,165,0.10)", "rgba(214,181,109,0.28)", "rgba(252,165,165,0.10)"] }}
                transition={{ duration: 1.4, delay: index * 0.12, repeat: Infinity, repeatDelay: 5.4, ease: "easeInOut" }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className={`relative flex border-t border-white/10 bg-teal/[0.055] p-6 md:p-10 lg:border-t-0 ${lang === "ar" ? "lg:border-r" : "lg:border-l"}`}>
          <div className="arabesque absolute inset-0 opacity-40" />
          <div className="relative flex w-full flex-col justify-center">
            <p className="text-sm font-bold text-gold">{label}</p>
            <div className="mt-5 space-y-3">
              {outputs.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-teal/20 bg-ink/45 p-4">
                  <CheckCircle2 className="h-5 w-5 text-teal" />
                  <span className="font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-2xl font-extrabold text-white">{question}</p>
            <div className="mt-5">
              <ButtonLink href="#diagnostic" lang={lang}>{cta}</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UseCaseMap({ items, lang }: { items: typeof useCases; lang: Lang }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
      <AssetVisual src="assets/use-cases-map.png" className="min-h-[420px] lg:h-full" lang={lang} />
      <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-fr">
        {items.map(([title, text, Icon]) => (
          <div key={title as string} className="glass-panel flex flex-col justify-center rounded-2xl p-5">
            <Icon className="h-6 w-6 text-gold" />
            <h3 className="mt-4 text-xl font-extrabold text-white">{title as string}</h3>
            <p className="mt-2 leading-7 text-white/65">{text as string}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExampleSystemsShowcase({ items, lang }: { items: typeof examples; lang: Lang }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
      <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-fr">
        {items.map(([title, text], index) => (
          <article key={title} className="glass-panel flex flex-col justify-center rounded-2xl p-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
              <span className="text-sm font-extrabold">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-white/65">{text}</p>
          </article>
        ))}
      </div>
      <AssetVisual src="assets/system-mockup.png" className="min-h-[420px] lg:h-full" lang={lang} />
    </div>
  );
}

function DiagnosticCTA({ copy, lang }: { copy: typeof ui.ar; lang: Lang }) {
  const items = copy.diagnosticItems;
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-teal/20 bg-gradient-to-br from-teal/12 via-electric/8 to-violet/12 p-6 shadow-teal md:p-10">
      <div className="arabesque absolute inset-0 opacity-35" />
      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold text-gold">{copy.diagnosticEyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">{copy.diagnosticTitle}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-white/74">
            {copy.diagnosticText}
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/34 p-4">
                <CheckCircle2 className="h-5 w-5 text-teal" />
                <span className="font-semibold text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="#contact" lang={lang}>{copy.primaryCta}</ButtonLink>
            <span className="text-sm font-semibold text-white/54">{copy.diagnosticNote}</span>
          </div>
        </div>
        <AssetVisual src="assets/audit-cta.png" className="min-h-[380px] lg:h-full" lang={lang} />
      </div>
    </div>
  );
}

function ContactForm({ copy, lang }: { copy: typeof ui.ar; lang: Lang }) {
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

  const inputClass = `w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 ${lang === "ar" ? "text-right" : "text-left"} text-white outline-none transition placeholder:text-white/32 focus:border-teal/50 focus:bg-white/[0.07]`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <AssetVisual src="assets/contact-booking.png" className="min-h-[460px] lg:h-full" lang={lang} />
      <form onSubmit={onSubmit} className="glass-panel rounded-[28px] p-5 md:p-7">
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid gap-4 sm:grid-cols-2">
          {copy.formLabels.map((label, index) => (
            <label key={label} className="block">
              <span className="mb-2 block text-sm font-bold text-white/68">{label}</span>
              <input
                name={index === 0 ? "name" : "contact"}
                type={index === 0 ? "text" : "text"}
                className={inputClass}
                required
              />
            </label>
          ))}
        </div>
        <label className="mt-4 block">
          <span className="mb-2 block text-sm font-bold text-white/68">{copy.problemLabel}</span>
          <textarea name="message" className={`${inputClass} min-h-44 resize-y`} required />
        </label>
        <button
          disabled={submitting}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-sm font-extrabold text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {submitting ? (lang === "ar" ? "جاري الإرسال..." : "Sending...") : copy.submitLabel}
          <Send className="h-4 w-4" />
        </button>
        {sent ? (
          <p className="mt-5 rounded-2xl border border-teal/25 bg-teal/10 p-4 font-bold text-teal">
            {copy.sentMessage}
          </p>
        ) : null}
        {error ? (
          <p className="mt-5 rounded-2xl border border-red-300/25 bg-red-300/10 p-4 font-bold text-red-200">
            {lang === "ar" ? "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى." : "We could not send the request. Please try again."}
          </p>
        ) : null}
      </form>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mb-8 max-w-4xl">
      {eyebrow ? <p className="text-sm font-bold text-gold">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-9 text-white/68">{text}</p> : null}
    </div>
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

  const copy = ui[lang];
  const isArabic = lang === "ar";
  const nav = isArabic ? navItems : navItemsEn;
  const badges = isArabic ? trustBadges : trustBadgesEn;
  const heroNodes = isArabic ? heroWorkflowNodes : heroWorkflowNodesEn;
  const chaos = isArabic ? chaosItems : chaosItemsEn;
  const steps = isArabic ? methodSteps : methodStepsEn;
  const solutionItems = isArabic ? solutions : solutionsEn;
  const mess = isArabic ? messInputs : messInputsEn;
  const outputItems = isArabic ? outputs : outputsEn;
  const useCaseItems = isArabic ? useCases : useCasesEn;
  const exampleItems = isArabic ? examples : examplesEn;
  const whyItems = isArabic ? whyPoints : whyPointsEn;

  return (
    <main className={`page-shell relative min-h-screen overflow-hidden ${isArabic ? "font-arabic text-right" : "font-latin text-left"}`} dir={isArabic ? "rtl" : "ltr"} lang={lang}>
      <div className="noise" />
      <div className="geometric-grid pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-45" />

      <header className="sticky top-0 z-[80] border-b border-white/10 bg-ink/72 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="#hero" className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-teal/25 bg-white/[0.035] p-1 shadow-teal">
              <img src="assets/archepattern-logo-mark.png" alt="" className="h-full w-full object-contain" />
            </span>
            <span className="text-lg font-extrabold text-white">Archepattern</span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-full px-4 py-2 text-sm font-bold text-white/58 transition hover:bg-white/8 hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={switchLanguage}
              className="rounded-full border border-white/15 bg-white/[0.045] px-4 py-3 text-sm font-bold text-white/70 transition hover:border-teal/40 hover:text-white"
            >
              {copy.switchLabel}
            </button>
            <ButtonLink href="#diagnostic" lang={lang}>{copy.navCta}</ButtonLink>
          </div>
        </nav>
      </header>

      <section
        id="hero"
        className={`relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 md:px-6 md:pt-24 lg:items-center ${
          isArabic ? "lg:grid-cols-[0.9fr_1.1fr] xl:gap-16" : "lg:grid-cols-[1.08fr_0.92fr] xl:gap-14"
        }`}
      >
        <div className={`relative z-10 ${isArabic ? "" : "max-w-[640px]"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-bold text-gold">
            <Sparkles className="h-4 w-4" />
            {copy.badge}
          </div>
          <h1
            className={`mt-7 font-extrabold text-white ${
              isArabic
                ? "max-w-4xl text-[2.85rem] leading-[1.32] sm:text-5xl md:text-6xl md:leading-[1.28] xl:text-[4.35rem] xl:leading-[1.24]"
                : "max-w-[680px] text-[2.8rem] leading-[1.08] sm:text-5xl md:text-[3.6rem] md:leading-[1.07] xl:text-[4.05rem] xl:leading-[1.06]"
            }`}
          >
            {copy.heroTitle}
          </h1>
          <p className={`mt-7 max-w-3xl text-lg text-white/74 ${isArabic ? "leading-10 md:text-xl md:leading-[2.15]" : "leading-8 md:text-xl md:leading-9"}`}>
            {copy.heroText}
          </p>
          <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-base font-bold text-white/82">
            {copy.heroNote}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#diagnostic" lang={lang}>{copy.primaryCta}</ButtonLink>
            <ButtonLink href="#solutions" variant="secondary" lang={lang}>{copy.secondaryCta}</ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-bold text-white/62">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <FloatingWorkflowHero nodes={heroNodes} centerLabel={copy.heroCenter} />
      </section>

      <SectionReveal id="problem" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader
          eyebrow={copy.problemEyebrow}
          title={copy.problemTitle}
          text={copy.problemText}
        />
        <ChaosToSystemPanel items={chaos} title={copy.chaosTitle} text={copy.chaosText} lang={lang} />
      </SectionReveal>

      <SectionReveal id="method" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader
          eyebrow={copy.methodEyebrow}
          title={copy.methodTitle}
          text={copy.methodText}
        />
        <ArchepatternMethodOrbit steps={steps} centerLabel={copy.methodCenter} />
      </SectionReveal>

      <SectionReveal id="solutions" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.68fr] lg:items-stretch">
          <SectionHeader
            eyebrow={copy.solutionsEyebrow}
            title={copy.solutionsTitle}
            text={copy.solutionsText}
          />
          <AssetVisual src="assets/solutions-overview.png" className="hidden min-h-[250px] lg:block lg:h-full" lang={lang} />
        </div>
        <SolutionCardsGrid items={solutionItems} lang={lang} />
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader
          eyebrow={copy.messEyebrow}
          title={copy.messTitle}
          text={copy.messText}
        />
        <BringUsTheMessPanel inputs={mess} outputs={outputItems} label={copy.outputsLabel} question={copy.messQuestion} cta={copy.primaryCta} lang={lang} />
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader
          eyebrow={copy.useCasesEyebrow}
          title={copy.useCasesTitle}
          text={copy.useCasesText}
        />
        <UseCaseMap items={useCaseItems} lang={lang} />
      </SectionReveal>

      <SectionReveal id="examples" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader eyebrow={copy.examplesEyebrow} title={copy.examplesTitle} />
        <ExampleSystemsShowcase items={exampleItems} lang={lang} />
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader eyebrow={copy.whyEyebrow} title={copy.whyTitle} />
        <div className="grid gap-4 md:grid-cols-5">
          {whyItems.map(([title, text]) => (
            <div key={title} className="glass-panel rounded-2xl p-5 md:col-span-1">
              <Link2 className="h-5 w-5 text-teal" />
              <h3 className="mt-4 text-lg font-extrabold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-white/62">{text}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="diagnostic" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <DiagnosticCTA copy={copy} lang={lang} />
      </SectionReveal>

      <SectionReveal id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader eyebrow={copy.contactEyebrow} title={copy.contactTitle} />
        <ContactForm copy={copy} lang={lang} />
      </SectionReveal>

      <footer className="border-t border-white/10 px-4 py-10 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal/20 bg-white/[0.035] p-1">
                <img src="assets/archepattern-logo-mark.png" alt="" className="h-full w-full object-contain" />
              </span>
              <p className="text-xl font-extrabold text-white">Archepattern</p>
            </div>
            <p className="mt-2 text-white/55">{copy.footerText}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-white/52">
            {copy.footerLinks.map((item, index) => (
              <a key={item} href={index === copy.footerLinks.length - 1 ? "mailto:hello@archepattern.com" : "#hero"} className="transition hover:text-teal">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
