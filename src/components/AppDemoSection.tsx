import { ExternalLink } from "lucide-react";

const screens = [
  {
    title: "Best Workouts",
    subtitle: "Personalized for you",
    content: (
      <div className="space-y-3">
        <div className="bg-background rounded-xl p-3 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-lg">🏃</span>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-foreground">Morning Run</div>
              <div className="text-xs text-muted-foreground">5.2 km • 30 min</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs">▶</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-xl p-3 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-lg">💪</span>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-foreground">HIIT Session</div>
              <div className="text-xs text-muted-foreground">15 exercises • 20 min</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs">▶</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-xl p-3 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-lg">🧘</span>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-foreground">Cool Down</div>
              <div className="text-xs text-muted-foreground">Stretching • 10 min</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs">▶</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Routine Setup",
    subtitle: "Build your schedule",
    content: (
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground mb-2">Select your workout days</div>
        <div className="flex gap-1 justify-center mb-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold ${
                [0, 2, 4].includes(i) 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="bg-background rounded-xl p-3 shadow-soft">
          <div className="text-xs text-muted-foreground mb-1">Goal</div>
          <div className="text-sm font-bold text-foreground">Run a Marathon</div>
        </div>
        <div className="bg-background rounded-xl p-3 shadow-soft">
          <div className="text-xs text-muted-foreground mb-1">Duration</div>
          <div className="text-sm font-bold text-foreground">12 Weeks</div>
        </div>
        <div className="h-10 bg-primary rounded-xl flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-semibold">Create Routine</span>
        </div>
      </div>
    ),
  },
  {
    title: "Today's Activity",
    subtitle: "Track your progress",
    content: (
      <div className="space-y-3">
        <div className="bg-background rounded-xl p-4 shadow-soft text-center">
          <div className="relative w-20 h-20 mx-auto mb-2">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 35 * 0.75} ${2 * Math.PI * 35}`}
                className="text-primary"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-foreground">75%</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Daily Goal</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-background rounded-lg p-2 text-center shadow-soft">
            <div className="text-sm font-bold text-primary">3.8</div>
            <div className="text-[10px] text-muted-foreground">km</div>
          </div>
          <div className="bg-background rounded-lg p-2 text-center shadow-soft">
            <div className="text-sm font-bold text-primary">245</div>
            <div className="text-[10px] text-muted-foreground">kcal</div>
          </div>
          <div className="bg-background rounded-lg p-2 text-center shadow-soft">
            <div className="text-sm font-bold text-primary">22</div>
            <div className="text-[10px] text-muted-foreground">min</div>
          </div>
        </div>
      </div>
    ),
  },
];

const AppDemoSection = () => {
  return (
    <section id="testimonial" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {screens.map((screen, index) => (
            <div
              key={screen.title}
              className="group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Phone Frame */}
              <div className="bg-foreground rounded-[2.5rem] p-2 shadow-card group-hover:shadow-glow transition-shadow duration-300">
                <div className="bg-muted rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-6 bg-secondary flex items-center justify-center">
                    <div className="w-16 h-1 bg-foreground/20 rounded-full"></div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="p-4 bg-gradient-to-b from-secondary to-muted min-h-[320px]">
                    <div className="text-center mb-4">
                      <div className="text-sm font-bold text-foreground">{screen.title}</div>
                      <div className="text-xs text-muted-foreground">{screen.subtitle}</div>
                    </div>
                    {screen.content}
                  </div>

                  {/* Bottom Nav */}
                  <div className="h-10 bg-background flex items-center justify-center gap-8">
                    <div className="w-4 h-4 rounded-full bg-primary/30"></div>
                    <div className="w-4 h-4 rounded-full bg-muted"></div>
                    <div className="w-4 h-4 rounded-full bg-muted"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDemoSection;
