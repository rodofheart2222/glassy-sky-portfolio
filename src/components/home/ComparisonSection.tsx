import { motion } from "framer-motion";
import { RpcComparison } from "@/components/RpcComparison";

export const ComparisonSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-4xl font-black mb-12 text-center text-white">
            Performance Comparison
          </h2>
          
          <RpcComparison />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 border-[#F97316] border-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Our RPC</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span>Unlimited requests per second</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span>20ms average response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span>99.99% uptime guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span>No rate limiting</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-6 border-white/20 border"
            >
              <h3 className="text-2xl font-bold mb-4 text-white/80">Other Providers</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span>Limited to 100 requests/second</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span>100ms+ average response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span>99.9% uptime</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span>Strict rate limiting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};