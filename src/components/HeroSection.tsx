import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

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
              of <span className="text-primary">Running</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Experience AI-powered personalized running plans designed to help you achieve your fitness goals. Track, train, and transform your running journey.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 h-14 gap-3 font-semibold shadow-soft hover:shadow-card transition-all duration-300"
              >
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </Button>
              <Button 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 h-14 gap-3 font-semibold shadow-soft hover:shadow-card transition-all duration-300"
              >
                <Apple className="w-6 h-6" />
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
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl"></div>
            
            {/* Phone Mockups Container */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* First Phone (Back) */}
              <div 
                className="absolute right-0 top-8 w-52 lg:w-64 animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-foreground rounded-[2.5rem] p-2 shadow-card">
                  <div className="bg-muted rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-muted p-4 flex flex-col">
                      <div className="text-center mt-8">
                        <div className="text-xs text-muted-foreground mb-2">Welcome to</div>
                        <div className="text-lg font-bold text-foreground">Perathon</div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">P</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="h-10 bg-primary rounded-xl"></div>
                        <div className="h-10 bg-foreground/10 rounded-xl border border-border"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone (Front) */}
              <div 
                className="relative left-0 w-56 lg:w-72 animate-slide-in-right z-10"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="bg-foreground rounded-[2.5rem] p-2 shadow-card">
                  <div className="bg-muted rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-xs text-muted-foreground">Good Morning!</div>
                          <div className="text-sm font-semibold text-foreground">Ready to run?</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                      </div>
                      
                      <div className="bg-background rounded-2xl p-3 mb-3 shadow-soft">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full bg-primary"></div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-foreground">Today's Goal</div>
                            <div className="text-lg font-bold text-primary">5.2 km</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-background rounded-2xl p-3 mb-3 shadow-soft">
                        <div className="text-xs text-muted-foreground mb-2">Weekly Progress</div>
                        <div className="flex gap-1">
                          {[60, 80, 45, 90, 70, 85, 40].map((height, i) => (
                            <div 
                              key={i} 
                              className="flex-1 bg-muted rounded-full overflow-hidden"
                              style={{ height: "60px" }}
                            >
                              <div 
                                className="w-full bg-primary rounded-full mt-auto"
                                style={{ 
                                  height: `${height}%`,
                                  marginTop: `${100 - height}%`
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1"></div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {["🏃", "📊", "⚙️"].map((icon, i) => (
                          <div 
                            key={i}
                            className={`h-10 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-primary' : 'bg-background'}`}
                          >
                            <span className="text-lg">{icon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div 
                className="absolute -left-4 lg:-left-8 top-1/4 bg-background rounded-2xl px-4 py-3 shadow-card animate-float z-20"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">100% Personalized</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div 
                className="absolute -right-4 lg:-right-8 bottom-1/4 bg-background rounded-2xl px-4 py-3 shadow-card animate-float z-20"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">💪</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">50+ Workouts</span>
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
