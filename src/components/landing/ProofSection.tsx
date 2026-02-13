import { motion } from "framer-motion";
import { Shield, Play } from "lucide-react";
import testimonialProfessional from "@/assets/testimonial-professional-services.jpg";
import testimonialConsulting from "@/assets/testimonial-consulting.jpg";
import testimonialFinancial from "@/assets/testimonial-financial-services.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    quote: "\"I almost didn't want to record this — Decodefy is my secret weapon.\"",
    name: "Business Owner",
    industry: "Professional Services",
    image: testimonialProfessional,
  },
  {
    quote: "\"I thought ChatGPT was the best thing ever created. Then I used Decodefy — I'm dumbfounded.\"",
    name: "Business Owner",
    industry: "Consulting",
    image: testimonialConsulting,
  },
  {
    quote: "\"When I saw MY phrase in Decodefy, I thought 'how the hell does it know me so well already?'\"",
    name: "Business Owner",
    industry: "Financial Services",
    image: testimonialFinancial,
  },
];

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
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="section-headline">
            Don't Take <span className="text-primary">Our Word For It</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three business owners. Three different industries. Same result: more content, less time, clients who see them as the expert.
          </p>
        </motion.div>

        <div className="space-y-20">
          {testimonials.map((t, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                {/* Video thumbnail */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-video rounded-2xl border border-border overflow-hidden">
                    <img src={t.image} alt={`${t.industry} testimonial`} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Real <span className="text-primary">Results.</span>
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    {t.industry}
                  </p>
                  <blockquote className="text-xl md:text-2xl font-semibold text-foreground leading-snug border-l-4 border-accent pl-5 py-2">
                    {t.quote}
                  </blockquote>
                  <p className="text-muted-foreground text-sm">{t.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default ProofSection;
