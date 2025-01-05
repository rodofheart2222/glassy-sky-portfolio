import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { QRCodeSVG } from "qrcode.react";

const Index = () => {
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const { toast } = useToast();
  const solanaAddress = "7eDz3qZuGC6hqQT7zXrS81BgBAGDpKHJtGQddwvs9wuc";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(solanaAddress);
    toast({
      title: "Address copied!",
      description: "Solana address has been copied to clipboard",
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <span className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-primary/20 text-primary border-2 border-primary/20 shadow-lg shadow-primary/20">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#4ADE80] blur-sm opacity-70"></div>
              </div>
              {wrapWordsWithHoverCard("UNLIMITED POWER", definitions)}
            </div>
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {wrapWordsWithHoverCard("Unlimited RPC Calls", definitions)}
          </h1>
          <p className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {wrapWordsWithHoverCard("Scale your applications with unlimited remote procedure calls. No throttling, no limits", definitions)}
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button 
              className="px-8 py-6 border-2 border-[#F97316] bg-[#F97316]/10 hover:bg-[#F97316]/20 text-white rounded-full font-black text-lg shadow-xl shadow-[#F97316]/20 transform hover:scale-105 transition-all backdrop-blur-sm"
              onClick={() => setShowDepositDialog(true)}
            >
              Start
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </section>

      <Dialog open={showDepositDialog} onOpenChange={setShowDepositDialog}>
        <DialogContent className="glass-dialog sm:max-w-md dialog-content">
          <DialogHeader>
            <DialogTitle className="text-white">Activate RPC Service</DialogTitle>
            <DialogDescription className="text-white/80">
              Get unlimited RPC calls for just 1 SOL
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <QRCodeSVG 
                value={`solana:${solanaAddress}?amount=1`}
                size={200}
                level="H"
              />
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-full">
              <code className="flex-1 text-sm break-all text-white/90">{solanaAddress}</code>
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
