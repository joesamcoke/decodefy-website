import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Shield, Check, Users, Zap, BookOpen, HeadphonesIcon, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import logo from "@/assets/decodefy-logo.png";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ───────────────────────── HERO ───────────────────────── */
const HeroB = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
    <div className="absolute inset-0 hero-glow" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Content Sounds Like AI.{" "}
        <span className="text-primary">Yours Won't.</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <p className="text-lg md:text-xl text-muted-foreground italic">
          "I tried ChatGPT. Spent two hours wrestling with prompts. The output looked professional until I actually read it. Nobody would believe I wrote that."
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          You've got years of expertise. Real knowledge that would make clients choose you instantly — if they could see it.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          Getting it out of your head and into content that sounds like you? That's where everything falls apart.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-foreground pt-4">
          One conversation changes that.
        </p>
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
          Watch What Happens (4 min)
        </Button>
      </motion.div>
    </div>
  </section>
);

/* ───────────────────────── VIDEO ───────────────────────── */
const VideoB = () => (
  <section id="video-section-b" className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline text-center">
          Watch What Happens <span className="text-primary">(4 min)</span>
        </h2>
        <div className="aspect-video rounded-xl border border-border overflow-hidden mb-10">
          <video
            src="/videos/DECODEFY_4_MINUTE_DEMO-optimised.mp4"
            controls
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 text-muted-foreground text-lg">
          <p>
            <span className="text-foreground font-medium">What you'll see:</span>{" "}
            Content created in Decodefy. Then we ask ChatGPT: what level of writer created this, and how long would it take?
          </p>
          <p>
            <span className="text-foreground font-medium">Answer:</span> Senior copywriter. 2.5–6 hours.
          </p>
          <p className="text-foreground font-medium">Decodefy: Less than a minute.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── CASE STUDY — MATT ───────────── */
const MattStory = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Matt Tried For Years.{" "}
          <span className="text-primary">One Email Changed Everything.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image placeholder */}
          <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Matt Steadman — Image</p>
          </div>
          <div className="w-full md:w-3/5 space-y-4 text-lg text-muted-foreground">
            <p>Matt Steadman runs a Yorkshire refrigeration business. Brilliant engineer. £200,000 in unfollowed quotes.</p>
            <p>And a dream prospect — operations manager of a 156-store food chain, who'd ignored his emails for years.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "I'm not somebody who can even compose an email sometimes. Something diplomatic takes me a while because I put too much thought into it."
            </blockquote>
            <p>That £200,000 in quotes? Nobody following up. Dream prospect? Still ignoring him.</p>
            <p className="text-foreground font-medium">A couple of days after his first training session with Decodefy: Created the email that finally worked.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "I emailed him the other day, but I got the system to write the email. I've got a meeting with him in November."
            </blockquote>
            <p><span className="text-foreground font-medium">One week later:</span> £6,000 maintenance contract. Access to an entire hotel group network. A system for following up on every quote he'd been ignoring.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "Because I know I've got this tool, it's sparked my interest in marketing."
            </blockquote>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHY AI SOUNDS LIKE AI ───────────── */
const ProblemB = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Why AI Content <span className="text-primary">Sounds Like AI</span>
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>ChatGPT knows what millions of people have written.</p>
          <p>It doesn't know how you think. How you explain things to clients. Your observations after years in your industry. The way you naturally build trust.</p>
          <p>So it gives you everyone else's version.</p>
          <p className="text-foreground font-medium text-xl">Your expertise stays invisible.</p>
          <p>When prospects can't see what you know, they compare you on price. Choose the louder competitor. Ghost you for reasons you never understand.</p>
          <p>You're not losing because you're not good enough.</p>
          <p className="text-foreground font-medium">You're losing because your content doesn't show that you are.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── MASTER BRAND COMPASS ───────────── */
const CompassSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          The Master Brand Compass:{" "}
          <span className="text-primary">One Hour That Captures How You Think</span>
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>This isn't a form. It's a conversation with Jon Young or Julie Gibson.</p>
          <p>They ask the questions you've never been asked. Not "what do you do?" but "how do you think about what you do?"</p>
          <p>How do you spot things others miss? What's the mistake people make before they call you? When a client's anxious, what do you say that makes them relax?</p>
          <p>You'll finish thinking: "I didn't realise I knew all that."</p>
          <p>But they're capturing how you think. Your observations. Your instincts. The way you build credibility when you're explaining something you care about.</p>
          <p className="text-foreground font-medium">That becomes your business brain. Programmed into Decodefy.</p>
          <p>ChatGPT has patterns from millions of people.</p>
          <p className="text-foreground font-medium text-xl">Decodefy has yours.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── TRAINING ───────────── */
const TrainingSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Training Takes One Hour.{" "}
          <span className="text-primary">Then You're Creating.</span>
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>Jon or Julie walks you through your personalised system.</p>
          <p className="text-foreground font-medium">Creating real content for real situations you're facing right now.</p>
          <div className="p-6 rounded-2xl border border-primary/30 bg-background my-6">
            <p className="text-foreground font-bold text-xl mb-2">Here's the guarantee:</p>
            <p>You'll create more usable, publish-ready content in that hour than you'd get from hiring a copywriter for a month.</p>
            <p className="mt-2">If you don't, full refund. No questions.</p>
          </div>
          <p>Jon and Julie have trained over 200 business owners. They know what happens when expertise meets this system.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── TELL IT WHAT YOU NEED ───────────── */
const UsageSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Then You Just <span className="text-primary">Tell It What You Need</span>
        </h2>
        <div className="space-y-3 text-lg text-muted-foreground mb-6">
          <p className="italic">"Write me a follow-up email for someone who went quiet."</p>
          <p className="italic">"LinkedIn post about why most people get [...] wrong."</p>
          <p className="italic">"Proposal for a client in recruitment."</p>
        </div>
        <p className="text-lg text-muted-foreground">Ten minutes. Done. Sounds like you wrote it on your best day.</p>
        <div className="mt-4 space-y-2 text-lg text-muted-foreground">
          <p>Want to adjust? "Make this warmer." "More formal." "Less salesy."</p>
          <p className="text-foreground font-medium">It knows what you mean. Because it knows how you think.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── CASE STUDY — CATHERINE ───────────── */
const CatherineStory = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          When Deadlines Become{" "}
          <span className="text-primary">Impossible</span>
        </h2>
        <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
          {/* Image placeholder */}
          <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Catherine — Image</p>
          </div>
          <div className="w-full md:w-3/5 space-y-4 text-lg text-muted-foreground">
            <p>Catherine runs a drug and alcohol testing company in Beverley. September 22nd, her phone rings.</p>
            <p>The grant deadline just moved from 3 months to 8 days. Half the funding for expensive equipment her business desperately needed.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "I'd seen the form and thought there's no way I could do that. Local government doesn't want to give money freely — they asked so many questions, all with 300-word limits."
            </blockquote>
            <p>She used Decodefy to write the entire application.</p>
            <p>The surprise: <span className="text-foreground font-medium italic">"Some of the things it gave I hadn't actually thought about. It was giving me ideas — different slants to focus on, things I hadn't considered."</span></p>
            <p>Application submitted on time. <span className="text-foreground font-medium">"There's no way I would've done that in the time I had."</span></p>
            <p className="text-foreground font-medium">Would have been impossible otherwise.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHAT CLIENTS CREATE ───────────── */
const ClientsCreateSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          What Clients <span className="text-primary">Create</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6">Blog posts. Social media. Proposals. Grant applications. High-stakes presentations.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Matt", result: "Follow-ups that closed a £6,000 deal in his first week." },
            { name: "Catherine", result: "Grant applications under impossible deadlines." },
            { name: "Will", result: "Blog posts and social content. Dyslexic. Avoided writing for years." },
          ].map((c) => (
            <div key={c.name} className="p-6 rounded-2xl bg-background border border-border">
              <p className="text-foreground font-bold text-lg mb-2">{c.name}</p>
              <p className="text-muted-foreground">{c.result}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── CASE STUDY — WILL ───────────── */
const WillStory = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Will Avoided Writing For Years.{" "}
          <span className="text-primary">Now He Sees Stories Everywhere.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image placeholder */}
          <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Will Barker — Image</p>
          </div>
          <div className="w-full md:w-3/5 space-y-4 text-lg text-muted-foreground">
            <p>Will Barker runs Kiplin Lodge Park in the Yorkshire Dales. Dyslexic. Writing was his enemy.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "I know my writing lets the business down. I've had bad comments about spelling mistakes on social media. Now I just… avoid it completely."
            </blockquote>
            <p>Time spent writing: 6–8 hours weekly, usually late at night.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "I'd rather clean toilets than write a blog post. At least I know I'm good at cleaning toilets."
            </blockquote>
            <p className="text-foreground font-medium text-xl mt-4">Four months after Decodefy:</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-background border border-primary/30 text-center">
                <p className="text-primary text-3xl font-bold">99%</p>
                <p className="text-sm text-muted-foreground">Website clicks up</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-primary/30 text-center">
                <p className="text-primary text-3xl font-bold">181%</p>
                <p className="text-sm text-muted-foreground">Impressions up</p>
              </div>
            </div>
            <p>Time spent: 2 hours weekly.</p>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "I started noticing things. Walking around the park, I'd see hares by the pond at sunrise. Before, I'd just walk past. Now I pull out my phone. The system taught me that content doesn't have to be perfect. It just has to be real. Now I see stories everywhere."
            </blockquote>
            <blockquote className="border-l-4 border-accent pl-5 py-2 text-foreground font-medium italic">
              "Bookings are the same as last year, but I'm thrilled because the general market is well down. We're holding steady while competitors struggle."
            </blockquote>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── BUILT TO GET BETTER ───────────── */
const BuiltBetter = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Built To Get Better{" "}
          <span className="text-primary">Automatically</span>
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>Multiple AI models working behind the scenes. Different models for different tasks.</p>
          <p>When new AI launches, your system improves automatically.</p>
          <p>Web search. News integration. Content library. Drag-and-drop workflow. Image creation launching March 2026.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHO THIS IS FOR ───────────── */
const AudienceB = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Who This <span className="text-primary">Is For</span>
        </h2>
        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          {[
            "Engineers with quotes nobody's following up.",
            "Holiday park owners whose dyslexia keeps them invisible online.",
            "Testing company owners facing impossible deadlines.",
            "Accountants brilliant with advice whose content doesn't prove it.",
            "Service businesses making £50K–£3M annually.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-muted-foreground">When your expertise is invisible, you compete on price.</p>
        <p className="text-foreground font-medium text-lg">When it's visible, you compete on value.</p>
      </motion.div>
    </div>
  </section>
);

/* ───────────── WHAT CHANGES ───────────── */
const WhatChanges = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          What <span className="text-primary">Changes</span>
        </h2>
        <ul className="space-y-3 text-lg text-muted-foreground">
          {[
            "Trust before the first call.",
            "More enquiries from people who've already decided.",
            "Price stops being the issue.",
            "Time recovered: 20–40 hours monthly.",
          ].map((item) => (
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
const WhatYouGet = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          What You <span className="text-primary">Get</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Users, title: "Master Brand Compass Session", desc: "One hour with Jon or Julie. Your expertise captured." },
            { icon: Zap, title: "Your System Built", desc: "James Cooke programmes your thinking. Takes 2–3 days." },
            { icon: BookOpen, title: "Training", desc: "One hour creating real content. More than a copywriter delivers in a month — or your money back." },
            { icon: Sparkles, title: "The System", desc: "Unlimited content creation. Content library. Workflow management." },
            { icon: HeadphonesIcon, title: "Support", desc: "Jon and Julie when you need them. Real people." },
            { icon: Users, title: "Local Legends Community", desc: "Monthly training. Network with other expert business owners." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-card border border-border flex gap-4">
              <item.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-foreground font-bold text-lg mb-1">{item.title}</p>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-border bg-background text-center">
          <p className="text-foreground font-bold text-lg mb-1">Everything New</p>
          <p className="text-muted-foreground">Price stays the same.</p>
        </div>
        <div className="mt-6 p-5 rounded-xl border border-muted bg-muted/20">
          <p className="text-sm text-muted-foreground font-medium mb-1">Optional When Ready</p>
          <p className="text-muted-foreground text-sm"><span className="text-foreground font-medium">SiteFlowe:</span> Website platform &nbsp;·&nbsp; <span className="text-foreground font-medium">LeadFlowe:</span> CRM</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── TEAM ───────────── */
const TeamB = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Who <span className="text-primary">Built This</span>
        </h2>
        <div className="space-y-10 text-lg text-muted-foreground">
          <div>
            <p className="text-foreground font-bold text-xl mb-2">Jon Young</p>
            <p>Asked 100+ business owners the same question: "You're brilliant at this. Why doesn't your website show that?"</p>
            <p className="mt-2">The pattern was always the same. Nobody had captured how they actually think.</p>
            <p className="mt-2">He spent three years figuring out how expert communicators think. Then found someone who could programme it.</p>
          </div>
          <div>
            <p className="text-foreground font-bold text-xl mb-2">James Cooke</p>
            <p>Spent twenty years building systems for BT, NatWest, BP.</p>
            <p className="mt-2">When Jon explained the problem, James said: "That's not a prompting problem. That's an architecture problem."</p>
            <p className="mt-2">Took eighteen months to build what you use in minutes.</p>
          </div>
          <div>
            <p className="text-foreground font-bold text-xl mb-2">Julie Gibson</p>
            <p>Realised after training fifty clients: great technology without support is expensive frustration.</p>
            <p className="mt-2">She's why clients succeed. Not just training — ongoing help when you're stuck.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── PRICING ───────────── */
const PricingB = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn} className="text-center">
        <h2 className="section-headline">
          Launch <span className="text-primary">Pricing</span>
        </h2>
        <div className="max-w-md mx-auto p-8 rounded-2xl border border-primary/30 bg-card mb-8">
          <p className="text-5xl font-bold text-foreground mb-1">£497</p>
          <p className="text-muted-foreground mb-4">Master Brand Compass + system build</p>
          <p className="text-3xl font-bold text-foreground mb-1">£100<span className="text-lg font-normal text-muted-foreground">/month</span></p>
          <p className="text-muted-foreground mb-6">Everything included</p>
          <p className="text-sm text-accent font-medium mb-6">Moving to £197/month soon. Lock in now, rate stays forever.</p>
          <Button size="lg" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            Book Your Session — £497
          </Button>
        </div>
        <div className="text-muted-foreground text-lg space-y-2 max-w-xl mx-auto">
          <p><span className="text-foreground font-medium">What this replaces:</span></p>
          <p>Copywriter: £2,000–£3,000 monthly. Days for delivery.</p>
          <p>Decodefy: £100/month. Minutes for delivery. Sounds like you.</p>
          <p className="text-sm mt-4">We take 10 new clients monthly.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── GUARANTEE ───────────── */
const GuaranteeB = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container text-center">
      <motion.div {...fadeIn}>
        <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="section-headline">
          The <span className="text-primary">Guarantee</span>
        </h2>
        <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto">
          <p className="text-foreground font-medium text-xl">In your first training session, you'll create more usable, publish-ready content than you'd get from hiring a copywriter for a month.</p>
          <p>Not rough drafts. Content you can send, post, and publish immediately.</p>
          <p>If you don't, full refund. No questions.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── FAQ ───────────── */
const faqItems = [
  { q: "\"I've tried AI tools. They sound robotic.\"", a: "They copy what people write. We programme how you think. Watch the demo." },
  { q: "\"I'm not technical.\"", a: "Matt's a refrigeration engineer. Will's dyslexic. If you can type \"write me an email,\" you can use this." },
  { q: "\"What if it doesn't sound like me?\"", a: "The Master Brand Compass captures how you think. That's what gets programmed." },
  { q: "\"How is this different from ChatGPT?\"", a: "ChatGPT has patterns from millions. Decodefy has yours." },
];

const FAQB = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          <span className="text-primary">Questions</span>
        </h2>
        <div className="space-y-6">
          {faqItems.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-foreground font-bold text-lg mb-2">{f.q}</p>
              <p className="text-muted-foreground text-lg">{f.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ───────────── FOOTER / CTA ───────────── */
const FooterB = () => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="section-headline">
            Two Ways To <span className="text-primary">Start</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeIn} className="p-8 rounded-2xl bg-background border border-border text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">See It First</h3>
            <p className="text-muted-foreground mb-6">Fifteen minutes. Real content. No pitch.</p>
            <Button variant="outline" size="lg" className="w-full h-12 rounded-full border-accent text-accent hover:bg-accent/10">
              Book a Demo
            </Button>
          </motion.div>
          <motion.div {...fadeIn} className="p-8 rounded-2xl bg-background border border-primary/30 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Just Start</h3>
            <p className="text-muted-foreground mb-6">More content in your first session than a copywriter delivers in a month — or your money back.</p>
            <Button size="lg" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              Book Your Session — £497
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container text-center">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            Nobody Can See Your Expertise.{" "}
            <span className="text-primary">That's The Only Problem You Have.</span>
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto mb-8">
            <p>One conversation. Then everything you know becomes visible.</p>
            <p>The refrigeration engineer closing his £200,000 in dormant quotes.</p>
            <p>The testing company owner meets the impossible deadline.</p>
            <p>The dyslexic holiday park owner doubles traffic and discovers he's a storyteller.</p>
            <p className="text-foreground font-medium text-xl">Your expertise doesn't need fixing. Your visibility does.</p>
          </div>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base px-8 h-14">
            Book Your Master Brand Compass Session
          </Button>
        </motion.div>
      </div>
    </section>

    <footer className="py-16 px-6 border-t border-border">
      <div className="section-container text-center">
        <img src={logo} alt="Decodefy" style={{ width: 120 }} className="mx-auto mb-8" />
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent/10">Book a Demo</Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">Book Your Session</Button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Decodefy. All rights reserved.</p>
          <a href="https://legal.decodefy.ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-foreground transition-colors underline">
            Legal
          </a>
        </div>
      </div>
    </footer>
  </>
);

/* ───────────── PAGE ───────────── */
const IndexB = () => (
  <div className="min-h-screen teal-gradient-bg text-foreground">
    <Navbar />
    <HeroB />
    <VideoB />
    <MattStory />
    <ProblemB />
    <CompassSection />
    <TrainingSection />
    <UsageSection />
    <CatherineStory />
    <ClientsCreateSection />
    <WillStory />
    <BuiltBetter />
    <AudienceB />
    <WhatChanges />
    <WhatYouGet />
    <TeamB />
    <PricingB />
    <GuaranteeB />
    <FAQB />
    <FooterB />
  </div>
);

export default IndexB;
