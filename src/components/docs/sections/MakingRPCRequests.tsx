import { motion } from "framer-motion";

export const MakingRPCRequests = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="making-rpc-requests"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Making RPC Requests</h2>
      <div className="space-y-8 text-white/90">
        
        {/* HTTP POST Requests */}
        <div>
          <h3 className="text-2xl font-bold mb-4">HTTP POST Requests</h3>
          <p className="leading-relaxed mb-4">
            <strong>HTTP POST</strong> is a synchronous method suitable for requests that expect an immediate response. It's widely supported and straightforward to implement.
          </p>
          <h4 className="text-xl font-bold mb-2">Request Structure:</h4>
          <p>Use your custom endpoint as the base URL for the HTTP request.</p>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`POST https://rpc.your-custom-endpoint.example.com
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["<ACCOUNT_ADDRESS>"]
}`}
            </code>
          </pre>
          <p className="mt-2"><strong>Components:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><code>jsonrpc</code>: Specifies the JSON-RPC version, typically "2.0".</li>
            <li><code>id</code>: A unique identifier for the request, which will be echoed in the response.</li>
            <li><code>method</code>: The name of the RPC method to invoke.</li>
            <li><code>params</code>: An array of parameters required by the method.</li>
          </ul>

          <h4 className="text-xl font-bold mt-4 mb-2">Example: Fetching Account Information</h4>
          <p><strong>JSON Payload:</strong></p>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["<ACCOUNT_ADDRESS>", { "encoding": "jsonParsed" }]
}`}
            </code>
          </pre>

          <h4 className="text-xl font-bold mt-4 mb-2">cURL Example:</h4>
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

          <h4 className="text-xl font-bold mt-4 mb-2">Handling Responses</h4>
          <p className="mb-2"><strong>Success Response:</strong></p>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 12345678
    },
    "value": {
      "owner": "ExampleOwner",
      "lamports": 1000000,
      "data": "Base64EncodedData"
    }
  },
  "id": 1
}`}
            </code>
          </pre>

          <p className="mb-2"><strong>Error Response:</strong></p>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params"
  },
  "id": 1
}`}
            </code>
          </pre>
        </div>

        {/* WebSocket Connections */}
        <div>
          <h3 className="text-2xl font-bold mb-4">WebSocket Connections</h3>
          <p className="leading-relaxed mb-4">
            <strong>WebSockets</strong> provide a full-duplex communication channel over a single TCP connection. They are ideal for real-time data streaming and subscriptions.
          </p>

          <h4 className="text-xl font-bold mb-2">Establishing a Connection:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Connect to the WebSocket URL</strong>: Use your custom endpoint URL appended with <code>/ws</code>. Example: <code>wss://rpc.your-custom-endpoint.example.com/ws</code></li>
            <li><strong>No Additional Authentication Needed</strong>: Since the custom endpoint inherently authenticates the user, there is no need to send additional authentication headers or tokens.</li>
          </ol>

          <h4 className="text-xl font-bold mt-4 mb-2">JavaScript Example:</h4>
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

          <h4 className="text-xl font-bold mt-4 mb-2">Sending RPC Messages:</h4>
          <p>Use the same JSON-RPC structure as HTTP POST for sending messages over WebSockets.</p>

          <h4 className="text-xl font-bold mt-4 mb-2">Handling Incoming Messages:</h4>
          <p>Listen for messages from the server, which can include responses to requests or unsolicited notifications (e.g., subscription updates).</p>
        </div>

        {/* Supported RPC Methods */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Supported RPC Methods</h3>
          <p className="leading-relaxed mb-4">
            Our RPC endpoints support a wide range of methods to interact with the blockchain and perform various operations. Below are some commonly used methods:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>getAccountInfo</strong>: Retrieves information about a specific account.</li>
            <li><strong>sendTransaction</strong>: Submits a transaction to the network.</li>
            <li><strong>getBlock</strong>: Fetches details of a specific block.</li>
            <li><strong>getTransaction</strong>: Retrieves information about a specific transaction.</li>
            <li><strong>subscribe</strong>: Subscribes to real-time updates (e.g., account changes, new blocks).</li>
            <li><strong>unsubscribe</strong>: Cancels a subscription.</li>
            <li><strong>getRecentBlockhash</strong>: Obtains the latest blockhash for transaction purposes.</li>
            <li><strong>getBalance</strong>: Retrieves the balance of an account.</li>
          </ul>
          <p className="mt-4">
            Refer to the <a href="/api-reference" className="text-blue-400 underline">API Reference</a> section for a complete list of supported methods and their parameters.
          </p>
        </div>

      </div>
    </motion.section>
  );
};
