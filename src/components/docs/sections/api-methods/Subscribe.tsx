import { motion } from "framer-motion";
import { CodeBlock } from "../../CodeBlock";

export const Subscribe = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Method: subscribe</h3>
      <p className="leading-relaxed mb-4">
        <strong>Description:</strong> Subscribes to specific events or data streams, enabling real-time notifications.
      </p>
      <p><strong>Endpoint:</strong> <code>wss://rpc.your-custom-endpoint.example.com/ws</code></p>
      <p><strong>WebSocket Method:</strong> JSON-RPC over WebSockets</p>

      <h4 className="text-xl font-bold mt-4 mb-2">Parameters:</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>eventType</strong> (string): The type of event to subscribe to (e.g., <code>accountChange</code>, <code>newBlock</code>).</li>
        <li><strong>parameters</strong> (optional, object): Additional parameters to refine the subscription.</li>
      </ol>

      <h4 className="text-xl font-bold mt-4 mb-2">Subscription Request Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "subscribe",
  "params": ["accountChange", { "account": "<ACCOUNT_ADDRESS>", "encoding": "jsonParsed" }]
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Subscription Response Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "result": "subscription_id_12345",
  "id": 3
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Notification Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "method": "accountChange",
  "params": {
    "subscription": "subscription_id_12345",
    "result": {
      "owner": "ExampleOwner",
      "lamports": 1500000,
      "data": "UpdatedBase64EncodedData"
    }
  }
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Error Responses:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Unsupported Event Type:</strong>
          <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32601,
    "message": "Method not found",
    "data": "Event type 'invalidEvent' is not supported."
  },
  "id": 3
}`}
          </CodeBlock>
        </li>
        <li>
          <strong>Missing Parameters:</strong>
          <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Missing required parameters for subscription."
  },
  "id": 3
}`}
          </CodeBlock>
        </li>
      </ul>
    </div>
  );
};