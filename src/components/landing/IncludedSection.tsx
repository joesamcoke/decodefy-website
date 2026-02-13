import { motion } from "framer-motion";
import { User, Zap, LayoutDashboard, Brain, Headphones, Rocket } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  { icon: User, title: "Your Expert Profile", paras: ["One Master Brand Compass session with Jon. Your expertise captured. Your system built. The foundation for everything."] },
  { icon: Zap, title: "The Decodefy System", paras: ["Create any type of content. Emails, proposals, social posts, website copy, blogs, documents for your team. One system does all of it.", "Just tell it what you need. \"Make this warmer.\" \"More formal.\" \"Tone it down a bit.\" It knows what you mean."] },
  { icon: LayoutDashboard, title: "Content Management", paras: ["Everything you create is saved. Edit anytime. A simple board lets you drag content from draft through to published. See what's done, what's waiting, what needs a polish."] },
  { icon: Brain, title: "Built-In Smarts", paras: ["Need to research something? It searches the web. Want to reference a webpage? Drop in the link. Following industry news? It finds recent stories and weaves them in."] },
  { icon: Headphones, title: "Julie's Support", paras: ["You're not left alone with technology. When you're stuck, when you're unsure, when you need a hand — Julie's there. Proper help from a real person."] },
  { icon: Rocket, title: "Everything That Comes Next", paras: ["New features, new tools, new integrations — included as they launch. Your price stays the same."] },
];

const IncludedSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-wide">
      <motion.div {...fadeIn} className="text-center mb-12">
        <h2 className="section-headline">
          Everything You Need. <span className="text-primary">Nothing You Don't.</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-background border border-border"
          >
            <f.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            {f.paras.map((p, j) => (
              <p key={j} className="text-muted-foreground mb-2 text-sm">{p}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IncludedSection;
