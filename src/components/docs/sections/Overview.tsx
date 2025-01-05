import { motion } from "framer-motion";

export const Overview = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="overview"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Overview of RPC Endpoints</h2>
      <div className="space-y-8 text-white/90">
        
        {/* What are RPC Endpoints? */}
        <div>
          <h3 className="text-2xl font-bold mb-4">What are RPC Endpoints?</h3>
          <p className="leading-relaxed mb-4">
            <strong>Remote Procedure Call (RPC)</strong> endpoints allow clients to communicate with servers to execute predefined functions or procedures remotely. In the context of blockchain and decentralized applications, RPC endpoints facilitate interactions such as querying blockchain data, submitting transactions, and subscribing to real-time updates.
          </p>
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Key Characteristics:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stateless Communication</strong>: Each RPC call is independent, ensuring scalability.</li>
              <li><strong>Language Agnostic</strong>: RPC endpoints can be accessed using various programming languages and protocols.</li>
              <li><strong>Flexible Data Formats</strong>: Typically use JSON or binary formats for data exchange.</li>
            </ul>
          </div>
        </div>

        {/* Benefits of Unlimited RPC Access */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Benefits of Unlimited RPC Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* No Rate Limits */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-3">No Rate Limits</h4>
              <p>Perform as many RPC calls as needed without throttling, ideal for high-throughput applications.</p>
            </div>

            {/* Scalability */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-3">Scalability</h4>
              <p>Accommodate growing application demands without worrying about hitting usage caps.</p>
            </div>

            {/* Reliability */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-3">Reliability</h4>
              <p>Ensure consistent performance even under heavy load.</p>
            </div>

            {/* Comprehensive Coverage */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-3">Comprehensive Coverage</h4>
              <p>Access a wide range of RPC methods to cater to diverse application requirements.</p>
            </div>

            {/* Enhanced Security */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold mb-3">Enhanced Security</h4>
              <p>Benefit from robust authentication and security measures to protect your data and interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};