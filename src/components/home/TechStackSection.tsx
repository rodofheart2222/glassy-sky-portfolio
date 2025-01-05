import { motion } from "framer-motion";
import { Network, DollarSign, Gauge } from "lucide-react";

export const TechStackSection = () => {
  const techStack = [
    {
      icon: <Network className="w-12 h-12 text-[#F97316]" />,
      title: "MEV Detection",
      description: "Advanced mempool monitoring and analysis for detecting profitable MEV opportunities in real-time.",
      items: ["Sandwich Detection", "Arbitrage Opportunities", "Frontrunning Analysis", "Backrunning Strategies"]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#F97316]" />,
      title: "Profit Optimization",
      description: "Sophisticated algorithms to maximize MEV extraction while minimizing risks and gas costs.",
      items: ["Gas Optimization", "Profit Calculation", "Risk Assessment", "Auto-Execution"]
    },
    {
      icon: <Gauge className="w-12 h-12 text-[#F97316]" />,
      title: "High-Speed Execution",
      description: "Lightning-fast transaction execution and network monitoring for successful MEV extraction.",
      items: ["Fast Block Processing", "Quick Transaction Submission", "Network Latency Optimization", "Priority Gas Bidding"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-4xl font-black mb-12 text-center text-white">
            MEV Capabilities
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
  );
};