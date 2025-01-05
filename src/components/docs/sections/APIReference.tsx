import { motion } from "framer-motion";

export const APIReference = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="api-reference"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">API Reference</h2>
      <div className="space-y-8 text-white/90">
        
        {/* Method: getAccountInfo */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Method: getAccountInfo</h3>
          <p className="leading-relaxed mb-4">
            <strong>Description:</strong> Retrieves detailed information about a specific account, including its balance, owner, and associated data.
          </p>
          <p><strong>Endpoint:</strong> <code>https://rpc.your-custom-endpoint.example.com</code></p>
          <p><strong>HTTP Method:</strong> POST</p>

          <h4 className="text-xl font-bold mt-4 mb-2">Parameters:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>accountAddress</strong> (string): The public address of the account to retrieve information for.</li>
            <li><strong>encoding</strong> (optional, string): The encoding format for the account data. Defaults to <code>jsonParsed</code>.</li>
          </ol>

          <h4 className="text-xl font-bold mt-4 mb-2">Request Example:</h4>
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

          <h4 className="text-xl font-bold mt-4 mb-2">Response Example:</h4>
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

          <h4 className="text-xl font-bold mt-4 mb-2">Error Responses:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Invalid Account Address:</strong>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
                <code>
                  {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Account address format is incorrect."
  },
  "id": 1
}`}
                </code>
              </pre>
            </li>
            <li>
              <strong>Server Error:</strong>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
                <code>
                  {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Internal error",
    "data": "An unexpected error occurred on the server."
  },
  "id": 1
}`}
                </code>
              </pre>
            </li>
          </ul>
        </div>

        {/* Method: sendTransaction */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Method: sendTransaction</h3>
          <p className="leading-relaxed mb-4">
            <strong>Description:</strong> Submits a signed transaction to the network for processing.
          </p>
          <p><strong>Endpoint:</strong> <code>https://rpc.your-custom-endpoint.example.com</code></p>
          <p><strong>HTTP Method:</strong> POST</p>

          <h4 className="text-xl font-bold mt-4 mb-2">Parameters:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>signedTransaction</strong> (string): The serialized and signed transaction data.</li>
            <li><strong>options</strong> (optional, object):
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>skipPreflight</strong> (boolean): If true, skips the preflight checks.</li>
                <li><strong>preflightCommitment</strong> (string): The level of commitment desired for the preflight simulation.</li>
              </ul>
            </li>
          </ol>

          <h4 className="text-xl font-bold mt-4 mb-2">Request Example:</h4>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "sendTransaction",
  "params": ["<SIGNED_TRANSACTION>", { "skipPreflight": false, "preflightCommitment": "confirmed" }]
}`}
            </code>
          </pre>

          <h4 className="text-xl font-bold mt-4 mb-2">Response Example:</h4>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "result": "<TRANSACTION_SIGNATURE>",
  "id": 2
}`}
            </code>
          </pre>

          <h4 className="text-xl font-bold mt-4 mb-2">Error Responses:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Invalid Transaction Format:</strong>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
                <code>
                  {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Signed transaction data is malformed."
  },
  "id": 2
}`}
                </code>
              </pre>
            </li>
            <li>
              <strong>Insufficient Funds:</strong>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
                <code>
                  {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32002,
    "message": "Transaction failed",
    "data": "Insufficient lamports for transaction."
  },
  "id": 2
}`}
                </code>
              </pre>
            </li>
          </ul>
        </div>

        {/* Method: subscribe */}
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
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "subscribe",
  "params": ["accountChange", { "account": "<ACCOUNT_ADDRESS>", "encoding": "jsonParsed" }]
}`}
            </code>
          </pre>

          <h4 className="text-xl font-bold mt-4 mb-2">Subscription Response Example:</h4>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
              {`{
  "jsonrpc": "2.0",
  "result": "subscription_id_12345",
  "id": 3
}`}
            </code>
          </pre>

          <h4 className="text-xl font-bold mt-4 mb-2">Notification Example:</h4>
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
            <code>
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
            </code>
          </pre>

          <h4 className="text-xl font-bold mt-4 mb-2">Error Responses:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unsupported Event Type:</strong>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
                <code>
                  {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32601,
    "message": "Method not found",
    "data": "Event type 'invalidEvent' is not supported."
  },
  "id": 3
}`}
                </code>
              </pre>
            </li>
            <li>
              <strong>Missing Parameters:</strong>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
                <code>
                  {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Missing required parameters for subscription."
  },
  "id": 3
}`}
                </code>
              </pre>
            </li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
};
