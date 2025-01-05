import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface FeaturesProps {
  wrapWordsWithHoverCard: (text: string, definitions: Record<string, string>) => React.ReactNode;
  definitions: Record<string, string>;
}

const Features = ({ wrapWordsWithHoverCard, definitions }: FeaturesProps) => {
  const features = [
    {
      title: "Unlimited Calls",
      description: "Make as many RPC calls as you need without any restrictions or throttling.",
      icon: <Star className="w-8 h-8 text-primary" />,
    },
    {
      title: "Global Infrastructure",
      description: "Low-latency RPC calls powered by our worldwide distributed network.",
      icon: <Star className="w-8 h-8 text-primary" />,
    },
    {
      title: "Real-time Performance",
      description: "Lightning-fast response times for all your RPC requests.",
      icon: <Star className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-primary/20 text-primary"
          >
            {wrapWordsWithHoverCard("FEATURES", definitions)}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            {wrapWordsWithHoverCard("Unlimited Possibilities", definitions)}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl font-extrabold text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            {wrapWordsWithHoverCard("Experience the freedom of unlimited RPC calls with our robust infrastructure.", definitions)}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 hover-scale shadow-2xl group"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-black mb-4 text-white">
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

export default Features;