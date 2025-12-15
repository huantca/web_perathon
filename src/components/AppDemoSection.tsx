import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AppDemoSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="testimonial" className="py-16 lg:py-24 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            App <span className="text-primary">Demo</span>
          </h2>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Our App Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        {/* Demo image */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <img
            src="/img_demo_app.png"
            alt="Perathon app demo"
            className="mx-auto w-full max-w-5xl rounded-2xl shadow-card object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDemoSection;
