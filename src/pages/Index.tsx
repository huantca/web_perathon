import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";

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
      </main>
    </div>
  );
};

export default Index;
