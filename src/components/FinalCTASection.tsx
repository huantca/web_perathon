import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-primary-foreground"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full border border-primary-foreground"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
            Unlock Your Running Potential
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Download Perathon Now
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            {/* App Store Buttons */}

            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 h-14 gap-3 font-semibold shadow-soft hover:shadow-card transition-all duration-300"
            >
              <img src="/ic_chplay.svg" className="w-8 h-8 object-contain" />
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </Button>
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 h-14 gap-3 font-semibold shadow-soft hover:shadow-card transition-all duration-300"
            >
              <img src="/ic_apple.svg" className="w-9 h-9 object-contain" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
