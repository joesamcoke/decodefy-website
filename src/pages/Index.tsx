import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import VideoSection from "@/components/landing/VideoSection";
import ProblemSection from "@/components/landing/ProblemSection";
import OutcomesSection from "@/components/landing/OutcomesSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ProofSection from "@/components/landing/ProofSection";
import IncludedSection from "@/components/landing/IncludedSection";
import TeamSection from "@/components/landing/TeamSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <VideoSection />
    <ProblemSection />
    <OutcomesSection />
    <AudienceSection />
    <ProofSection />
    <IncludedSection />
    <TeamSection />
    <PricingSection />
    <FAQSection />
    <FooterSection />
  </div>
);

export default Index;
