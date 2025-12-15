import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import AppDemoSection from "@/components/AppDemoSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DownloadSection />
        <BenefitsSection />
        <TrainersSection />
        <ContactSection />
        <AppDemoSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
