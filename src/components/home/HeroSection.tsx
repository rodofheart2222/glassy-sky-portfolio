import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartClick: () => void;
}

export const HeroSection = ({ onStartClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text">
            Unlimited RPC
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience lightning-fast, unlimited RPC calls with our high-performance infrastructure.
          </p>
          <Button
            onClick={onStartClick}
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};