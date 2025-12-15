import { Zap, Target, Wallet, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Zap,
    title: "Dynamic Daily Adjustments",
    description: "Our AI adapts your training plan in real-time based on your performance, recovery, and schedule changes.",
  },
  {
    icon: Target,
    title: "Personalized Workouts",
    description: "Every workout is tailored to your fitness level, goals, and preferences for maximum effectiveness.",
  },
  {
    icon: Wallet,
    title: "Cost Savings",
    description: "Get professional-level training guidance at a fraction of the cost of hiring a personal trainer.",
  },
  {
    icon: Award,
    title: "Expert-Vetted Guidance",
    description: "All workout plans are designed and reviewed by certified fitness professionals and running coaches.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="benefits" className="py-16 lg:py-24">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Exclusive Benefits of <span className="text-primary">Perathon</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover why runners choose Perathon for their fitness journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group bg-background border border-border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
