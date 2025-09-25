import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import coinImage from "@/assets/donald-pump-coin.png";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const advantages = [
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: "Fair Launch",
      description: "Every token is bought, no team pre-mine."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Liquidity", 
      description: "Every purchase adds to the coin's liquidity, making it instantly tradable."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Zero Taxes",
      description: "Keep 100% of your gains, no buy or sell taxes."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-success" />,
      title: "Automatic Raydium Listing",
      description: "Once market cap targets are hit, $DPUMP automatically moves to Raydium!"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gold">Why $DPUMP is Your Next</span>
              <br />
              <span className="text-cosmic">Tremendous Investment!</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Coin Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={coinImage} 
                  alt="Donald Pump Coin - The Meme MOGUL" 
                  className="w-full max-w-md h-auto float-animation"
                />
                <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-accent/30 to-primary/30 -z-10"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <p className="text-lg mb-6 leading-relaxed">
                  Donald Pump Coin ($DPUMP) is a grassroots movement, launched for the people, by the people, 
                  directly on <span className="text-primary font-bold">Pump.fun!</span> This isn't just a meme coin; 
                  it's a statement: true decentralization and community-driven success.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-success font-bold">No VC funds, no insider allocations, no unfair advantage.</span> 
                  Just pure, unadulterated pump action. Every buy contributes directly to the liquidity, 
                  pushing $DPUMP closer to going live on Raydium and beyond!
                </p>

                <p className="text-lg leading-relaxed">
                  We're building the strongest, most energetic community in crypto. Forget weak hands; 
                  we're all about <span className="text-gold font-bold">DIAMOND HANDS</span> and going for the 
                  <span className="text-cosmic font-bold"> best, most tremendous</span> returns the market has ever seen!
                </p>
              </div>
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="glass border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};