import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-16 lg:py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                Contact <span className="text-primary">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about Perathon? We're here to help you start your running journey. 
                Reach out to our team and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { icon: Mail, label: "Email", value: "hello@perathon.com", delay: 100 },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", delay: 200 },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA", delay: 300 },
                ].map((item) => (
                  <div 
                    key={item.label}
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-semibold text-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - CTA Card */}
            <div className={`bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-10 text-center shadow-glow transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground text-3xl">🏃</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Start?
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Join thousands of runners who have transformed their training with Perathon. 
                Start your journey today!
              </p>
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 font-bold shadow-soft transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
