import { motion } from "framer-motion";
import { Introduction } from "./sections/Introduction";
import { Overview } from "./sections/Overview";

export const DocsContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <Introduction />
      <Overview />
      {/* Additional sections will be added here */}
    </motion.div>
  );
};
