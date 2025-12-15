import { Button } from "@/components/ui/button";
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Download <span className="text-primary">Perathon</span> Today!
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Our AI understands your body, providing subtle, tailored adjustments and nutrition tips to make your training
              efficient and sustainable. Perathon turns every run into a science-backed, inspiring experience, supporting the
              global running community through modern, user-centric digital coaching.
            </p>

            {/* Metrics row with divider */}
            <div className="mt-8 flex items-start gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Personalized Route Design</div>
              </div>
              <div className="hidden sm:block h-6 w-px bg-border mt-1" />
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Expert-Certified Workouts</div>
              </div>
            </div>
          </div>

          {/* Right download blocks */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* iOS block */}
            <div
              className={`bg-background rounded-2xl p-6 shadow-card transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-4">
                <div className="text-xl font-bold text-foreground">For iOS</div>
                <div className="text-xs text-muted-foreground">iOS 15.6 +</div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-soft hover:shadow-glow transition-all duration-300">
                Download App
              </Button>
              <div className="mt-6 flex justify-center">
                <img src="/qr_ios.svg" alt="QR iOS" className="w-24 h-24 object-contain" />
              </div>
            </div>

            {/* Android block */}
            <div
              className={`bg-background rounded-2xl p-6 shadow-card transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-4">
                <div className="text-xl font-bold text-foreground">For Android</div>
                <div className="text-xs text-muted-foreground">Android 8.6 +</div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-soft hover:shadow-glow transition-all duration-300">
                Download App
              </Button>
              <div className="mt-6 flex justify-center">
                <img src="/qr_android.svg" alt="QR Android" className="w-24 h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
