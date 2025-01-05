import { motion } from "framer-motion";
import { BatchRequests } from "./advanced-usage/BatchRequests";
import { StreamingData } from "./advanced-usage/StreamingData";

export const AdvancedUsage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="advanced-usage"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Advanced Usage</h2>
      <div className="space-y-8 text-white/90">
        <BatchRequests />
        <StreamingData />
      </div>
    </motion.section>
  );
};