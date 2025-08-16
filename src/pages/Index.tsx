import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/home/HeroSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { MevSection } from "@/components/home/MevSection";

const Index = () => {
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const { toast } = useToast();
  const address = "83tf89CSaDyKfApAM3QbULiLLV3rvEdd5mem8XDiqUnk";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied!",
      description: "Address has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onStartClick={() => setShowDepositDialog(true)} />
      <FeatureSection />
      <MevSection />
      <ComparisonSection />

      <div className="fixed bottom-4 right-4">
        <Link to="/ping-pong">
          <Button variant="secondary">Play Ping Pong</Button>
        </Link>
      </div>

      <Dialog open={showDepositDialog} onOpenChange={setShowDepositDialog}>
        <DialogContent className="glass-dialog sm:max-w-md dialog-content">
          <DialogHeader>
            <DialogTitle className="text-white">Activate RPC Service</DialogTitle>
            <DialogDescription className="text-white/80">
              Get unlimited RPC calls for just $100
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-48 bg-white p-2 rounded-lg">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${address}`} 
                alt="QR Code"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-full">
              <code className="flex-1 text-sm break-all text-white/90">{address}</code>
              <Button
                type="button"
                variant="secondary"
                className="px-3 hover:bg-white/10"
                onClick={handleCopyAddress}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <DialogDescription className="text-center text-sm text-white/60">
              Your RPC service will be activated automatically after payment is confirmed.
            </DialogDescription>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <span>In case of any problem, reach out to us on</span>
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-white/90 text-xs px-3 py-1 h-7"
                onClick={() => window.open('https://discord.gg/NNzKMdGn', '_blank')}
              >
                Discord
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;