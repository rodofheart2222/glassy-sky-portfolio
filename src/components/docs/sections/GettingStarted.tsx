import { motion } from "framer-motion";
import { CodeBlock } from "../CodeBlock";

export const GettingStarted = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="getting-started"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Getting Started</h2>
      <div className="space-y-8 text-white/90">
        
        {/* Prerequisites */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Prerequisites</h3>
          <motion.div 
            className="glass-card p-4 rounded-lg mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="leading-relaxed">
              Before diving into using the RPC endpoints, ensure you have the following:
            </p>
          </motion.div>
          <ul className="list-disc pl-6 space-y-4">
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <strong>Basic Understanding of RPC</strong>: Familiarity with RPC concepts and JSON-RPC protocol.
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <strong>Development Environment</strong>: A setup that allows making HTTP or WebSocket requests (e.g., Node.js, Python, cURL).
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <strong>Access to Discord</strong>: Ability to communicate with the administration team via Discord to obtain your custom endpoint.
            </motion.li>
          </ul>
        </div>

        {/* Obtaining Custom Endpoint */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Obtaining Your Custom Endpoint</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Join Our Discord Server</strong>: If you haven't already, join our <a href="https://discord.gg/u6qrhwnBs6" className="text-blue-400 hover:text-blue-300 underline transition-colors">Discord Server</a> where the admin team manages RPC endpoint allocations.
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <strong>Request a Custom Endpoint</strong>: Navigate to the appropriate channel (e.g., #rpc-requests) and send a request for a custom RPC endpoint.
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <strong>Receive Your Endpoint</strong>: An admin will provide you with a unique custom endpoint tailored to your needs.
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <strong>Secure Your Endpoint</strong>:
              <ul className="list-disc pl-6 space-y-4 mt-2">
                <motion.li 
                  className="glass-card p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <strong>Store Securely</strong>: Save your custom endpoint in a secure location (e.g., environment variables, secret managers).
                </motion.li>
                <motion.li 
                  className="glass-card p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <strong>Do Not Share</strong>: Treat your custom endpoint as a sensitive credential to prevent unauthorized access.
                </motion.li>
              </ul>
            </motion.li>
          </ol>
          <motion.div 
            className="glass-card p-4 rounded-lg mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <p>
              <strong>Note</strong>: If you lose access to your custom endpoint or need a new one, please contact the admin team through Discord.
            </p>
          </motion.div>
        </div>

        {/* Setting Up Your Development Environment */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Setting Up Your Development Environment</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Choose Your Language/Tool</strong>: Select a programming language or tool that supports HTTP/WebSocket requests (e.g., JavaScript, Python, cURL).
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <strong>Install Necessary Libraries</strong>:
              <ul className="list-disc pl-6 space-y-4 mt-2">
                <motion.li 
                  className="glass-card p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <strong>For HTTP Requests</strong>:
                  <ul className="list-disc pl-6 space-y-2">
                    <li><em>JavaScript</em>: <code className="bg-gray-700 px-2 py-1 rounded">axios</code>, <code className="bg-gray-700 px-2 py-1 rounded">fetch</code></li>
                    <li><em>Python</em>: <code className="bg-gray-700 px-2 py-1 rounded">requests</code></li>
                  </ul>
                </motion.li>
                <motion.li 
                  className="glass-card p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <strong>For WebSocket Connections</strong>:
                  <ul className="list-disc pl-6 space-y-2">
                    <li><em>JavaScript</em>: <code className="bg-gray-700 px-2 py-1 rounded">ws</code></li>
                    <li><em>Python</em>: <code className="bg-gray-700 px-2 py-1 rounded">websockets</code></li>
                  </ul>
                </motion.li>
              </ul>
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <strong>Configure Environment Variables</strong>:
              <p>Store your custom endpoint securely using environment variables.</p>
              <p>Example (Unix-based systems):</p>
              <CodeBlock>
export RPC_ENDPOINT=https://your-custom-endpoint.example.com
              </CodeBlock>
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <strong>Set Up Error Handling</strong>: Implement mechanisms to handle potential errors and retries.
            </motion.li>
            <motion.li 
              className="glass-card p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <strong>Test Connectivity</strong>: Perform a simple RPC call to ensure your setup is correct.
            </motion.li>
          </ol>
        </div>
      </div>
    </motion.section>
  );
};