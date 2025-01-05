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
        <span className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border-2 border-[#8B5CF6]/20 shadow-lg shadow-[#8B5CF6]/20">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#4ADE80] blur-sm opacity-70"></div>
            </div>
            {wrapWordsWithHoverCard("UNLIMITED POWER", definitions)}
          </div>
        </span>
        <div className="glass-effect-card p-8 mb-8">
          <h1 className="text-[12rem] leading-[0.9] font-black tracking-tight flex flex-col">
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              {wrapWordsWithHoverCard("Unlimited", definitions)}
            </span>
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              {wrapWordsWithHoverCard("RPC", definitions)}
            </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              {wrapWordsWithHoverCard("Calls", definitions)}
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
          {wrapWordsWithHoverCard("Scale your applications with unlimited remote procedure calls. No throttling, no limits", definitions)}
        </p>
        <div className="flex items-center justify-center gap-6">
          <Button 
            className="px-8 py-6 border-2 border-[#8B5CF6] bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-white rounded-full font-black text-lg shadow-xl shadow-[#8B5CF6]/20 transform hover:scale-105 transition-all backdrop-blur-sm"
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