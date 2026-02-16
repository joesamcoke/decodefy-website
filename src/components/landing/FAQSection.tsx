import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    q: "\"I've tried AI tools before. They all sound robotic.\"",
    a: "Because they copy how humans write. We programmed how expert communicators think. Different approach, different result. Watch the video - ChatGPT itself rates the output as very high human quality.",
  },
  {
    q: "\"I'm not technical.\"",
    a: "Neither are most of our clients. Accountants, solicitors, tradespeople - not tech people. If you can have a conversation and type a sentence, you can use this. Julie makes sure of it.",
  },
  {
    q: "\"What if it doesn't sound like me?\"",
    a: "That's the whole point of the Master Brand Compass session. Jon captures your voice, your way of explaining things, your expertise. The system sounds like you because it's built from you.",
  },
  {
    q: "\"How is this different from ChatGPT?\"",
    a: "ChatGPT needs expert prompts to get expert output. We showed it content from Decodefy and asked what prompt would recreate it - 847 words of technical instructions. Decodefy means you don't need to know any of that. Just tell it what you want in plain English.",
  },
  {
    q: "\"I never know what to write about.\"",
    a: "You don't need to. Decodefy draws out ideas you didn't know you had. It asks the right questions, finds the angles, does the thinking. You'll finish sessions thinking \"I didn't realise I knew that.\"",
  },
  {
    q: "\"What if I want to change the tone?\"",
    a: "Just say so. \"Make this warmer.\" \"More formal.\" \"Tone it down.\" It knows what you mean.",
  },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div {...fadeIn} className="text-center mb-12">
        <h2 className="section-headline">
          Questions You're <span className="text-primary">Probably Asking</span>
        </h2>
      </motion.div>
      <motion.div {...fadeIn}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 bg-card data-[state=closed]:border-b"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
