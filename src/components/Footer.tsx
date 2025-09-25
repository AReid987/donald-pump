import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Users, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">$DPUMP</h3>
              <p className="text-muted-foreground mb-4">
                The People's Pump - Making crypto great again, one pump at a time!
              </p>
              <div className="text-4xl">🚀💎🌙</div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-cosmic mb-4">Quick Links</h4>
              <div className="space-y-2">
                <div><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About $DPUMP</a></div>
                <div><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></div>
                <div><a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a></div>
                <div><a href="#how-to-buy" className="text-muted-foreground hover:text-primary transition-colors">How to Buy</a></div>
                <div><a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Community</a></div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-cosmic mb-4">Join the Pump Army</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Discord
                </Button>
                <Button variant="pump" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Pump.fun
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                © {currentYear} Donald Pump Coin ($DPUMP). All rights reserved. 
                <span className="text-gold font-semibold ml-2">Make Crypto Great Again!</span>
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <a href="#disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </a>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-6 pt-6 border-t border-primary/10">
              <p className="text-sm text-muted-foreground">
                🚀 <span className="text-cosmic font-semibold">Remember: Only invest what you can afford to lose!</span> 🚀
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                This is a community-driven meme coin. DYOR and invest responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};