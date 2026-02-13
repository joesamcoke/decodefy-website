import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const results = [
  { title: "Trust happens before the first call.", text: "Prospects read your stuff and think \"this person knows what they're talking about.\" The conversation starts warm instead of cold." },
  { title: "Enquiries from people who've already decided you're the one to call.", text: "More content means more visibility. More visibility means more enquiries. More enquiries means you choose who you work with." },
  { title: "Price stops being the issue.", text: "When you're clearly the expert, you're not being compared on a spreadsheet. You're the obvious choice." },
  { title: "Sales gets easier.", text: "You're not convincing anyone. You're confirming what they already suspected — you're the one who can help." },
  { title: "You get your time back.", text: "Clients report 20 to 40 hours saved every month. That blog post that used to take half a day? Ten minutes." },
];

const steps = [
  { num: "01", title: "One Hour With Jon", paras: ["Not a questionnaire. A proper conversation. Jon's spent twenty years helping business owners — he knows exactly what to ask. In one hour, he captures how you think, how you explain things, what makes you actually good at what you do.", "You'll finish thinking \"I didn't realise I knew all that.\""] },
  { num: "02", title: "We Build Your System", paras: ["Behind the scenes, your expertise gets programmed into Decodefy. Your observations. Your instincts. Your voice. Takes a few days. You do nothing."] },
  { num: "03", title: "Create Everything You Need", paras: ["Tell it what you want in plain English: \"Write me a follow-up email for someone who went quiet.\" \"I need a LinkedIn post about why most people get this wrong.\" \"Write a proposal for a new client in recruitment.\"", "Ten minutes later, it's done. Sounds like you wrote it on your best day.", "No prompts to learn. No templates to fill in. No staring at blank pages."] },
];

const OutcomesSection = () => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            What Happens When Your Content Finally Shows{" "}
            <span className="text-primary">What You Know</span>
          </h2>
        </motion.div>
        <div className="space-y-6 mt-4">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l-2 border-primary/40 pl-6 py-2"
            >
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            One Conversation. Then Your Expertise{" "}
            <span className="text-primary">Works For You.</span>
          </h2>
        </motion.div>
        <div className="space-y-12 mt-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-6"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary/30 shrink-0">{s.num}</span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                {s.paras.map((p, j) => (
                  <p key={j} className="text-muted-foreground mb-3">{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default OutcomesSection;
