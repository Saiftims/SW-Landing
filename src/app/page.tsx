import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TechnologySection from "@/components/sections/TechnologySection";
import CTASection from "@/components/sections/CTASection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HowItWorksSection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </main>
  );
}
