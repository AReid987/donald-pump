import { Card } from "@/components/ui/card";
import { ArrowRight, Rocket, Users, TrendingUp, Target, Repeat } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Creation",
      description: "Donald Pump Coin is created on Pump.fun with 0 liquidity and no initial supply."
    },
    {
      number: "2", 
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Community Buys",
      description: "You buy $DPUMP directly on Pump.fun. Each buy contributes to the token's liquidity pool."
    },
    {
      number: "3",
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Price Discovery", 
      description: "As more people buy, the price increases based on demand."
    },
    {
      number: "4",
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Raydium Launch (Automatic)",
      description: "When the coin reaches a specific market cap ($15K - $60K), 100% of the LP is automatically sent to Raydium and burned."
    },
    {
      number: "5",
      icon: <Repeat className="w-8 h-8 text-success" />,
      title: "Trading Continues",
      description: "Trading then moves to Raydium, with guaranteed liquidity from the Pump.fun phase."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-cosmic">Understand the Pump:</span>
              <br />
              <span className="text-gold">How $DPUMP Works on Pump.fun</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pump.fun revolutionizes the meme coin launch. Here's the simple, genius process:
            </p>
          </div>

          {/* Steps Flow */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                {/* Step Card */}
                <Card className="glass border-primary/20 p-8 flex-1 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-pump text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-glow-primary">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        {step.icon}
                        <h3 className="text-2xl font-bold text-gold">{step.title}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 lg:rotate-0 rotate-90">
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Flow Chart */}
          <div className="mt-16 p-8 glass rounded-3xl border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-cosmic">The Pump.fun Process Flow</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
                <span className="px-4 py-2 bg-pump rounded-lg text-primary-foreground font-semibold">Buy</span>
                <ArrowRight className="text-primary" />
                <span className="px-4 py-2 bg-success rounded-lg text-success-foreground font-semibold">LP Builds</span>
                <ArrowRight className="text-primary" />
                <span className="px-4 py-2 bg-accent rounded-lg text-accent-foreground font-semibold">Market Cap Hit</span>
                <ArrowRight className="text-primary" />
                <span className="px-4 py-2 bg-gold rounded-lg text-accent-foreground font-semibold">Raydium</span>
                <ArrowRight className="text-primary" />
                <span className="px-4 py-2 bg-primary rounded-lg text-primary-foreground font-semibold">🚀 MOON!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};