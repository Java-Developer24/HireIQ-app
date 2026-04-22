import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Pipeline } from "@/components/landing/Pipeline";
import { OldVsNew } from "@/components/landing/OldVsNew";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Comparison } from "@/components/landing/Comparison";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Pipeline />
        <OldVsNew />
        <HowItWorks />
        <FeaturesBento />
        <Comparison />
        <Stats />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
