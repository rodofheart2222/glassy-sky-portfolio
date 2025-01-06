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
          <div className="space-y-4">
            <motion.div 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="leading-relaxed">
                Remote Procedure Call (RPC) endpoints allow clients to communicate with servers to execute predefined functions or procedures remotely.
              </p>
            </motion.div>
            <motion.div 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="leading-relaxed">
                In the context of blockchain and decentralized applications, RPC endpoints facilitate interactions such as querying blockchain data, submitting transactions, and subscribing to real-time updates.
              </p>
            </motion.div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg mt-4">
            <h4 className="text-xl font-bold mb-3">Key Characteristics:</h4>
            <div className="space-y-4">
              <motion.div 
                className="glass-card p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p><strong>Stateless Communication</strong>: Each RPC call is independent, ensuring scalability.</p>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p><strong>Language Agnostic</strong>: RPC endpoints can be accessed using various programming languages and protocols.</p>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p><strong>Flexible Data Formats</strong>: Typically use JSON or binary formats for data exchange.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits of Unlimited RPC Access */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Benefits of Unlimited RPC Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* No Rate Limits */}
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-3">No Rate Limits</h4>
              <p>Perform as many RPC calls as needed without throttling, ideal for high-throughput applications.</p>
            </motion.div>

            {/* Scalability */}
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-3">Scalability</h4>
              <p>Accommodate growing application demands without worrying about hitting usage caps.</p>
            </motion.div>

            {/* Reliability */}
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-3">Reliability</h4>
              <p>Ensure consistent performance even under heavy load.</p>
            </motion.div>

            {/* Comprehensive Coverage */}
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-3">Comprehensive Coverage</h4>
              <p>Access a wide range of RPC methods to cater to diverse application requirements.</p>
            </motion.div>

            {/* Enhanced Security */}
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-3">Enhanced Security</h4>
              <p>Benefit from robust authentication and security measures to protect your data and interactions.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};