export const BatchRequests = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Batch Requests</h3>
      <p className="leading-relaxed mb-4">
        <strong>Batch requests</strong> allow multiple RPC calls to be sent in a single HTTP request, reducing the number of network round-trips and improving efficiency.
      </p>
      <h4 className="text-xl font-bold mt-4 mb-2">Structure:</h4>
      <p>A batch request is an array of individual RPC request objects.</p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`[
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": ["<ACCOUNT_ADDRESS_1>"]
  },
  {
    "jsonrpc": "2.0",
    "id": 2,
    "method": "getAccountInfo",
    "params": ["<ACCOUNT_ADDRESS_2>"]
  },
  {
    "jsonrpc": "2.0",
    "id": 3,
    "method": "getAccountInfo",
    "params": ["<ACCOUNT_ADDRESS_3>"]
  }
]`}
        </code>
      </pre>
      <p className="mt-2"><strong>cURL Example:</strong></p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`curl -X POST https://rpc.your-custom-endpoint.example.com \\
  -H "Content-Type: application/json" \\
  -d '[
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getAccountInfo",
      "params": ["<ACCOUNT_ADDRESS_1>"]
    },
    {
      "jsonrpc": "2.0",
      "id": 2,
      "method": "getAccountInfo",
      "params": ["<ACCOUNT_ADDRESS_2>"]
    },
    {
      "jsonrpc": "2.0",
      "id": 3,
      "method": "getAccountInfo",
      "params": ["<ACCOUNT_ADDRESS_3>"]
    }
  ]'`}
        </code>
      </pre>
      <h4 className="text-xl font-bold mt-4 mb-2">Handling Responses:</h4>
      <p>The server responds with an array of responses corresponding to each request.</p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`[
  {
    "jsonrpc": "2.0",
    "result": { /* Account Info 1 */ },
    "id": 1
  },
  {
    "jsonrpc": "2.0",
    "result": { /* Account Info 2 */ },
    "id": 2
  },
  {
    "jsonrpc": "2.0",
    "result": { /* Account Info 3 */ },
    "id": 3
  }
]`}
        </code>
      </pre>
    </div>
  );
};