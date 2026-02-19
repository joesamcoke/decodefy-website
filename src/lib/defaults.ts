import type { LandingPageData } from "@/types/sanity";
import testimonialProfessional from "@/assets/testimonial-professional-services.jpg";
import testimonialConsulting from "@/assets/testimonial-consulting.jpg";
import testimonialFinancial from "@/assets/testimonial-financial-services.jpg";
import mattImage from "@/assets/matt-steadman.jpg";
import catherineImage from "@/assets/catherine-lemon-cherry.jpg";
import willImage from "@/assets/will-barker.jpg";

export const defaultLandingPage: LandingPageData = {
  hero: {
    headline: "AI Content Sounds Like AI.",
    headlineAccent: "Yours Won't.",
    paragraphs: [
      {
        text: `"I tried ChatGPT. Spent two hours wrestling with prompts. The output looked professional until I actually read it. Nobody would believe I wrote that."`,
        style: "italic",
      },
      {
        text: "You've got years of expertise. Real knowledge that would make clients choose you instantly - if they could see it.",
        style: "normal",
      },
      {
        text: "Getting it out of your head and into content that sounds like you? That's where everything falls apart.",
        style: "normal",
      },
      {
        text: "One conversation changes that.",
        style: "bold",
      },
    ],
    ctaText: "Watch What Happens (4 min)",
  },

  video: {
    headline: "Watch What Happens",
    headlineAccent: "(4 min)",
    videoUrl: "/videos/DECODEFY_4_MINUTE_DEMO-optimised.mp4",
    descriptions: [
      {
        label: "What you'll see:",
        text: "Content created in Decodefy. Then we ask ChatGPT: what level of writer created this, and how long would it take?",
      },
      {
        label: "Answer:",
        text: "Senior copywriter. 2.5–6 hours.",
      },
      {
        label: "",
        text: "Decodefy: Less than a minute.",
      },
    ],
  },

  testimonialsHeadline: "Don't Take",
  testimonialsHeadlineAccent: "Our Word For It",
  testimonialsSubtitle: "Three business owners. Three different industries. Same result.",
  testimonials: [
    {
      quote: `"I almost didn't want to record this - Decodefy is my secret weapon."`,
      name: "Nick Gibbons, Founder in Crypto & Web3 Blockchain",
      industry: "FOUNDER'S SECRET WEAPON",
      _localImage: testimonialProfessional,
      videoUrl: "https://vid.cdn-website.com/47bb3514/videos/uLpw0bwaSfmGHUdFifxI_Decodefy+Review+Nick+Gibbons-v.mp4",
    },
    {
      quote: `"I thought ChatGPT was the best thing ever created. Then I used Decodefy - I'm dumbfounded."`,
      name: "Dani Humphreys, Drive By Media",
      industry: "FROM ChatGPT FAN TO \"DUMBFOUNDED\"",
      _localImage: testimonialConsulting,
      videoUrl: "https://vid.cdn-website.com/47bb3514/videos/oeCHqwWWSTqf1nqR2sYk_Clip_Dani+Humphreys+-+DriveByMedia+-+Master+Brand+Compass+Session+highlights-v.mp4",
    },
    {
      quote: `"When I saw MY phrase in Decodefy, I thought 'how the hell does it know me so well already?'"`,
      name: "Stuart Wright, ActionCOACH",
      industry: "THE VOICE RECOGNITION THAT CHANGES EVERYTHING",
      _localImage: testimonialFinancial,
      videoUrl: "https://vid.cdn-website.com/47bb3514/videos/IDjpTDWDQcm2cfXnehvw_FM_Stuart-wright-testimonial-decodefy-fnl-v.mp4",
    },
  ],

  mattStory: {
    headline: "Matt Tried For Years.",
    headlineAccent: "One Email Changed Everything.",
    _localImage: mattImage,
    imageAlt: "Matt Steadman",
    reversed: false,
    content: [
      { _type: "block", _key: "m1", style: "normal", children: [{ _type: "span", _key: "m1s", text: "Matt Steadman runs a Yorkshire refrigeration business. Brilliant engineer. £200,000 in unfollowed quotes.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "m2", style: "normal", children: [{ _type: "span", _key: "m2s", text: "And a dream prospect - operations manager of a 156-store food chain, who'd ignored his emails for years.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "m3", style: "blockquote", children: [{ _type: "span", _key: "m3s", text: "\"I'm not somebody who can even compose an email sometimes. Something diplomatic takes me a while because I put too much thought into it.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "m4", style: "normal", children: [{ _type: "span", _key: "m4s", text: "That £200,000 in quotes? Nobody following up. Dream prospect? Still ignoring him.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "m5", style: "normal", children: [{ _type: "span", _key: "m5s", text: "A couple of days after his first training session with Decodefy: Created the email that finally worked.", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "m6", style: "blockquote", children: [{ _type: "span", _key: "m6s", text: "\"I emailed him the other day, but I got the system to write the email. I've got a meeting with him in November.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "m7", style: "normal", children: [{ _type: "span", _key: "m7a", text: "One week later:", marks: ["strong"] }, { _type: "span", _key: "m7b", text: " £6,000 maintenance contract. Access to an entire hotel group network. A system for following up on every quote he'd been ignoring.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "m8", style: "blockquote", children: [{ _type: "span", _key: "m8s", text: "\"Because I know I've got this tool, it's sparked my interest in marketing.\"", marks: [] }], markDefs: [] },
    ],
    stats: [],
  },

  catherineStory: {
    headline: "When Deadlines Become",
    headlineAccent: "Impossible",
    _localImage: catherineImage,
    imageAlt: "Catherine",
    reversed: true,
    content: [
      { _type: "block", _key: "c1", style: "normal", children: [{ _type: "span", _key: "c1s", text: "Catherine runs a drug and alcohol testing company in Beverley. September 22nd, her phone rings.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "c2", style: "normal", children: [{ _type: "span", _key: "c2s", text: "The grant deadline just moved from 3 months to 8 days. Half the funding for expensive equipment her business desperately needed.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "c3", style: "blockquote", children: [{ _type: "span", _key: "c3s", text: "\"I'd seen the form and thought there's no way I could do that. Local government doesn't want to give money freely - they asked so many questions, all with 300-word limits.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "c4", style: "normal", children: [{ _type: "span", _key: "c4s", text: "She used Decodefy to write the entire application.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "c5", style: "normal", children: [{ _type: "span", _key: "c5a", text: "The surprise: ", marks: [] }, { _type: "span", _key: "c5b", text: "\"Some of the things it gave I hadn't actually thought about. It was giving me ideas - different slants to focus on, things I hadn't considered.\"", marks: ["em", "strong"] }], markDefs: [] },
      { _type: "block", _key: "c6", style: "normal", children: [{ _type: "span", _key: "c6a", text: "Application submitted on time. ", marks: [] }, { _type: "span", _key: "c6b", text: "\"There's no way I would've done that in the time I had.\"", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "c7", style: "normal", children: [{ _type: "span", _key: "c7s", text: "Would have been impossible otherwise.", marks: ["strong"] }], markDefs: [] },
    ],
    stats: [],
  },

  willStory: {
    headline: "Will Avoided Writing For Years.",
    headlineAccent: "Now He Sees Stories Everywhere.",
    _localImage: willImage,
    imageAlt: "Will Barker",
    reversed: false,
    content: [
      { _type: "block", _key: "w1", style: "normal", children: [{ _type: "span", _key: "w1s", text: "Will Barker runs Kiplin Lodge Park in the Yorkshire Dales. Dyslexic. Writing was his enemy.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "w2", style: "blockquote", children: [{ _type: "span", _key: "w2s", text: "\"I know my writing lets the business down. I've had bad comments about spelling mistakes on social media. Now I just… avoid it completely.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "w3", style: "normal", children: [{ _type: "span", _key: "w3s", text: "Time spent writing: 6–8 hours weekly, usually late at night.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "w4", style: "blockquote", children: [{ _type: "span", _key: "w4s", text: "\"I'd rather clean toilets than write a blog post. At least I know I'm good at cleaning toilets.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "w5", style: "normal", children: [{ _type: "span", _key: "w5s", text: "Four months after Decodefy:", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "w6", style: "normal", children: [{ _type: "span", _key: "w6s", text: "Time spent: 2 hours weekly.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "w7", style: "blockquote", children: [{ _type: "span", _key: "w7s", text: "\"I started noticing things. Walking around the park, I'd see hares by the pond at sunrise. Before, I'd just walk past. Now I pull out my phone. The system taught me that content doesn't have to be perfect. It just has to be real. Now I see stories everywhere.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "w8", style: "blockquote", children: [{ _type: "span", _key: "w8s", text: "\"Bookings are the same as last year, but I'm thrilled because the general market is well down. We're holding steady while competitors struggle.\"", marks: [] }], markDefs: [] },
    ],
    stats: [
      { value: "99%", label: "Website clicks up" },
      { value: "181%", label: "Impressions up" },
    ],
  },

  problem: {
    headline: "Why AI Content",
    headlineAccent: "Sounds Like AI",
    content: [
      { _type: "block", _key: "p1", style: "normal", children: [{ _type: "span", _key: "p1s", text: "ChatGPT knows what millions of people have written.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "p2", style: "normal", children: [{ _type: "span", _key: "p2s", text: "It doesn't know how you think. How you explain things to clients. Your observations after years in your industry. The way you naturally build trust.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "p3", style: "normal", children: [{ _type: "span", _key: "p3s", text: "So it gives you everyone else's version.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "p4", style: "normal", children: [{ _type: "span", _key: "p4s", text: "Your expertise stays invisible.", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "p5", style: "normal", children: [{ _type: "span", _key: "p5s", text: "When prospects can't see what you know, they compare you on price. Choose the louder competitor. Ghost you for reasons you never understand.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "p6", style: "normal", children: [{ _type: "span", _key: "p6s", text: "You're not losing because you're not good enough.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "p7", style: "normal", children: [{ _type: "span", _key: "p7s", text: "You're losing because your content doesn't show that you are.", marks: ["strong"] }], markDefs: [] },
    ],
  },

  compass: {
    headline: "The Master Brand Compass:",
    headlineAccent: "One Hour That Captures How You Think",
    content: [
      { _type: "block", _key: "co1", style: "normal", children: [{ _type: "span", _key: "co1s", text: "This isn't a form. It's a conversation with Jon Young or Julie Gibson.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "co2", style: "normal", children: [{ _type: "span", _key: "co2s", text: "They ask the questions you've never been asked. Not \"what do you do?\" but \"how do you think about what you do?\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "co3", style: "normal", children: [{ _type: "span", _key: "co3s", text: "How do you spot things others miss? What's the mistake people make before they call you? When a client's anxious, what do you say that makes them relax?", marks: [] }], markDefs: [] },
      { _type: "block", _key: "co4", style: "normal", children: [{ _type: "span", _key: "co4s", text: "You'll finish thinking: \"I didn't realise I knew all that.\"", marks: [] }], markDefs: [] },
      { _type: "block", _key: "co5", style: "normal", children: [{ _type: "span", _key: "co5s", text: "But they're capturing how you think. Your observations. Your instincts. The way you build credibility when you're explaining something you care about.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "co6", style: "normal", children: [{ _type: "span", _key: "co6s", text: "That becomes your business brain. Programmed into Decodefy.", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "co7", style: "normal", children: [{ _type: "span", _key: "co7s", text: "ChatGPT has patterns from millions of people.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "co8", style: "normal", children: [{ _type: "span", _key: "co8s", text: "Decodefy has yours.", marks: ["strong"] }], markDefs: [] },
    ],
  },

  training: {
    headline: "Training Takes One Hour.",
    headlineAccent: "Then You're Creating.",
    content: [
      { _type: "block", _key: "t1", style: "normal", children: [{ _type: "span", _key: "t1s", text: "Jon or Julie walks you through your personalised system.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "t2", style: "normal", children: [{ _type: "span", _key: "t2s", text: "Creating real content for real situations you're facing right now.", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "t3", style: "normal", children: [{ _type: "span", _key: "t3s", text: "Jon and Julie have trained over 200 business owners. They know what happens when expertise meets this system.", marks: [] }], markDefs: [] },
    ],
    guaranteeBoxTitle: "Here's the guarantee:",
    guaranteeBoxContent: "You'll create more usable, publish-ready content in that hour than you'd get from hiring a copywriter for a month.\n\nIf you don't, full refund. No questions.",
  },

  usage: {
    headline: "Then You Just",
    headlineAccent: "Tell It What You Need",
    examples: [
      "\"Write me a follow-up email for someone who went quiet.\"",
      "\"LinkedIn post about why most people get [...] wrong.\"",
      "\"Proposal for a client in recruitment.\"",
    ],
    afterText: "Ten minutes. Done. Sounds like you wrote it on your best day.",
    adjustExamples: "Want to adjust? \"Make this warmer.\" \"More formal.\" \"Less salesy.\"",
    closingLine: "It knows what you mean. Because it knows how you think.",
  },

  clientsCreateHeadline: "What Clients",
  clientsCreateHeadlineAccent: "Create",
  clientsCreateSubtitle: "Blog posts. Social media. Proposals. Grant applications. High-stakes presentations.",
  clientCards: [
    { name: "Matt", result: "Follow-ups that closed a £6,000 deal in his first week.", _localImage: mattImage },
    { name: "Catherine", result: "Grant applications under impossible deadlines.", _localImage: catherineImage },
    { name: "Will", result: "Blog posts and social content. Dyslexic. Avoided writing for years.", _localImage: willImage },
  ],

  builtBetter: {
    headline: "Built To Get Better",
    headlineAccent: "Automatically",
    content: [
      { _type: "block", _key: "bb1", style: "normal", children: [{ _type: "span", _key: "bb1s", text: "Multiple AI models working behind the scenes. Different models for different tasks.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "bb2", style: "normal", children: [{ _type: "span", _key: "bb2s", text: "When new AI launches, your system improves automatically.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "bb3", style: "normal", children: [{ _type: "span", _key: "bb3s", text: "Web search. News integration. Content library. Drag-and-drop workflow. Image creation launching March 2026.", marks: [] }], markDefs: [] },
    ],
  },

  audience: {
    headline: "Who This",
    headlineAccent: "Is For",
    items: [
      "Engineers with quotes nobody's following up.",
      "Holiday park owners whose dyslexia keeps them invisible online.",
      "Testing company owners facing impossible deadlines.",
      "Accountants brilliant with advice whose content doesn't prove it.",
      "Service businesses making £50K–£3M annually.",
    ],
    afterText: "When your expertise is invisible, you compete on price.",
    closingLine: "When it's visible, you compete on value.",
  },

  whatChanges: {
    headline: "What",
    headlineAccent: "Changes",
    items: [
      "Trust before the first call.",
      "More enquiries from people who've already decided.",
      "Price stops being the issue.",
      "Time recovered: 20–40 hours monthly.",
    ],
  },

  whatYouGet: {
    headline: "What You",
    headlineAccent: "Get",
    features: [
      { icon: "Users", title: "Master Brand Compass Session", desc: "One hour with Jon or Julie. Your expertise captured." },
      { icon: "Zap", title: "Your System Built", desc: "James Cooke programmes your thinking. Takes 2–3 days." },
      { icon: "BookOpen", title: "Training", desc: "One hour creating real content. More than a copywriter delivers in a month - or your money back." },
      { icon: "Sparkles", title: "The System", desc: "Unlimited content creation. Content library. Workflow management." },
      { icon: "HeadphonesIcon", title: "Support", desc: "Jon and Julie when you need them. Real people." },
      { icon: "Users", title: "Local Legends Community", desc: "Monthly training. Network with other expert business owners." },
    ],
    everythingNewTitle: "Everything New",
    everythingNewText: "Price stays the same.",
    optionalLabel: "Optional When Ready",
    optionalContent: "SiteFlowe: Website platform  ·  LeadFlowe: CRM",
  },

  teamHeadline: "Who",
  teamHeadlineAccent: "Built This",
  teamMembers: [
    {
      name: "Jon Young",
      desc: "Asked 100+ business owners the same question: \"You're brilliant at this. Why doesn't your website show that?\" He spent three years figuring out how expert communicators think. Then found someone who could programme it.",
    },
    {
      name: "James Cooke",
      desc: "Spent twenty years building systems for BT, NatWest, BP. When Jon explained the problem, James said: \"That's not a prompting problem. That's an architecture problem.\" Took eighteen months to build what you use in minutes.",
    },
    {
      name: "Julie Gibson",
      desc: "Realised after training fifty clients: great technology without support is expensive frustration. She's why clients succeed. Not just training - ongoing help when you're stuck.",
    },
  ],

  pricing: {
    headline: "Launch",
    headlineAccent: "Pricing",
    setupPrice: "£497",
    setupLabel: "Master Brand Compass + system build",
    monthlyPrice: "£100",
    monthlyLabel: "Everything included",
    urgencyText: "Moving to £197/month soon. Lock in now, rate stays forever.",
    ctaText: "Book Your Session - £497",
    ctaUrl: "https://link.tryggr.app/widget/bookings/decodefy-15-minute-demo",
    comparisonLines: [
      "Copywriter: £2,000–£3,000 monthly. Days for delivery.",
      "Decodefy: £100/month. Minutes for delivery. Sounds like you.",
    ],
    capacityNote: "We take 10 new clients monthly.",
  },

  guarantee: {
    headline: "The",
    headlineAccent: "Guarantee",
    content: [
      { _type: "block", _key: "g1", style: "normal", children: [{ _type: "span", _key: "g1s", text: "In your first training session, you'll create more usable, publish-ready content than you'd get from hiring a copywriter for a month.", marks: ["strong"] }], markDefs: [] },
      { _type: "block", _key: "g2", style: "normal", children: [{ _type: "span", _key: "g2s", text: "Not rough drafts. Content you can send, post, and publish immediately.", marks: [] }], markDefs: [] },
      { _type: "block", _key: "g3", style: "normal", children: [{ _type: "span", _key: "g3s", text: "If you don't, full refund. No questions.", marks: [] }], markDefs: [] },
    ],
  },

  faqHeadline: "",
  faqHeadlineAccent: "Questions",
  faqItems: [
    { question: "\"I've tried AI tools. They sound robotic.\"", answer: "They copy what people write. We programme how you think. Watch the demo." },
    { question: "\"I'm not technical.\"", answer: "Matt's a refrigeration engineer. Will's dyslexic. If you can type \"write me an email,\" you can use this." },
    { question: "\"What if it doesn't sound like me?\"", answer: "The Master Brand Compass captures how you think. That's what gets programmed." },
    { question: "\"How is this different from ChatGPT?\"", answer: "ChatGPT has patterns from millions. Decodefy has yours." },
  ],

  footer: {
    ctaHeadline: "Two Ways To",
    ctaHeadlineAccent: "Start",
    options: [
      {
        title: "See It First",
        description: "Fifteen minutes. Real content. No pitch.",
        ctaText: "Book a Demo",
        ctaUrl: "https://link.tryggr.app/widget/bookings/decodefy-15-minute-demo",
        isPrimary: false,
      },
      {
        title: "Just Start",
        description: "More content in your first session than a copywriter delivers in a month - or your money back.",
        ctaText: "Book Your Session - £497",
        ctaUrl: "https://link.tryggr.app/widget/bookings/decodefy-15-minute-demo",
        isPrimary: true,
      },
    ],
    closingHeadline: "Nobody Can See Your Expertise.",
    closingHeadlineAccent: "That's The Only Problem You Have.",
    closingParagraphs: [
      "One conversation. Then everything you know becomes visible.",
      "The refrigeration engineer closing his £200,000 in dormant quotes.",
      "The testing company owner meets the impossible deadline.",
      "The dyslexic holiday park owner doubles traffic and discovers he's a storyteller.",
    ],
    closingBold: "Your expertise doesn't need fixing. Your visibility does.",
    closingCtaText: "Book Your Master Brand Compass Session",
    closingCtaUrl: "https://link.tryggr.app/widget/bookings/decodefy-15-minute-demo",
    legalUrl: "https://legal.decodefy.ai",
  },
};
