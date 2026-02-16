import { motion } from "framer-motion";
import { FileText, PenLine, Mail, MessageSquare, CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const changes = [
  { icon: FileText, title: "The proposal you've been avoiding.", text: "Tell Decodefy what it's for. Ten minutes later, it's written - and it sounds like you at your sharpest." },
  { icon: PenLine, title: "The blog post that eats half your Saturday.", text: "Done in the time it takes to drink a coffee. Publish it and move on with your life." },
  { icon: MessageSquare, title: "The social posts you keep meaning to write.", text: "A month's social content in one session. Never stare at a blank screen wondering what to say." },
  { icon: Mail, title: "The emails sitting in drafts.", text: "Follow-ups, sequences, the awkward \"just checking in\" - written in minutes, sounding like you." },
  { icon: CheckCircle, title: "The \"I should be doing more content\" guilt.", text: "Gone. Because now you actually are." },
];

const ProblemSection = () => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            If You Were Happy With AI Tools,{" "}
            <span className="text-primary">You Wouldn't Be Reading This.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>Same story every time: robotic output that screams "AI wrote this." Or prompts so complicated you might as well have written the thing yourself.</p>
            <p>So the blog post doesn't get written. The proposal sits in drafts. You haven't posted on LinkedIn in three weeks. The website still sounds like everyone else's.</p>
            <p>Meanwhile, everything you actually know - the expertise you've built over years - stays invisible.</p>
            <p>Prospects can't see it. So they compare you on price. They go with whoever seems safest. They ghost you and you never know why.</p>
            <p className="text-foreground font-medium">You're not losing because you're not good enough. You're losing because your content doesn't show that you are.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            The Stuff That Takes Forever?{" "}
            <span className="text-primary">Doesn't Anymore.</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 mt-4">
          {changes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProblemSection;
