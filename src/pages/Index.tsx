import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import AppDemoSection from "@/components/AppDemoSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DownloadSection />
        <BenefitsSection />
        <TrainersSection />
        {/* <ContactSection /> */}
        <AppDemoSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
