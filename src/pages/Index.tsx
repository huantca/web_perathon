import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DownloadSection />
        <BenefitsSection />
      </main>
    </div>
  );
};

export default Index;
