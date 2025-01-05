import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface HeroProps {
  onGetStarted: () => void;
  wrapWordsWithHoverCard: (text: string, definitions: Record<string, string>) => React.ReactNode;
  definitions: Record<string, string>;
}

const Hero = ({ onGetStarted, wrapWordsWithHoverCard, definitions }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-primary/20 text-primary border-2 border-primary/20 shadow-lg shadow-primary/20"
        >
          {wrapWordsWithHoverCard("UNLIMITED POWER", definitions)}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          {wrapWordsWithHoverCard("Unlimited RPC Calls", definitions)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {wrapWordsWithHoverCard("Scale your applications with unlimited remote procedure calls. No throttling, no limits", definitions)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <Button 
            className="group px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-lg shadow-xl shadow-primary/20 transform hover:scale-105 transition-all"
            onClick={onGetStarted}
          >
            {wrapWordsWithHoverCard("Start Building", definitions)}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronRight className="ml-2 h-6 w-6" />
            </motion.span>
          </Button>
          
          <Button 
            variant="outline" 
            className="px-8 py-6 rounded-full font-black text-lg border-2 hover:bg-primary/5 text-white border-white/20 hover:border-white/40 transition-colors"
          >
            {wrapWordsWithHoverCard("View Documentation", definitions)}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;