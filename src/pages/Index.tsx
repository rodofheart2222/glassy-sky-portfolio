import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Hero } from "@/components/index/Hero";
import { Features } from "@/components/index/Features";

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
      <Hero setShowDepositDialog={setShowDepositDialog} />
      <Features />

      <Dialog open={showDepositDialog} onOpenChange={setShowDepositDialog}>
        <DialogContent className="glass-card sm:max-w-md border-0 bg-black/30">
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