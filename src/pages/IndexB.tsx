import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Shield, Check, Users, Zap, BookOpen, HeadphonesIcon, Sparkles, User } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Navbar from "@/components/landing/Navbar";
import logo from "@/assets/decodefy-logo.png";
import { useLandingPage } from "@/hooks/useLandingPage";
import { urlFor } from "@/lib/sanity";
import { defaultLandingPage } from "@/lib/defaults";
import type {
  HeroSection as HeroData,
  VideoSection as VideoData,
  TestimonialItem,
  CaseStudy,
  TextSection as TextSectionData,
  TrainingSection as TrainingSectionData,
  UsageSection as UsageSectionData,
  ClientCard,
  AudienceSection as AudienceData,
  WhatChangesSection as WhatChangesData,
  WhatYouGetSection as WhatYouGetData,
  TeamMember,
  PricingSection as PricingData,
  FooterSection as FooterData,
  LandingPageData,
} from "@/types/sanity";
import type { ElementType } from "react";

/* ─── Icon lookup map ─── */
const iconMap: Record<string, ElementType> = {
  Users,
  Zap,
  BookOpen,
  Sparkles,
  HeadphonesIcon,
};

/* ─── Image helper: use Sanity image if available, fall back to local ─── */
function resolveImage(
  sanityImage: { asset?: { _ref: string } } | undefined,
  localFallback: string | undefined
): string | undefined {
  if (sanityImage?.asset?._ref) {
    return urlFor(sanityImage).url();
  }
  return localFallback;
}

/* ─── Portable Text components matching existing Tailwind styles ─── */
const textSectionComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-muted-foreground">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <span className="text-foreground font-medium">{children}</span>
    ),
    em: ({ children }) => <em>{children}</em>,
  },
};

const guaranteeSectionComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-muted-foreground">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <span className="text-foreground font-medium text-xl">{children}</span>
    ),
    em: ({ children }) => <em>{children}</em>,
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ───────────────────────── HERO ───────────────────────── */
const HeroB = ({ data }: { data: HeroData }) => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
    <div className="absolute inset-0 hero-glow" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {data.headline}{" "}
        <span className="text-primary">{data.headlineAccent}</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        {data.paragraphs.map((p, i) => {
          const isLast = i === data.paragraphs.length - 1;
          if (p.style === "bold" || isLast) {
            return (
              <p key={i} className="text-xl md:text-2xl font-semibold text-foreground pt-4">
                {p.text}
              </p>
            );
          }
          return (
            <p
              key={i}
              className={`text-lg md:text-xl text-muted-foreground${p.style === "italic" ? " italic" : ""}`}
            >
              {p.text}
            </p>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10"
      >
        <Button
          size="lg"
          className="text-base md:text-lg px-8 h-14 gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
          onClick={() => document.getElementById("video-section-b")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Play className="w-5 h-5" />
          {data.ctaText}
        </Button>
      </motion.div>
    </div>
  </section>
);

/* ───────────────────────── VIDEO ───────────────────────── */
const VideoB = ({ data }: { data: VideoData }) => (
  <section id="video-section-b" className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline text-center">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="aspect-video rounded-xl border border-border overflow-hidden mb-10">
          <video
            src={data.videoUrl}
            controls
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 text-muted-foreground text-lg">
          {data.descriptions.map((d, i) => (
            <p key={i} className={!d.label ? "text-foreground font-medium" : undefined}>
              {d.label && (
                <span className="text-foreground font-medium">{d.label} </span>
              )}
              {d.text}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── VIDEO TESTIMONIALS ───────────── */
const TestimonialsB = ({
  headline,
  headlineAccent,
  subtitle,
  items,
}: {
  headline: string;
  headlineAccent: string;
  subtitle: string;
  items: TestimonialItem[];
}) => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn} className="text-center mb-16">
        <h2 className="section-headline">
          {headline} <span className="text-primary">{headlineAccent}</span>
        </h2>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </motion.div>

      <div className="space-y-20">
        {items.map((t, i) => {
          const isReversed = i % 2 !== 0;
          const posterSrc = resolveImage(t.image, t._localImage);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-video rounded-2xl border border-border overflow-hidden">
                  <video
                    src={t.videoUrl}
                    poster={posterSrc}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Real <span className="text-primary">Results.</span>
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.industry}</p>
                <blockquote className="text-xl md:text-2xl font-semibold text-foreground leading-snug border-l-4 border-accent pl-5 py-2">
                  {t.quote}
                </blockquote>
                <p className="text-muted-foreground text-sm">{t.name}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ───────────── CASE STUDY ───────────── */
const CaseStudySection = ({ data, bgClass }: { data: CaseStudy; bgClass?: string }) => {
  const imageSrc = resolveImage(data.image, data._localImage);
  return (
    <section className={`section-padding ${bgClass || ""}`}>
      <div className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            {data.headline}{" "}
            <span className="text-primary">{data.headlineAccent}</span>
          </h2>
          <div className={`flex flex-col ${data.reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-start`}>
            <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden">
              {imageSrc && (
                <img src={imageSrc} alt={data.imageAlt} className="w-full h-full object-cover rounded-2xl" />
              )}
            </div>
            <div className="w-full md:w-3/5 space-y-4 text-lg text-muted-foreground">
              <PortableText value={data.content} components={textSectionComponents} />
              {data.stats && data.stats.length > 0 && (
                <>
                  <div className="grid grid-cols-2 gap-4 my-4">
                    {data.stats.map((s) => (
                      <div key={s.label} className="p-4 rounded-xl bg-background border border-primary/30 text-center">
                        <p className="text-primary text-3xl font-bold">{s.value}</p>
                        <p className="text-sm text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────── TEXT SECTION (Problem, Compass, Built Better) ───────────── */
const TextSectionBlock = ({ data, bgClass }: { data: TextSectionData; bgClass?: string }) => (
  <section className={`section-padding ${bgClass || ""}`}>
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <PortableText value={data.content} components={textSectionComponents} />
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── TRAINING ───────────── */
const TrainingSectionBlock = ({ data }: { data: TrainingSectionData }) => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {data.headline}{" "}
          <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <PortableText value={data.content} components={textSectionComponents} />
          <div className="p-6 rounded-2xl border border-primary/30 bg-background my-6">
            <p className="text-foreground font-bold text-xl mb-2">{data.guaranteeBoxTitle}</p>
            {data.guaranteeBoxContent.split("\n\n").map((line, i) => (
              <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── TELL IT WHAT YOU NEED ───────────── */
const UsageSectionBlock = ({ data }: { data: UsageSectionData }) => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="space-y-3 text-lg text-muted-foreground mb-6">
          {data.examples.map((ex, i) => (
            <p key={i} className="italic">{ex}</p>
          ))}
        </div>
        <p className="text-lg text-muted-foreground">{data.afterText}</p>
        <div className="mt-4 space-y-2 text-lg text-muted-foreground">
          <p>{data.adjustExamples}</p>
          <p className="text-foreground font-medium">{data.closingLine}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHAT CLIENTS CREATE ───────────── */
const ClientsCreateSection = ({
  headline,
  headlineAccent,
  subtitle,
  cards,
}: {
  headline: string;
  headlineAccent: string;
  subtitle: string;
  cards: ClientCard[];
}) => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {headline} <span className="text-primary">{headlineAccent}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => {
            const imgSrc = resolveImage(c.image, c._localImage);
            return (
              <div key={c.name} className="p-6 rounded-2xl bg-background border border-border flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  {imgSrc && <img src={imgSrc} alt={c.name} className="w-full h-full object-cover" />}
                </div>
                <p className="text-foreground font-bold text-lg mb-2">{c.name}</p>
                <p className="text-muted-foreground">{c.result}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHO THIS IS FOR ───────────── */
const AudienceB = ({ data }: { data: AudienceData }) => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          {data.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-muted-foreground">{data.afterText}</p>
        <p className="text-foreground font-medium text-lg">{data.closingLine}</p>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHAT CHANGES ───────────── */
const WhatChanges = ({ data }: { data: WhatChangesData }) => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <ul className="space-y-3 text-lg text-muted-foreground">
          {data.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-accent mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHAT YOU GET ───────────── */
const WhatYouGet = ({ data }: { data: WhatYouGetData }) => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.features.map((item) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <Icon className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-bold text-lg mb-1">{item.title}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-border bg-background text-center">
          <p className="text-foreground font-bold text-lg mb-1">{data.everythingNewTitle}</p>
          <p className="text-muted-foreground">{data.everythingNewText}</p>
        </div>
        <div className="mt-6 p-5 rounded-xl border border-muted bg-muted/20">
          <p className="text-sm text-muted-foreground font-medium mb-1">{data.optionalLabel}</p>
          <p className="text-muted-foreground text-sm"
            dangerouslySetInnerHTML={{
              __html: data.optionalContent
                .replace(/SiteFlowe:/g, '<span class="text-foreground font-medium">SiteFlowe:</span>')
                .replace(/LeadFlowe:/g, '<span class="text-foreground font-medium">LeadFlowe:</span>'),
            }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── TEAM ───────────── */
const TeamB = ({
  headline,
  headlineAccent,
  members,
}: {
  headline: string;
  headlineAccent: string;
  members: TeamMember[];
}) => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline text-center">
          {headline} <span className="text-primary">{headlineAccent}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {members.map((m, i) => {
            const imgSrc = m.image?.asset?._ref ? urlFor(m.image).url() : null;
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                {imgSrc ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={imgSrc} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-border bg-muted/30 flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-muted-foreground" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-1">{m.name}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── PRICING ───────────── */
const PricingB = ({ data }: { data: PricingData }) => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn} className="text-center">
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="max-w-md mx-auto p-8 rounded-2xl border border-primary/30 bg-card mb-8">
          <p className="text-5xl font-bold text-foreground mb-1">{data.setupPrice}</p>
          <p className="text-muted-foreground mb-4">{data.setupLabel}</p>
          <p className="text-3xl font-bold text-foreground mb-1">
            {data.monthlyPrice}<span className="text-lg font-normal text-muted-foreground">/month</span>
          </p>
          <p className="text-muted-foreground mb-6">{data.monthlyLabel}</p>
          <p className="text-sm text-accent font-medium mb-6">{data.urgencyText}</p>
          <Button asChild size="lg" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <a href={data.ctaUrl} target="_blank" rel="noreferrer">
              {data.ctaText}
            </a>
          </Button>
        </div>
        <div className="text-muted-foreground text-lg space-y-2 max-w-xl mx-auto">
          <p><span className="text-foreground font-medium">What this replaces:</span></p>
          {data.comparisonLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p className="text-sm mt-4">{data.capacityNote}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── GUARANTEE ───────────── */
const GuaranteeB = ({ data }: { data: TextSectionData }) => (
  <section className="section-padding bg-card/50">
    <div className="section-container text-center">
      <motion.div {...fadeIn}>
        <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="section-headline">
          {data.headline} <span className="text-primary">{data.headlineAccent}</span>
        </h2>
        <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto">
          <PortableText value={data.content} components={guaranteeSectionComponents} />
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── FAQ ───────────── */
const FAQB = ({
  headline,
  headlineAccent,
  items,
}: {
  headline: string;
  headlineAccent: string;
  items: { question: string; answer: string }[];
}) => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          {headline && <>{headline} </>}
          <span className="text-primary">{headlineAccent}</span>
        </h2>
        <div className="space-y-6">
          {items.map((f) => (
            <div key={f.question} className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-foreground font-bold text-lg mb-2">{f.question}</p>
              <p className="text-muted-foreground text-lg">{f.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── FOOTER / CTA ───────────── */
const FooterB = ({ data }: { data: FooterData }) => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="section-headline">
            {data.ctaHeadline} <span className="text-primary">{data.ctaHeadlineAccent}</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {data.options.map((opt) => (
            <motion.div
              key={opt.title}
              {...fadeIn}
              className={`p-8 rounded-2xl bg-background border ${opt.isPrimary ? "border-primary/30" : "border-border"} text-center`}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{opt.title}</h3>
              <p className="text-muted-foreground mb-6">{opt.description}</p>
              {opt.isPrimary ? (
                <Button asChild size="lg" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                  <a href={opt.ctaUrl} target="_blank" rel="noreferrer">{opt.ctaText}</a>
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full h-12 rounded-full border-accent text-accent hover:bg-accent/10"
                >
                  <a href={opt.ctaUrl} target="_blank" rel="noreferrer">{opt.ctaText}</a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container text-center">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            {data.closingHeadline}{" "}
            <span className="text-primary">{data.closingHeadlineAccent}</span>
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto mb-8">
            {data.closingParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-foreground font-medium text-xl">{data.closingBold}</p>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base px-8 h-14">
            <a href={data.closingCtaUrl} target="_blank" rel="noreferrer">
              {data.closingCtaText}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>

    <footer className="py-16 px-6 border-t border-border">
      <div className="section-container text-center">
        <img src={logo} alt="Decodefy" style={{ width: 120 }} className="mx-auto mb-8" />
        <div className="flex justify-center gap-4 mb-8">
          {data.options.map((opt) =>
            opt.isPrimary ? (
              <Button key={opt.title} asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                <a href={opt.ctaUrl} target="_blank" rel="noreferrer">{opt.ctaText.replace(/ - £\d+/, "").replace("Book Your Session - £497", "Book Your Session")}</a>
              </Button>
            ) : (
              <Button
                key={opt.title}
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-accent text-accent hover:bg-accent/10"
              >
                <a href={opt.ctaUrl} target="_blank" rel="noreferrer">{opt.ctaText}</a>
              </Button>
            )
          )}
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Decodefy. All rights reserved.</p>
          <a href={data.legalUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-foreground transition-colors underline">
            Legal
          </a>
        </div>
      </div>
    </footer>
  </>
);

/* ───────────── PAGE ───────────── */
const IndexB = () => {
  const { data } = useLandingPage();
  const page: LandingPageData = data ?? defaultLandingPage;

  return (
    <div className="min-h-screen teal-gradient-bg text-foreground">
      <Navbar />
      <HeroB data={page.hero} />
      <VideoB data={page.video} />
      <TestimonialsB
        headline={page.testimonialsHeadline}
        headlineAccent={page.testimonialsHeadlineAccent}
        subtitle={page.testimonialsSubtitle}
        items={page.testimonials}
      />
      <CaseStudySection data={page.mattStory} bgClass="bg-card/50" />
      <TextSectionBlock data={page.problem} />
      <TextSectionBlock data={page.compass} bgClass="bg-card/50" />
      <TrainingSectionBlock data={page.training} />
      <UsageSectionBlock data={page.usage} />
      <CaseStudySection data={page.catherineStory} />
      <ClientsCreateSection
        headline={page.clientsCreateHeadline}
        headlineAccent={page.clientsCreateHeadlineAccent}
        subtitle={page.clientsCreateSubtitle}
        cards={page.clientCards}
      />
      <CaseStudySection data={page.willStory} />
      <TextSectionBlock data={page.builtBetter} bgClass="bg-card/50" />
      <AudienceB data={page.audience} />
      <WhatChanges data={page.whatChanges} />
      <WhatYouGet data={page.whatYouGet} />
      <TeamB
        headline={page.teamHeadline}
        headlineAccent={page.teamHeadlineAccent}
        members={page.teamMembers}
      />
      <PricingB data={page.pricing} />
      <GuaranteeB data={page.guarantee} />
      <FAQB
        headline={page.faqHeadline}
        headlineAccent={page.faqHeadlineAccent}
        items={page.faqItems}
      />
      <FooterB data={page.footer} />
    </div>
  );
};

export default IndexB;
