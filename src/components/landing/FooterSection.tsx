import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/decodefy-logo.png";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const FooterSection = () => (
  <>
    <section className="section-padding bg-card/50">
      <div className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="section-headline">
            Two Ways To <span className="text-primary">Begin</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="p-8 rounded-2xl bg-background border border-border text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">See It First</h3>
            <p className="text-muted-foreground mb-4">
              Fifteen minutes. We'll show you real content created in Decodefy, explain what happens in a Master Brand Compass session, and answer whatever you're wondering.
            </p>
            <p className="text-muted-foreground text-sm mb-6">No pitch. No pressure. Just clarity.</p>
            <Button variant="outline" size="lg" className="w-full h-12 rounded-full border-accent text-accent hover:bg-accent/10">
              Book a 15-Minute Demo
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-8 rounded-2xl bg-background border border-primary/30 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Or Just Start</h3>
            <p className="text-muted-foreground mb-4">
              Book your Master Brand Compass session with Jon. One hour. Your expertise captured. Your system built within days.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              More usable content in your first session than a copywriter delivers in a month — or your money back.
            </p>
            <Button size="lg" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              Book Your Session — £495
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    <footer className="py-16 px-6 border-t border-border">
      <div className="section-container text-center">
        <motion.div {...fadeIn}>
          <p className="text-muted-foreground text-lg mb-2">
            Your expertise is valuable. Right now, nobody can see it.
          </p>
          <p className="text-foreground font-semibold text-xl mb-6">
            One conversation changes that.
          </p>
          <div className="text-muted-foreground space-y-1 mb-8">
            <p>AI content that doesn't sound like AI.</p>
            <p>Your expertise, finally visible.</p>
            <p>Clients who trust you before you've spoken.</p>
          </div>
          <img src={logo} alt="Decodefy" style={{ width: 120 }} className="mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent/10">Book a Demo</Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">Book Your Session</Button>
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Decodefy. All rights reserved.
            </p>
            <a href="https://legal.decodefy.ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-foreground transition-colors underline">
              Legal
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  </>
);

export default FooterSection;
