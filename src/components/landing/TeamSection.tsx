import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const team = [
  {
    name: "Jon Young",
    role: "The Lazy One",
    paras: [
      "Twenty years helping local businesses. Built Decodefy because he got tired of watching brilliant people lose to louder competitors — and because he's lazy enough to believe there had to be a shortcut.",
      "He spent two years figuring out how expert communicators actually think. Then he found a way to programme it into a system anyone can use. Turns out there was a shortcut. This is it.",
    ],
  },
  {
    name: "James Cooke",
    role: "The One Who Makes It Work",
    paras: [
      "Twenty years making complex technology simple. Took Jon's framework and built it into something you can use in minutes. No tech skills required. No prompting knowledge needed. If you can have a conversation and type a sentence, you can use this.",
    ],
  },
  {
    name: "Julie Gibson",
    role: "The Reason Clients Succeed",
    paras: [
      "Sales background. Operational precision. Not just onboarding — ongoing support. The person who makes sure you don't just get access, you get results. When you need help, Julie's who you call.",
    ],
  },
];

const TeamSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn} className="text-center mb-12">
        <h2 className="section-headline">
          Three People. Two Years To Build This.{" "}
          <span className="text-primary">One Mission.</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary">{t.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
            <p className="text-primary text-sm font-medium mb-3">{t.role}</p>
            {t.paras.map((p, j) => (
              <p key={j} className="text-muted-foreground mb-3 text-sm">{p}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
