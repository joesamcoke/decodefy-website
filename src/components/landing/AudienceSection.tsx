import { motion } from "framer-motion";
import { Smartphone, Monitor, Tablet } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const professions = [
  "Accountants who give brilliant advice but whose website sounds like every other accountant.",
  "Solicitors who know their stuff but can't prove it until they're in the room.",
  "Consultants who solve real problems but whose proposals don't show why they're different.",
  "Coaches who need this for their clients too - because knowing the strategy means nothing if they can't create the content to execute it.",
  "Trades who do exceptional work but whose online presence doesn't match.",
  "Therapists, architects, recruiters, financial advisers - anyone who's better than their content currently suggests.",
];

const AudienceSection = () => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container text-center">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            The Best Ideas{" "}
            <span className="text-primary">Don't Happen At Your Desk.</span>
          </h2>
          <div className="flex justify-center gap-8 mb-8">
            <Smartphone className="w-8 h-8 text-primary/60" />
            <Tablet className="w-8 h-8 text-primary/60" />
            <Monitor className="w-8 h-8 text-primary/60" />
          </div>
          <div className="text-lg text-muted-foreground space-y-4 text-left max-w-2xl mx-auto">
            <p>Shower. 2am. Sunday morning. Stuck in traffic.</p>
            <p>That's when the good stuff shows up - the insight you've been trying to articulate, the post that would actually land.</p>
            <p>Decodefy's there when you are. Phone, tablet, laptop. Capture it before it disappears. Turn it into something usable before you've finished your coffee.</p>
            <p className="text-foreground font-medium">Your expertise doesn't clock off. Neither does this.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="section-headline">
            Experts Who Are Tired Of Their Content{" "}
            <span className="text-primary">Not Showing It</span>
          </h2>
        </motion.div>
        <div className="space-y-4 mt-4">
          {professions.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-3 items-start"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <p className="text-muted-foreground text-lg">{p}</p>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground font-medium text-lg mt-8"
          >
            If you've ever lost work to someone you know you're better than, this is for you.
          </motion.p>
        </div>
      </div>
    </section>
  </>
);

export default AudienceSection;
