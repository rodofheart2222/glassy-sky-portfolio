import { motion } from "framer-motion";
import { Overview } from "./sections/Overview";
import { GettingStarted } from "./sections/GettingStarted";
import { AccessingRPCEndpoints } from "./sections/AccessingRPCEndpoints";
import { AuthenticationAndSecurity } from "./sections/AuthenticationAndSecurity";
import { MakingRPCRequests } from "./sections/MakingRPCRequests";
import { APIReference } from "./sections/APIReference";

export const DocsContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 p-6 glass-card rounded-xl backdrop-blur-xl bg-black/10 w-full max-w-[95vw] lg:max-w-[calc(100vw-20rem)] mx-auto min-h-screen"
    >
      <Overview />
      <GettingStarted />
      <AccessingRPCEndpoints />
      <AuthenticationAndSecurity />
      <MakingRPCRequests />
      <APIReference />
    </motion.div>
  );
};