import { motion } from "framer-motion";
import { HTTPPostRequests } from "./rpc-sections/HTTPPostRequests";
import { WebSocketConnections } from "./rpc-sections/WebSocketConnections";
import { SupportedRPCMethods } from "./rpc-sections/SupportedRPCMethods";

export const MakingRPCRequests = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="making-rpc-requests"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Making RPC Requests</h2>
      <div className="space-y-8 text-white/90">
        <HTTPPostRequests />
        <WebSocketConnections />
        <SupportedRPCMethods />
      </div>
    </motion.section>
  );
};