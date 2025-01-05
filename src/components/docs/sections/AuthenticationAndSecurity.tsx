import { motion } from "framer-motion";

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
        
        {/* Custom Endpoint Management */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Custom Endpoint Management</h3>
          <p className="leading-relaxed mb-4">
            Instead of using API keys, our authentication mechanism relies on unique custom endpoints assigned to each user. These endpoints are provided by our administrators via Discord and are tailored to your specific needs.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Obtaining Your Endpoint</strong>: Request your custom endpoint through our Discord server in the designated channel (e.g., #rpc-requests).</li>
            <li><strong>Endpoint Structure</strong>: Your custom endpoint will be a unique URL, such as <code className="bg-black/30 px-2 py-1 rounded">https://rpc.your-custom-endpoint.example.com</code>.</li>
            <li><strong>Securing Your Endpoint</strong>:
              <ul className="list-disc pl-6 space-y-2">
                <li>Store your endpoint securely using environment variables or secret management tools.</li>
                <li>Avoid sharing your endpoint publicly to prevent unauthorized access.</li>
              </ul>
            </li>
            <li><strong>Revoking and Regenerating</strong>: If you suspect your endpoint has been compromised or need a new one, contact the admin team through Discord to revoke the existing endpoint and obtain a new one.</li>
          </ol>
        </div>

        {/* Including Custom Endpoint in Requests */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Including Custom Endpoint in Requests</h3>
          <p className="leading-relaxed mb-4">
            To authenticate your RPC requests, use your unique custom endpoint directly in the request URLs without needing additional headers or tokens.
          </p>

          {/* HTTP Requests */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">HTTP Requests</h4>
            <p><strong>Endpoint Usage:</strong> Replace the base URL with your custom endpoint.</p>
            <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
              <code>
                {`curl -X POST https://rpc.your-custom-endpoint.example.com \\
  -H "Content-Type: application/json" \\
  -d '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getAccountInfo",
        "params": ["<ACCOUNT_ADDRESS>"]
      }'`}
              </code>
            </pre>
          </div>

          {/* WebSocket Connections */}
          <div>
            <h4 className="text-xl font-bold mb-2">WebSocket Connections</h4>
            <p><strong>Establishing a Connection:</strong> Use your custom endpoint URL for the WebSocket connection.</p>
            <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
              <code>
                {`const socket = new WebSocket('wss://rpc.your-custom-endpoint.example.com/ws');

socket.onopen = () => {
  console.log('WebSocket connection established.');

  // Subscribe to account changes
  const subscribeMessage = {
    jsonrpc: "2.0",
    id: 2,
    method: "accountSubscribe",
    params: ["<ACCOUNT_ADDRESS>", { "encoding": "jsonParsed" }]
  };
  socket.send(JSON.stringify(subscribeMessage));
};

socket.onmessage = (event) => {
  const response = JSON.parse(event.data);
  console.log('Received:', response);
};

socket.onclose = () => {
  console.log('WebSocket connection closed.');
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};`}
              </code>
            </pre>
            <p className="mt-2"><strong>Note:</strong> Since authentication is handled via the custom endpoint, there is no need to include additional authentication headers.</p>
          </div>
        </div>

        {/* Security Best Practices */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Security Best Practices</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Secure Storage</strong>: Store your custom endpoint securely using environment variables or secret management tools.</li>
            <li><strong>Least Privilege</strong>: Ensure your custom endpoint has access only to the necessary resources required for your application.</li>
            <li><strong>HTTPS/WSS</strong>: Always use secure protocols (<code className="bg-black/30 px-2 py-1 rounded">https</code> for HTTP requests and <code className="bg-black/30 px-2 py-1 rounded">wss</code> for WebSockets) to encrypt data in transit.</li>
            <li><strong>Regular Rotation</strong>: Periodically request new custom endpoints to minimize risk exposure.</li>
            <li><strong>Avoid Exposure</strong>: Do not expose your custom endpoint in client-side code, URLs, or public repositories.</li>
            <li><strong>Monitor Usage</strong>: Keep an eye on your endpoint usage to detect any unusual or unauthorized activities.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
};