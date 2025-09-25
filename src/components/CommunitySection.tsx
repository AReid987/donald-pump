import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Twitter, Users, ExternalLink } from "lucide-react";

export const CommunitySection = () => {
  const socialChannels = [
    {
      name: "Telegram",
      icon: <MessageCircle className="w-8 h-8" />,
      description: "Join our main community hub for real-time updates and pump discussions!",
      buttonText: "Join Telegram",
      variant: "pump" as const,
      badge: "CRITICAL FOR HYPE!"
    },
    {
      name: "Twitter", 
      icon: <Twitter className="w-8 h-8" />,
      description: "Follow for announcements, memes, and market updates!",
      buttonText: "Follow Twitter",
      variant: "cosmic" as const,
      badge: "CRITICAL FOR NEWS!"
    },
    {
      name: "Discord",
      icon: <Users className="w-8 h-8" />,
      description: "Connect with fellow pump army members in our community server!",
      buttonText: "Join Discord", 
      variant: "golden" as const,
      badge: "COMMUNITY CHAT"
    },
    {
      name: "Pump.fun",
      icon: <ExternalLink className="w-8 h-8" />,
      description: "Trade $DPUMP directly on the platform where it all started!",
      buttonText: "Trade Now",
      variant: "neon" as const,
      badge: "OFFICIAL TRADING"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-cosmic">Don't Be a Loser!</span>
              <br />
              <span className="text-gold">Join the Pump Army!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The strength of Donald Pump Coin is our incredible, loyal community. Get involved, spread the word, and let's make history!
            </p>
          </div>

          {/* Social Channels Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {socialChannels.map((channel, index) => (
              <Card key={index} className="glass border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                <div className="text-center">
                  {/* Badge */}
                  <div className="inline-block bg-success/20 text-success px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {channel.badge}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 text-primary">
                    {channel.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gold">{channel.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{channel.description}</p>

                  {/* Button */}
                  <Button 
                    variant={channel.variant}
                    size="lg"
                    className="w-full"
                  >
                    {channel.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Community Stats */}
          <Card className="glass border-primary/20 p-8 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <h3 className="text-3xl font-bold mb-8 text-cosmic">Join the Growing Pump Army!</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">💎</div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Diamond Hands</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-success mb-2">🚀</div>
                <div className="text-2xl font-bold text-success">50K+</div>
                <div className="text-sm text-muted-foreground">Telegram Members</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">🐦</div>
                <div className="text-2xl font-bold text-accent">25K+</div>
                <div className="text-sm text-muted-foreground">Twitter Followers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">📈</div>
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Tremendous Energy</div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold mb-4 text-gold">Ready to Make Crypto Great Again?</h4>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait for others to pump it up. Be part of the movement that's taking $DPUMP to the moon!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="pump" size="xl" className="text-lg px-8 py-4 h-auto">
                🚀 Join Telegram Now!
              </Button>
              <Button variant="golden" size="xl" className="text-lg px-8 py-4 h-auto">
                🐦 Follow on Twitter!
              </Button>
            </div>
          </div>

          {/* Pump Army Visual */}
          <div className="mt-16 text-center">
            <div className="text-6xl mb-4">💪🦍💪🦍💪</div>
            <p className="text-xl text-cosmic font-bold">TOGETHER WE PUMP STRONGER!</p>
          </div>
        </div>
      </div>
    </section>
  );
};