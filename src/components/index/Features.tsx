import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { wrapWordsWithHoverCard } from "./utils";
import { definitions } from "./definitions";

const features = [
  {
    title: "Unlimited Calls",
    description: "Make as many RPC calls as you need without any restrictions or throttling.",
    icon: <Star className="w-8 h-8 text-[#8B5CF6]" />,
  },
  {
    title: "Global Infrastructure",
    description: "Low-latency RPC calls powered by our worldwide distributed network.",
    icon: <Star className="w-8 h-8 text-[#8B5CF6]" />,
  },
  {
    title: "Real-time Performance",
    description: "Lightning-fast response times for all your RPC requests.",
    icon: <Star className="w-8 h-8 text-[#8B5CF6]" />,
  },
];

export const Features = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6]">
            {wrapWordsWithHoverCard("FEATURES", definitions)}
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            {wrapWordsWithHoverCard("Unlimited Possibilities", definitions)}
          </h2>
          <p className="text-xl font-extrabold text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            {wrapWordsWithHoverCard("Experience the freedom of unlimited RPC calls with our robust infrastructure.", definitions)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover-scale shadow-2xl hover:shadow-[#8B5CF6]/10"
            >
              <div className="w-16 h-16 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                {wrapWordsWithHoverCard(feature.title, definitions)}
              </h3>
              <p className="text-lg font-bold text-white/80">
                {wrapWordsWithHoverCard(feature.description, definitions)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};