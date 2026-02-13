import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const VideoSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn}>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-2">
          We created content in Decodefy. Then we asked ChatGPT two questions.
        </p>
        <p className="text-center text-foreground font-medium mb-10">The video shows both.</p>

        <div className="aspect-video bg-card rounded-xl border border-border flex items-center justify-center cursor-pointer group relative overflow-hidden mb-10">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Play className="w-8 h-8 text-primary ml-1" />
          </div>
        </div>

        <div className="space-y-6 text-muted-foreground text-lg">
          <p>
            <span className="text-foreground font-medium">First question: "Rate this content for human quality."</span>{" "}
            Answer: Very high. Professional. Psychologically sophisticated.
          </p>
          <p>
            <span className="text-foreground font-medium">Second question: "What prompt would recreate this?"</span>{" "}
            Answer: 847 words of technical instructions — the kind only a trained copywriter would know how to write.
          </p>
          <p>
            That's the problem with AI tools. To get expert output, you need to already be an expert in prompting, copywriting, and marketing psychology.
          </p>
          <p>You've already spent years becoming an expert in your field.</p>
          <p className="text-foreground font-medium">
            Decodefy means you don't have to become an expert in content too.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
