import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const trainers = [
  { id: 1, name: "Huan", specialty: "Dev", img: "huan.png" },
  { id: 2, name: "Tuan", specialty: "Leader", img: "tuan.png" },
  { id: 3, name: "An", specialty: "Dev", img: "an.png" },
  { id: 4, name: "Minh", specialty: "Designer", img: "minh.png" },
  { id: 5, name: "Huy", specialty: "Designer", img: "huy.png" },
  { id: 6, name: "Oanh", specialty: "Marketing", img: "oanh.png" },
  { id: 7, name: "Phuong Anh", specialty: "Leader", img: "pAnh.png" },
];

const TrainersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-secondary/50 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the young, passionate team of runners and creators dedicated to building the ultimate, personalized digital coaching experience for the running community.
          </p>
        </div>

        {/* Creative Trainer Layout */}
        <div className={`relative max-w-4xl mx-auto h-[400px] lg:h-[500px] transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          {/* Center decoration */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-primary/10 flex items-center justify-center">

            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/20 flex items-center justify-center">

              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Perathon logo"
                  className="w-7 h-7 lg:w-10 lg:h-10 object-contain"
                />
              </div>

            </div>
          </div>

          {/* Trainers positioned around */}
          {trainers.map((trainer, index) => {
            const positions = [
              { top: "6%", left: "18%", size: "w-20 h-20 lg:w-28 lg:h-28" },

              { top: "0%", left: "50%", size: "w-24 h-24 lg:w-32 lg:h-32", transform: "-translate-x-1/2" },

              { top: "6%", right: "18%", size: "w-20 h-20 lg:w-28 lg:h-28" },

              // ===== MIDDLE =====
              { top: "38%", left: "4%", size: "w-20 h-20 lg:w-28 lg:h-28" },

              { top: "38%", right: "4%", size: "w-20 h-20 lg:w-28 lg:h-28" },

              // ===== BOTTOM =====
              { bottom: "6%", left: "28%", size: "w-24 h-24 lg:w-32 lg:h-32", transform: "-translate-x-1/2" },

              { bottom: "6%", right: "28%", size: "w-24 h-24 lg:w-32 lg:h-32", transform: "translate-x-1/2" },
            ];

            const pos = positions[index];

            return (
              <div
                key={trainer.id}
                className={`absolute group ${pos.size} ${pos.transform || ""} transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                  transitionDelay: `${index * 100 + 300}ms`,
                }}
              >
                <div className="relative w-full h-full">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-card group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <img
                      src={`/${trainer.img}`}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="bg-foreground text-background text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-card">
                      <div className="font-bold">{trainer.name}</div>
                      <div className="text-background/70">{trainer.specialty}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
