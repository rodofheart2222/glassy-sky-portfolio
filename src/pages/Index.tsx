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
import { BookOpen, Copy } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { Link } from "react-router-dom";

const Index = () => {
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const { toast } = useToast();
  const btcAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(btcAddress);
    toast({
      title: "Address copied!",
      description: "BTC address has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <Link to="/docs">
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white/10"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Docs
          </Button>
        </Link>
      </div>
      <HeroSection onStartClick={() => setShowDepositDialog(true)} />
      <ComparisonSection />

      <Dialog open={showDepositDialog} onOpenChange={setShowDepositDialog}>
        <DialogContent className="glass-dialog sm:max-w-md dialog-content">
          <DialogHeader>
            <DialogTitle className="text-white">Activate RPC Service</DialogTitle>
            <DialogDescription className="text-white/80">
              Get unlimited RPC calls for just $100
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <code className="flex-1 text-sm break-all text-white/90">{btcAddress}</code>
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;