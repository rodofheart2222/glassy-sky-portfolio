import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";

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

  const wrapWordsWithHoverCard = (text: string, definitions: Record<string, string>) => {
    return text.split(' ').map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/, '');
      const definition = definitions[cleanWord.toLowerCase()] || `This is the word "${cleanWord}"`;
      return (
        <span key={index} className="inline-block mx-1">
          <HoverCard>
            <HoverCardTrigger className="hover:text-primary/80 transition-colors">
              {word}
            </HoverCardTrigger>
            <HoverCardContent className="glass-card word-hover-card">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-white/90">{definition}</p>
                <div className="h-px bg-white/10" />
                <span className="text-xs text-white/60 italic">Hover for more info</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </span>
      );
    });
  };

  const definitions = {
    unlimited: "No restrictions or limits on usage or capacity",
    power: "Computational capability and processing strength",
    remote: "Operations performed from a distance",
    procedure: "A set of instructions or method to perform a task",
    calls: "Requests made to execute specific functions",
    scale: "Ability to grow and handle increased load",
    applications: "Software programs designed for specific purposes",
    throttling: "Intentional slowing down of processing speed",
    limits: "Restrictions on usage or capacity",
    no: "Absence of restrictions",
    rpc: "Remote Procedure Call - a protocol for requesting a service",
    your: "Belonging to or associated with the user",
    with: "Accompanied by or using",
    the: "Used to point to a specific item",
    documentation: "Written materials that explain how to use a product",
    start: "Begin a process or action",
    building: "Creating or developing something",
    today: "On the present day",
    features: "Special characteristics or capabilities",
    possibilities: "Potential outcomes or capabilities",
    experience: "Knowledge or skill gained through practice",
    freedom: "State of being unrestricted",
    infrastructure: "Basic framework and systems",
    robust: "Strong and effective",
    global: "Worldwide or universal",
    performance: "How well something functions",
    real: "Actually existing or happening",
    time: "Continuous progress of existence",
    lightning: "Extremely fast",
    fast: "Moving or operating quickly",
    api: "Application Programming Interface",
    access: "Ability to use or reach something",
  };

  return (
    <div className="min-h-screen">
      <Hero 
        onGetStarted={() => setShowDepositDialog(true)}
        wrapWordsWithHoverCard={wrapWordsWithHoverCard}
        definitions={definitions}
      />
      <Features 
        wrapWordsWithHoverCard={wrapWordsWithHoverCard}
        definitions={definitions}
      />
      <CallToAction 
        wrapWordsWithHoverCard={wrapWordsWithHoverCard}
        definitions={definitions}
      />

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
