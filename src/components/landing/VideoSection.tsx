import { motion } from "framer-motion";


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

        <div className="aspect-video rounded-xl border border-border overflow-hidden mb-10">
          <video
            src="/videos/Decodefy_proof_Max_intro.mp4"
            controls
            preload="metadata"
            className="w-full h-full object-cover"
          />
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
