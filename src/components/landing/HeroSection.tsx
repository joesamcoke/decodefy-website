import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
    <div className="absolute inset-0 hero-glow" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Content Sounds Like AI.{" "}
        <span className="text-primary">Yours Won't.</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <p className="text-lg md:text-xl text-muted-foreground">
          You've tried ChatGPT. Robotic output. Complicated prompts. Content that sounds like everyone else.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          Meanwhile, your actual expertise — the stuff that would make clients trust you — stays stuck in your head.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-foreground pt-4">
          One conversation with us fixes both.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10"
      >
        <Button size="lg" className="text-base md:text-lg px-8 h-14 gap-2">
          <Play className="w-5 h-5" />
          Watch How It Works (3 min)
        </Button>
        <p className="mt-6 text-sm text-muted-foreground max-w-md mx-auto">
          More usable content in your first session than a copywriter delivers in a month — or your money back.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
