import { motion } from "framer-motion";

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
            <li><strong>API Credentials</strong>: An active account with access to your unique API key.</li>
          </ul>
        </div>

        {/* Obtaining API Credentials */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Obtaining API Credentials</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Sign Up / Log In</strong>: Visit our <a href="https://portal.example.com" className="text-blue-400 hover:text-blue-300 underline transition-colors">Account Portal</a> and sign up or log in.</li>
            <li><strong>Navigate to API Keys</strong>: Once logged in, go to the "API Keys" section in your dashboard.</li>
            <li><strong>Generate a New API Key</strong>:
              <ul className="list-disc pl-6 space-y-2">
                <li>Click on "Create New API Key".</li>
                <li>Provide a name or description for the key (e.g., "MyApp Integration").</li>
                <li>Click "Generate" to create the key.</li>
              </ul>
            </li>
            <li><strong>Secure Your API Key</strong>:
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Copy the Key</strong>: Immediately copy the API key as it will be displayed only once.</li>
                <li><strong>Store Securely</strong>: Save it in a secure location (e.g., environment variables, secret managers).</li>
                <li><strong>Do Not Expose</strong>: Avoid hardcoding the API key in client-side code or repositories.</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4">
            <strong>Note</strong>: If you lose your API key, you can regenerate or revoke it from the API Keys section.
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
              <p>Store your API key securely using environment variables.</p>
              <p>Example (Unix-based systems):</p>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>export RPC_API_KEY=your_api_key_here</code>
              </pre>
            </li>
            <li><strong>Set Up Error Handling</strong>: Implement mechanisms to handle potential errors and retries.</li>
            <li><strong>Test Connectivity</strong>: Perform a simple RPC call to ensure your setup is correct.</li>
          </ol>
        </div>

      </div>
    </motion.section>
  );
};