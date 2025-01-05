import { motion } from "framer-motion";
import { GetAccountInfo } from "./api-methods/GetAccountInfo";
import { SendTransaction } from "./api-methods/SendTransaction";
import { Subscribe } from "./api-methods/Subscribe";

export const APIReference = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="api-reference"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">API Reference</h2>
      <div className="space-y-8 text-white/90">
        <GetAccountInfo />
        <SendTransaction />
        <Subscribe />
      </div>
    </motion.section>
  );
};