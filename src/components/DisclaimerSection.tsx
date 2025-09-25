import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, Eye } from "lucide-react";

export const DisclaimerSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-16 h-16 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold">Important Notice</h2>
            <p className="text-lg text-muted-foreground">
              Please read carefully before investing in $DPUMP
            </p>
          </div>

          {/* Disclaimer Content */}
          <Card className="glass border-accent/30 p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed m-0">
                  <strong>Cryptocurrency investments, especially meme coins launched on platforms like Pump.fun, are extremely volatile and inherently risky.</strong> You should not invest more than you can afford to lose.
                </p>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed m-0">
                  <strong>Donald Pump Coin is a meme coin for entertainment purposes and does not guarantee any returns.</strong> Always do your own research (DYOR) before investing.
                </p>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed m-0">
                  <strong>This is a fair launch on Pump.fun, driven by community participation.</strong> There are no guarantees of profit, and the value of $DPUMP may go to zero.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Risk Warning
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
                  <li>Meme coins are speculative investments with extreme volatility</li>
                  <li>You could lose your entire investment</li>
                  <li>Past performance does not indicate future results</li>
                  <li>No utility or revenue-generating mechanism is guaranteed</li>
                  <li>Regulatory changes could affect the value or legality of the token</li>
                  <li>Technical issues with Pump.fun or Solana could impact trading</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Additional Legal */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              By participating in $DPUMP, you acknowledge that you understand these risks and are investing at your own discretion. 
              This website and its content are for informational purposes only and do not constitute financial advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};