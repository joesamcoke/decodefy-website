import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PricingSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container text-center">
      <motion.div {...fadeIn}>
        <h2 className="section-headline">
          Launch Pricing.{" "}
          <span className="text-primary">It Won't Stay This Low.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-lg mx-auto bg-background border border-primary/30 rounded-2xl p-8 md:p-10 mt-8"
      >
        <div className="mb-8">
          <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">£495</div>
          <p className="text-muted-foreground">Master Brand Compass session + your Expert Profile built</p>
        </div>
        <div className="mb-8 pb-8 border-b border-border">
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            £97<span className="text-lg font-normal text-muted-foreground">/month</span>
          </div>
          <p className="text-muted-foreground">Full access to Decodefy and everything in it</p>
        </div>
        <div className="text-left space-y-3 mb-8">
          {["No tiers", "No premium version", "No upsells", "No points to run out of"].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <Button size="lg" className="w-full h-14 text-base bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
          Book Your Session — £495
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-left max-w-lg mx-auto"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">What this replaces:</h3>
        <div className="space-y-2 text-muted-foreground">
          <p>A decent copywriter charges £300–500 for a single sales page. £100+ for a blog post. £50–100 per email.</p>
          <p>One month of regular content? You're looking at £2,000–3,000 minimum. And you're still waiting days for delivery.</p>
          <p className="text-foreground font-medium">Decodefy: £97/month. Unlimited content. Done in minutes.</p>
        </div>
        <div className="mt-8 p-4 rounded-lg bg-secondary border border-border">
          <p className="text-foreground text-sm font-medium">
            The catch: This is launch pricing. As we add features and integrations, the price goes up. Lock in now, your rate stays forever.
          </p>
          <p className="text-primary text-sm font-medium mt-2">
            We take on 10 new clients per month. When the slots are gone, they're gone until next month.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
