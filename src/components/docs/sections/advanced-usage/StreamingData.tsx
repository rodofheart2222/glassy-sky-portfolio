import { CodeBlock } from "../../CodeBlock";

export const StreamingData = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Streaming Data</h3>
      <p className="leading-relaxed mb-4">
        <strong>Streaming data</strong> allows continuous data flow from the server to the client, enabling real-time updates without repeated polling.
      </p>
      <h4 className="text-xl font-bold mt-4 mb-2">Use Cases:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Real-Time Notifications</strong>: Receive instant updates on account changes, new blocks, or transaction statuses.</li>
        <li><strong>Live Dashboards</strong>: Power dynamic dashboards that reflect live data.</li>
        <li><strong>Event-Driven Applications</strong>: Trigger actions based on specific events in the blockchain.</li>
      </ul>
      <h4 className="text-xl font-bold mt-4 mb-2">Implementing Streaming with WebSockets:</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Establish a WebSocket Connection</strong>: Connect to the WebSocket endpoint using your custom endpoint URL.</li>
        <li><strong>Subscribe to Desired Events</strong>: Send subscription requests for specific events (e.g., accountSubscribe).</li>
        <li><strong>Handle Incoming Data</strong>: Process incoming messages as events occur.</li>
        <li><strong>Manage Connection Lifecycle</strong>: Handle reconnections, disconnections, and errors gracefully.</li>
      </ol>
      <h4 className="text-xl font-bold mt-4 mb-2">Example: Subscribing to Multiple Accounts</h4>
      <CodeBlock>
{`const socket = new WebSocket('wss://rpc.your-custom-endpoint.example.com/ws');

socket.onopen = () => {
  // Subscribe to Account 1
  socket.send(JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "accountSubscribe",
    params: ["<ACCOUNT_ADDRESS_1>", { "encoding": "jsonParsed" }]
  }));

  // Subscribe to Account 2
  socket.send(JSON.stringify({
    jsonrpc: "2.0",
    id: 2,
    method: "accountSubscribe",
    params: ["<ACCOUNT_ADDRESS_2>", { "encoding": "jsonParsed" }]
  }));
};

socket.onmessage = (event) => {
  const response = JSON.parse(event.data);
  console.log('Update:', response);
};`}
      </CodeBlock>
    </div>
  );
};