import { motion } from "framer-motion";
import { Shield, Play } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ProofSection = () => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container text-center">
        <motion.div {...fadeIn}>
          <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="section-headline">
            More Content In One Session Than A Copywriter Delivers In A Month.{" "}
            <span className="text-primary">Or Your Money Back.</span>
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 text-left max-w-2xl mx-auto">
            <p>Here's the promise:</p>
            <p>In your first training session, you'll create more usable, publish-ready content than you'd get from hiring a copywriter for a month.</p>
            <p>Not rough drafts. Not "needs a bit of work." Content you can send, post, and publish immediately.</p>
            <p>If that doesn't happen, we refund you. Full amount. No questions. No hassle. No forms to fill in.</p>
            <p>We can make this promise because we've done it over a hundred times. We know what happens when your expertise meets this system.</p>
            <p className="text-foreground font-medium">You'll leave that first session with more content than you've produced in the last six months.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="section-headline">
            Don't Take <span className="text-primary">Our Word For It</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three business owners. Three different industries. Same result: more content, less time, clients who see them as the expert.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="aspect-video bg-card rounded-xl border border-border flex items-center justify-center cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play className="w-6 h-6 text-primary ml-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProofSection;
