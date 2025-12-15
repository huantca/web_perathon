import { Button } from "@/components/ui/button";
import { Apple, Play, BarChart2, MousePointerClick } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Label Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-primary">The Best App For Runners</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-foreground">
              The Future<br />
              <span className="text-primary">of Running</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              <span className="text-primary font-semibold">Perathon</span> eliminates generic plans. Our proprietary AI algorithm analyzes your current physical condition to craft the perfect running route, which is then continuously adjusted day by day to match your evolving endurance and recovery. Trust the training that’s been certified by professionals.
            </p>


            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 h-14 gap-3 font-semibold shadow-soft hover:shadow-card transition-all duration-300"
              >
                <img src="/ic_chplay.svg" className="w-8 h-8 object-contain"/>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </Button>
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 h-14 gap-3 font-semibold shadow-soft hover:shadow-card transition-all duration-300"
              >
                 <img src="/ic_apple.svg" className="w-9 h-9 object-contain"/>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </Button>
            </div>

            {/* Trusted By Row */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-foreground">10,000+</span>
                <span className="text-muted-foreground"> runners trust us</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative lg:h-[650px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl"></div>
            
            {/* Phone Mockups Container */}
            <div className="relative w-full max-w-2xl lg:max-w-3xl">
              {/* Hero Phone Image */}
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src="/phone_hero.png"
                  alt="Perathon app preview"
                  className="mx-auto w-72 sm:w-80 md:w-96 lg:w-[560px] xl:w-[640px] max-w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating Badge 2 (Top) */}
              <div 
                className="absolute -right-4 lg:-right-8 top-24 bg-background rounded-full pl-2 pr-3 py-2 shadow-card animate-float z-20"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-orange-600 whitespace-nowrap">50+ Standardized Workouts</span>
                  <div className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full border border-orange-300/80 text-orange-700/90">
                    <MousePointerClick className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 (Bottom) */}
              <div 
                className="absolute -left-2 lg:-left-5 bottom-12 bg-background rounded-2xl px-4 py-3 shadow-card animate-float z-20"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">100% Personalized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
