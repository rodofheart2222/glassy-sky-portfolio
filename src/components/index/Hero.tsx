import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { definitions } from "./definitions";
import { wrapWordsWithHoverCard } from "./utils";

export const Hero = ({ setShowDepositDialog }: { setShowDepositDialog: (show: boolean) => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <span className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-[#9b87f5]/20 text-[#9b87f5] border-2 border-[#9b87f5]/20 shadow-lg shadow-[#9b87f5]/20 hover:shadow-[#9b87f5]/30 transition-shadow">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#4ADE80] blur-sm opacity-70"></div>
            </div>
            <span className="glow-text">{wrapWordsWithHoverCard("UNLIMITED POWER", definitions)}</span>
          </div>
        </span>
        <div className="glass-effect-card p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <h1 className="text-[12rem] leading-[0.9] font-black tracking-tight flex flex-col">
            <span className="purple-gradient-text glow-text">
              {wrapWordsWithHoverCard("Unlimited", definitions)}
            </span>
            <span className="text-white glow-text drop-shadow-[0_0_30px_rgba(155,135,245,0.5)]">
              {wrapWordsWithHoverCard("RPC", definitions)}
            </span>
            <span className="purple-gradient-text glow-text">
              {wrapWordsWithHoverCard("Calls", definitions)}
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed glow-text">
          {wrapWordsWithHoverCard("Scale your applications with unlimited remote procedure calls. No throttling, no limits", definitions)}
        </p>
        <div className="flex items-center justify-center gap-6">
          <Button 
            className="px-8 py-6 border-2 border-[#9b87f5] bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-white rounded-full font-black text-lg shadow-xl shadow-[#9b87f5]/20 hover:shadow-[#9b87f5]/30 transform hover:scale-105 transition-all backdrop-blur-sm"
            onClick={() => setShowDepositDialog(true)}
          >
            Start
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};