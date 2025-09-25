import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, Globe, Trophy } from "lucide-react";

export const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Pump.fun Domination & Raydium Launch",
      status: "active",
      tasks: [
        "$DPUMP Creation on Pump.fun",
        "Aggressive Community Building & Hype Generation", 
        "Hit Market Cap Target & Automatic Raydium Listing!",
        "LP Burned on Raydium"
      ]
    },
    {
      phase: "Phase 2", 
      icon: <Target className="w-12 h-12 text-success" />,
      title: "Growth & Expansion",
      status: "upcoming",
      tasks: [
        "Post-Raydium Marketing Blitz",
        "Community Contests & Airdrops (for early Pump.fun buyers)",
        "Listing on CoinGecko/CoinMarketCap (Apply after Raydium)",
        "Strategic Influencer Partnerships"
      ]
    },
    {
      phase: "Phase 3",
      icon: <Globe className="w-12 h-12 text-accent" />,
      title: "The Next Level",
      status: "future",
      tasks: [
        "CEX Listings (Tier 2/3)",
        "Development of Future Utility (Staking, NFTs, etc.)",
        'Global "Make Crypto Great Again" Campaign',
        "Community Governance Implementation"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success";
      case "upcoming": return "bg-primary";
      case "future": return "bg-accent";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "🚀 ACTIVE";
      case "upcoming": return "⏳ NEXT";
      case "future": return "🌟 FUTURE";
      default: return status;
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gold">The Path to the Moon:</span>
              <br />
              <span className="text-cosmic">Our Tremendous Vision Beyond Pump.fun</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our initial goal is clear: dominate Pump.fun and blast off to Raydium! After that, the real work begins:
            </p>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className={`glass border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary ${phase.status === 'active' ? 'ring-2 ring-success/50' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Phase Icon & Badge */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="inline-flex flex-col items-center">
                      <div className="p-4 rounded-full bg-secondary/20 mb-4">
                        {phase.icon}
                      </div>
                      <Badge className={`${getStatusColor(phase.status)} text-white font-bold px-4 py-2`}>
                        {getStatusText(phase.status)}
                      </Badge>
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{phase.phase}</h3>
                        <h4 className="text-2xl lg:text-3xl font-bold text-gold mb-4">{phase.title}</h4>
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Rocket to Moon Visual */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 text-6xl">
              <span>🌍</span>
              <span className="text-2xl text-primary">→</span>
              <span className="float-animation">🚀</span>
              <span className="text-2xl text-primary">→</span>
              <span>🌙</span>
            </div>
            <p className="text-xl text-cosmic font-bold mt-4">TO THE MOON AND BEYOND!</p>
          </div>
        </div>
      </div>
    </section>
  );
};