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
import { Copy, Server, Zap, Clock, Code, Rocket, Database } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { motion } from "framer-motion";
import { RpcComparison } from "@/components/RpcComparison";

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

  const features = [
    {
      icon: <Server className="w-12 h-12 text-[#F97316]" />,
      title: "High-Performance Infrastructure",
      description: "Enterprise-grade servers with 99.99% uptime guarantee and global distribution for minimal latency.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#F97316]" />,
      title: "Lightning Fast Response",
      description: "Average response time of 20ms, ensuring your applications run smoothly and efficiently.",
    },
    {
      icon: <Clock className="w-12 h-12 text-[#F97316]" />,
      title: "24/7 Availability",
      description: "Round-the-clock monitoring and support to ensure your applications never miss a beat.",
    }
  ];

  const techStack = [
    {
      icon: <Code className="w-12 h-12 text-[#F97316]" />,
      title: "Modern Tech Stack",
      description: "Built on React, Vite, TypeScript, and Tailwind CSS for maximum performance and developer experience.",
      items: ["React for UI", "Vite for Build", "TypeScript for Safety", "Tailwind for Styling"]
    },
    {
      icon: <Database className="w-12 h-12 text-[#F97316]" />,
      title: "Backend Integration",
      description: "Native Supabase integration for authentication, database management, and real-time features.",
      items: ["Authentication", "Database Management", "Real-time Updates", "File Storage"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-[#F97316]" />,
      title: "Deployment Ready",
      description: "One-click deployment and GitHub integration for seamless development workflow.",
      items: ["One-click Deploy", "GitHub Export", "Version Control", "Instant Preview"]
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection onStartClick={() => setShowDepositDialog(true)} />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-4xl font-black mb-12 text-center text-white">
              Why Choose Our RPC Service?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover-scale"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-4xl font-black mb-12 text-center text-white">
              Powerful Technology Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover:bg-white/5 transition-colors transform hover:scale-105 duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-white/5 p-4 rounded-full">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{tech.title}</h3>
                    <p className="text-white/80 mb-4">{tech.description}</p>
                    <ul className="space-y-2 w-full">
                      {tech.items.map((item, idx) => (
                        <li key={idx} className="text-white/70 flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEV Bot Operations Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6 text-white">
                  MEV Bot Operations
                </h2>
                <p className="text-white/80 mb-6 text-lg">
                  Maximize your trading advantage with our high-performance MEV bot infrastructure. Monitor mempool transactions and execute profitable arbitrage opportunities in real-time.
                </p>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span>Real-time mempool monitoring for arbitrage opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span>Sandwich trading and frontrunning detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span>Automated profit optimization strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span>Custom gas optimization for higher success rates</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <RpcComparison />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ComparisonSection />

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
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;