import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Index = () => {
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
                <p>{definition}</p>
                <div className="divider" />
                <span className="footer">✨</span>
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
            {wrapWordsWithHoverCard("UNLIMITED POWER", definitions)}
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {wrapWordsWithHoverCard("Unlimited RPC Calls", definitions)}
          </h1>
          <p className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {wrapWordsWithHoverCard("Scale your applications with unlimited remote procedure calls. No throttling, no limits", definitions)}
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-lg shadow-xl shadow-primary/20 transform hover:scale-105 transition-all">
              {wrapWordsWithHoverCard("Start Building", definitions)}
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-full font-black text-lg border-2 hover:bg-primary/5 text-white border-white/20">
              {wrapWordsWithHoverCard("View Documentation", definitions)}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {wrapWordsWithHoverCard("Start Building Today", definitions)}
            </h2>
            <Button className="px-12 py-8 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-all">
              {wrapWordsWithHoverCard("Get API Access", definitions)}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
