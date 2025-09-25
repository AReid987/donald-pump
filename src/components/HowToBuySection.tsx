import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, Download, DollarSign, MousePointer } from "lucide-react";

export const HowToBuySection = () => {
  const steps = [
    {
      number: "1",
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Get a Solana Wallet",
      description: "Download Phantom, Solflare, or Trust Wallet (ensure it supports Solana)."
    },
    {
      number: "2", 
      icon: <DollarSign className="w-8 h-8 text-success" />,
      title: "Fund Wallet",
      description: "Buy SOL (Solana) and send it to your wallet."
    },
    {
      number: "3",
      icon: <MousePointer className="w-8 h-8 text-accent" />,
      title: "Go to Pump.fun",
      description: "Click our official link to access $DPUMP on Pump.fun"
    },
    {
      number: "4",
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: "Buy $DPUMP",
      description: "Use your SOL to buy $DPUMP. Every purchase contributes to the liquidity and drives us closer to Raydium!"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-cosmic">It's Simple. It's Fair.</span>
              <br />
              <span className="text-gold">It's Time to Buy $DPUMP!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Getting your hands on $DPUMP is incredibly easy thanks to Pump.fun. Follow these steps:
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="glass border-primary/20 p-6 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-pump text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow-primary">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>

          {/* Wallet Icons */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 text-cosmic">Supported Wallets</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Phantom</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                  <Wallet className="w-8 h-8 text-success" />
                </div>
                <span className="text-sm text-muted-foreground">Solflare</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                  <Wallet className="w-8 h-8 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Trust Wallet</span>
              </div>
            </div>
          </div>

          {/* Direct Link Section */}
          <Card className="glass border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <h3 className="text-2xl font-bold mb-4 text-gold">🔗 Official Pump.fun Link</h3>
            <p className="text-muted-foreground mb-6">
              Click the button below to go directly to $DPUMP on Pump.fun and start buying!
            </p>
            
            <div className="bg-secondary/20 rounded-lg p-4 mb-6 font-mono text-sm break-all text-primary">
              [PUMP.FUN LINK WILL BE INSERTED HERE]
            </div>

            <Button 
              variant="pump" 
              size="xl"
              className="text-lg px-12 py-6 h-auto glow-pulse"
            >
              🚀 BUY $DPUMP ON PUMP.FUN NOW!
            </Button>
          </Card>

          {/* Warning */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              ⚠️ Always verify you're on the official Pump.fun website. Never share your private keys or seed phrases!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};