import { motion } from "framer-motion";
import { CustomEndpointManagement } from "./authentication/CustomEndpointManagement";
import { RequestAuthentication } from "./authentication/RequestAuthentication";
import { SecurityBestPractices } from "./authentication/SecurityBestPractices";

export const AuthenticationAndSecurity = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="authentication-and-security"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Authentication and Security</h2>
      <div className="space-y-8 text-white/90">
        <CustomEndpointManagement />
        <RequestAuthentication />
        <SecurityBestPractices />
      </div>
    </motion.section>
  );
};