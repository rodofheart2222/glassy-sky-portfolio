import { motion } from "framer-motion";
import { UnderstandingErrorCodes } from "./error-handling/UnderstandingErrorCodes";
import { ImplementingRetryLogic } from "./error-handling/ImplementingRetryLogic";
import { LoggingAndMonitoring } from "./error-handling/LoggingAndMonitoring";

export const ErrorHandling = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="error-handling"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Error Handling</h2>
      <div className="space-y-8 text-white/90">
        <UnderstandingErrorCodes />
        <ImplementingRetryLogic />
        <LoggingAndMonitoring />
      </div>
    </motion.section>
  );
};