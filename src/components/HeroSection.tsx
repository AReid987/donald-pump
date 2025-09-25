import { Button } from "@/components/ui/button";
import heroImage from "@/assets/donald-pump-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Donald Pump - Pump it up to the moon!" 
                className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto float-animation"
              />
              <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-primary/20 to-accent/20 -z-10"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-cosmic">DONALD PUMP COIN:</span>
            <br />
            <span className="text-gold">THE PEOPLE'S PUMP IS HERE!</span>
            <br />
            <span className="text-sm md:text-lg lg:text-xl text-primary font-semibold">
              (Launched on Pump.fun)
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-foreground">
            <span className="text-success">No Presale.</span>{" "}
            <span className="text-primary">No Taxes.</span>{" "}
            <span className="text-accent">No Team Allocation.</span>
            <br />
            <span className="text-cosmic">Just Pure Community Pump Power!</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            From the alternate reality where the market follows his every tweet, Donald Pump brings you the fairest meme coin launch. 
            It's time to <span className="text-gold font-bold">make your wallet great again</span>, the Pump.fun way!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="pump" 
              size="xl"
              className="text-lg px-12 py-6 h-auto glow-pulse"
            >
              🚀 Launch on Pump.fun Now!
            </Button>
            <Button 
              variant="golden" 
              size="xl"
              className="text-lg px-12 py-6 h-auto"
            >
              💪 Join the Pump Army!
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 text-6xl animate-spin-slow">🚀</div>
          <div className="absolute top-32 right-20 text-4xl float-animation">💎</div>
          <div className="absolute bottom-20 left-20 text-5xl float-animation">🌙</div>
          <div className="absolute bottom-32 right-10 text-3xl animate-bounce">⭐</div>
        </div>
      </div>
    </section>
  );
};