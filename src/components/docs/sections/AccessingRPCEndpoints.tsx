import { motion } from "framer-motion";

export const AccessingRPCEndpoints = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="accessing-rpc-endpoints"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Accessing the RPC Endpoints</h2>
      <div className="space-y-8 text-white/90">
        
        {/* Endpoint URLs */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Endpoint URLs</h3>
          <p className="leading-relaxed mb-4">
            Our RPC endpoints are organized based on different environments to cater to various stages of development and deployment:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Mainnet</strong>: <code className="bg-black/30 px-2 py-1 rounded">https://rpc.mainnet.example.com</code></li>
            <li><strong>Testnet</strong>: <code className="bg-black/30 px-2 py-1 rounded">https://rpc.testnet.example.com</code></li>
            <li><strong>Devnet</strong>: <code className="bg-black/30 px-2 py-1 rounded">https://rpc.devnet.example.com</code></li>
            <li><strong>Localnet</strong>: <code className="bg-black/30 px-2 py-1 rounded">http://localhost:8899</code></li>
          </ul>
          <p className="mt-4">
            <strong>Note</strong>: Replace <code className="bg-black/30 px-2 py-1 rounded">example.com</code> with your actual domain if different.
          </p>
        </div>

        {/* Environment Clusters */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Environment Clusters</h3>
          <p className="leading-relaxed mb-4">
            Understanding the different clusters is crucial for selecting the appropriate endpoint:
          </p>
          <div className="space-y-4">
            
            {/* Mainnet */}
            <div>
              <h4 className="text-xl font-bold mb-2">Mainnet</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose</strong>: Live production environment.</li>
                <li><strong>Use Cases</strong>: Deploying applications for end-users, handling real transactions.</li>
                <li><strong>Stability</strong>: High reliability and security standards.</li>
              </ul>
            </div>

            {/* Testnet */}
            <div>
              <h4 className="text-xl font-bold mb-2">Testnet</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose</strong>: Testing environment with features mirroring mainnet.</li>
                <li><strong>Use Cases</strong>: Testing transactions, deploying smart contracts before mainnet deployment.</li>
                <li><strong>Stability</strong>: Stable but may undergo updates and changes.</li>
              </ul>
            </div>

            {/* Devnet */}
            <div>
              <h4 className="text-xl font-bold mb-2">Devnet</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose</strong>: Development-focused environment.</li>
                <li><strong>Use Cases</strong>: Early-stage development, experimenting with new features.</li>
                <li><strong>Stability</strong>: Less stable, frequent updates.</li>
              </ul>
            </div>

            {/* Localnet */}
            <div>
              <h4 className="text-xl font-bold mb-2">Localnet</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose</strong>: Local development environment.</li>
                <li><strong>Use Cases</strong>: Running a local node for development and testing without external dependencies.</li>
                <li><strong>Stability</strong>: Fully controlled by the developer.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Endpoint Selection Best Practices */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Endpoint Selection Best Practices</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Development Phase</strong>: Use <strong>Localnet</strong> or <strong>Devnet</strong> for initial development and testing.</li>
            <li><strong>Testing Phase</strong>: Transition to <strong>Testnet</strong> to simulate real-world scenarios without affecting the mainnet.</li>
            <li><strong>Production Deployment</strong>: Use <strong>Mainnet</strong> for live applications serving end-users.</li>
            <li><strong>Environment Consistency</strong>: Maintain consistency across environments to minimize deployment issues.</li>
            <li><strong>Monitoring and Switching</strong>: Implement monitoring to detect issues and switch endpoints if necessary.</li>
          </ol>
        </div>

      </div>
    </motion.section>
  );
};