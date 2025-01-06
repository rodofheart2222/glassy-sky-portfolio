import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { RpcComparison } from "@/components/RpcComparison";

const mevFeatures = [
  "Real-time mempool monitoring for arbitrage opportunities",
  "Sandwich trading and frontrunning detection",
  "Automated profit optimization strategies",
  "Custom gas optimization for higher success rates"
];

export const MevSection = () => {
  return (
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
              <GlassCard className="mb-6">
                <div className="space-y-2">
                  <GlassCard>
                    <p className="text-white/80 text-lg">
                      Maximize your trading advantage with our high-performance MEV bot infrastructure.
                    </p>
                  </GlassCard>
                  <GlassCard>
                    <p className="text-white/80 text-lg">
                      Monitor mempool transactions and execute profitable arbitrage opportunities in real-time.
                    </p>
                  </GlassCard>
                </div>
              </GlassCard>
              <ul className="space-y-4">
                {mevFeatures.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                      <span className="text-white/80">{item}</span>
                    </GlassCard>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <RpcComparison />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};