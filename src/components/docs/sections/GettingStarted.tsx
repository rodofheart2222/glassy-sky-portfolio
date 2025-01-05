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
          <p className="leading-relaxed mb-4">
            Before diving into using the RPC endpoints, ensure you have the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Basic Understanding of RPC</strong>: Familiarity with RPC concepts and JSON-RPC protocol.</li>
            <li><strong>Development Environment</strong>: A setup that allows making HTTP or WebSocket requests (e.g., Node.js, Python, cURL).</li>
            <li><strong>Access to Discord</strong>: Ability to communicate with the administration team via Discord to obtain your custom endpoint.</li>
          </ul>
        </div>

        {/* Obtaining Custom Endpoint */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Obtaining Your Custom Endpoint</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Join Our Discord Server</strong>: If you haven't already, join our <a href="https://discord.gg/example" className="text-blue-400 hover:text-blue-300 underline transition-colors">Discord Server</a> where the admin team manages RPC endpoint allocations.</li>
            <li><strong>Request a Custom Endpoint</strong>: Navigate to the appropriate channel (e.g., #rpc-requests) and send a request for a custom RPC endpoint.</li>
            <li><strong>Receive Your Endpoint</strong>: An admin will provide you with a unique custom endpoint tailored to your needs.</li>
            <li><strong>Secure Your Endpoint</strong>:
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Store Securely</strong>: Save your custom endpoint in a secure location (e.g., environment variables, secret managers).</li>
                <li><strong>Do Not Share</strong>: Treat your custom endpoint as a sensitive credential to prevent unauthorized access.</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4">
            <strong>Note</strong>: If you lose access to your custom endpoint or need a new one, please contact the admin team through Discord.
          </p>
        </div>

        {/* Setting Up Your Development Environment */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Setting Up Your Development Environment</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Choose Your Language/Tool</strong>: Select a programming language or tool that supports HTTP/WebSocket requests (e.g., JavaScript, Python, cURL).</li>
            <li><strong>Install Necessary Libraries</strong>:
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>For HTTP Requests</strong>:
                  <ul className="list-disc pl-6 space-y-2">
                    <li><em>JavaScript</em>: <code className="bg-gray-700 px-2 py-1 rounded">axios</code>, <code className="bg-gray-700 px-2 py-1 rounded">fetch</code></li>
                    <li><em>Python</em>: <code className="bg-gray-700 px-2 py-1 rounded">requests</code></li>
                  </ul>
                </li>
                <li><strong>For WebSocket Connections</strong>:
                  <ul className="list-disc pl-6 space-y-2">
                    <li><em>JavaScript</em>: <code className="bg-gray-700 px-2 py-1 rounded">ws</code></li>
                    <li><em>Python</em>: <code className="bg-gray-700 px-2 py-1 rounded">websockets</code></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>Configure Environment Variables</strong>:
              <p>Store your custom endpoint securely using environment variables.</p>
              <p>Example (Unix-based systems):</p>
              <CodeBlock>
export RPC_ENDPOINT=https://your-custom-endpoint.example.com
              </CodeBlock>
            </li>
            <li><strong>Set Up Error Handling</strong>: Implement mechanisms to handle potential errors and retries.</li>
            <li><strong>Test Connectivity</strong>: Perform a simple RPC call to ensure your setup is correct.</li>
          </ol>
        </div>

      </div>
    </motion.section>
  );
};