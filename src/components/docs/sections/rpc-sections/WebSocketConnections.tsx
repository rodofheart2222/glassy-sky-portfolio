import { CodeBlock } from "../../CodeBlock";

export const WebSocketConnections = () => {
  return (
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

      <h4 className="text-xl font-bold mt-4 mb-2">Sending RPC Messages:</h4>
      <p>Use the same JSON-RPC structure as HTTP POST for sending messages over WebSockets.</p>

      <h4 className="text-xl font-bold mt-4 mb-2">Handling Incoming Messages:</h4>
      <p>Listen for messages from the server, which can include responses to requests or unsolicited notifications (e.g., subscription updates).</p>
    </div>
  );
};