import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { definitions } from "./definitions";

interface HeroSectionProps {
  onStartClick: () => void;
}

const wrapWordsWithHoverCard = (text: string) => {
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

export const HeroSection = ({ onStartClick }: HeroSectionProps) => {
  return (
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
            {wrapWordsWithHoverCard("UNLIMITED POWER")}
          </div>
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {wrapWordsWithHoverCard("Unlimited RPC Calls")}
        </h1>
        <p className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {wrapWordsWithHoverCard("Scale your applications with unlimited remote procedure calls. No throttling, no limits")}
        </p>
        <div className="flex items-center justify-center gap-6">
          <Button 
            className="px-8 py-6 border-2 border-[#F97316] bg-[#F97316]/10 hover:bg-[#F97316]/20 text-white rounded-full font-black text-lg shadow-xl shadow-[#F97316]/20 transform hover:scale-105 transition-all backdrop-blur-sm"
            onClick={onStartClick}
          >
            Start
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};