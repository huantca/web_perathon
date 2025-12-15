import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DownloadSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="download" className="py-16 lg:py-24 bg-secondary/50">
      <div 
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Download Perathon Today!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of runners who have transformed their training with personalized AI-powered workouts. 
            Connect with a global community and unlock your full running potential.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {/* iOS */}
          <div className={`bg-background rounded-2xl p-6 shadow-card text-center transition-all duration-500 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-4">
              <Apple className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">For iOS</h3>
            <p className="text-sm text-muted-foreground mb-4">Requires iOS 15.6 or later</p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300">
              Download App
            </Button>
          </div>

          {/* Android */}
          <div className={`bg-background rounded-2xl p-6 shadow-card text-center transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-background fill-current" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">For Android</h3>
            <p className="text-sm text-muted-foreground mb-4">Requires Android 8.0 or later</p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300">
              Download App
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className={`flex items-center gap-4 bg-background rounded-2xl p-5 shadow-soft transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-xl">🛤️</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Personalized Route Design</div>
            </div>
          </div>
          
          <div className={`flex items-center gap-4 bg-background rounded-2xl p-5 shadow-soft transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-xl">💪</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Expert-Certified Workouts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
