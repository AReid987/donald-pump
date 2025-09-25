import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { HowToBuySection } from "@/components/HowToBuySection";
import { CommunitySection } from "@/components/CommunitySection";
import { DisclaimerSection } from "@/components/DisclaimerSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Donald Pump Coin ($DPUMP) - The People's Pump on Pump.fun | Fair Launch Meme Coin</title>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      
      {/* Roadmap Section */}
      <section id="roadmap">
        <RoadmapSection />
      </section>
      
      {/* How to Buy Section */}
      <section id="how-to-buy">
        <HowToBuySection />
      </section>
      
      {/* Community Section */}
      <section id="community">
        <CommunitySection />
      </section>
      
      {/* Disclaimer Section */}
      <section id="disclaimer">
        <DisclaimerSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
