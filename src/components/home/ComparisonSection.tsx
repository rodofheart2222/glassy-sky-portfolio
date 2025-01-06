import { motion } from "framer-motion";

export const ComparisonSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card glass-card-hover p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card glass-card-hover p-6 border-[#F97316] border-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Our RPC</h3>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card glass-card-hover p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span className="text-white">Unlimited requests per second</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card glass-card-hover p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span className="text-white">20ms average response time</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card glass-card-hover p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span className="text-white">99.99% uptime guarantee</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card glass-card-hover p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    <span className="text-white">No rate limiting</span>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-6 border-white/20 border"
            >
              <h3 className="text-2xl font-bold mb-4 text-white/80">Other Providers</h3>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span className="text-white/80">Limited to 100 requests/second</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span className="text-white/80">100ms+ average response time</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span className="text-white/80">99.9% uptime</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-4 hover-scale"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span className="text-white/80">Strict rate limiting</span>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
