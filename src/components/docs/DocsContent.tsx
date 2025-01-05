import { motion } from "framer-motion";

export const DocsContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Introduction */}
      <section id="introduction" className="glass-card p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-white">Introduction</h2>
        <p className="text-lg text-white/90 leading-relaxed">
          This documentation is meticulously crafted to guide you through every aspect of utilizing our RPC services effectively. Whether you're a seasoned developer or just starting, you'll find valuable insights and instructions to help you integrate our RPC endpoints seamlessly into your projects.
        </p>
      </section>

      {/* Overview */}
      <section id="overview" className="glass-card p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-white">Overview of RPC Endpoints</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">What are RPC Endpoints?</h3>
            <p className="text-white/90">
              Remote Procedure Call (RPC) endpoints allow clients to communicate with servers to execute predefined functions or procedures remotely. In the context of blockchain and decentralized applications, RPC endpoints facilitate interactions such as querying blockchain data, submitting transactions, and subscribing to real-time updates.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Benefits of Unlimited RPC Access</h3>
            <ul className="list-disc pl-6 space-y-3 text-white/90">
              <li>No Rate Limits: Perform as many RPC calls as needed without throttling</li>
              <li>Scalability: Accommodate growing application demands</li>
              <li>Reliability: Ensure consistent performance under heavy load</li>
              <li>Comprehensive Coverage: Access a wide range of RPC methods</li>
              <li>Enhanced Security: Benefit from robust authentication measures</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Continue with other sections following the same pattern */}
      {/* ... Additional sections would be added here following the same structure */}
    </motion.div>
  );
};