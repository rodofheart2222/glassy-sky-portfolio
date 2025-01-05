import { motion } from "framer-motion";
import { CodeBlock } from "../../CodeBlock";

export const RequestAuthentication = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Including Custom Endpoint in Requests</h3>
      <p className="leading-relaxed mb-4">
        To authenticate your RPC requests, use your unique custom endpoint directly in the request URLs without needing additional headers or tokens.
      </p>

      {/* HTTP Requests */}
      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">HTTP Requests</h4>
        <p><strong>Endpoint Usage:</strong> Replace the base URL with your custom endpoint.</p>
        <CodeBlock>
{`curl -X POST https://rpc.your-custom-endpoint.example.com \\
  -H "Content-Type: application/json" \\
  -d '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getAccountInfo",
        "params": ["<ACCOUNT_ADDRESS>"]
      }'`}
        </CodeBlock>
      </div>

      {/* WebSocket Connections */}
      <div>
        <h4 className="text-xl font-bold mb-2">WebSocket Connections</h4>
        <p><strong>Establishing a Connection:</strong> Use your custom endpoint URL for the WebSocket connection.</p>
        <CodeBlock>
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
        </CodeBlock>
        <p className="mt-2"><strong>Note:</strong> Since authentication is handled via the custom endpoint, there is no need to include additional authentication headers.</p>
      </div>
    </div>
  );
};